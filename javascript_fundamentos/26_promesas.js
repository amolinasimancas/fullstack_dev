const myPromise = new Promise((resolve, reject) => {
    let mockApiResponse = true; // Simulación de una respuesta de API
  
    setTimeout(() => {
      if (mockApiResponse) {
        resolve('Operación completada con éxito');
      } else {
        reject('Error en la operación');
      }
    }, 3000);
  });
  
  // Uso de then y catch para manejar el resultado
  myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));