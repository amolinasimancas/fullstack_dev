const fs = require('fs');
const path = require('path');

async function transcriptAudio(audioFilePath, apiKey) {
    try {
      // Verificar si el archivo existe
      if (!fs.existsSync(audioFilePath)) {
        throw new Error('El archivo de audio no existe o no tienes un archivo de audio');
      }
  
      // Leer el archivo de audio
      const audioFile = fs.readFileSync(audioFilePath);
  
      // Crear FormData para la solicitud
      const formData = new FormData();
  
      // Crear un blob con el contenido del archivo
      const blob = new Blob([audioFile]);
  
      // Añadir el archivo y el modelo a FormData
      formData.append('file', blob, audioFilePath);
      formData.append('model', 'whisper-1');
  
      // Realizar la solicitud a la API de Whisper
      const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`},
        body: formData
      });
  
      // Verificar si la respuesta es correcta
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
      }
  
      // Obtener los datos de la respuesta
      const data = await response.json();
      const transcription = data.text;
  
      // Crear la ruta para el archivo de salida
      const outputFilePath = path.join(
        path.dirname(audioFilePath),
        path.basename(audioFilePath, path.extname(audioFilePath)) + '_transcription.txt'
      );
  
      // Guardar la transcripción en un archivo
      fs.writeFileSync(outputFilePath, transcription);
  
      console.log(`Transcripción guardada en ${outputFilePath}`);
      return transcription;
    } 
    
    catch (error) {
      console.error('Error durante la transcripción:', error.message);
      throw error;
    }
}

const audioPath = './testOpenAI.mp3';
const openAIApiKey = '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';

transcriptAudio(audioPath, openAIApiKey)
  .then((transcription) => {
    console.log('Transcripción completada con éxito');
    console.log(transcription);
  })
  .catch((error) => {
    console.error('Falló la transcripción', error);
  });