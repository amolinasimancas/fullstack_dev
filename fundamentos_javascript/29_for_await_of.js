async function fetchNewData() {
    const URLs = [
      "https://rickandmortyapi.com/api/character",  // Reemplazar con URLs reales
      "https://rickandmortyapi.com/api/location",
      "https://rickandmortyapi.com/api/episode"
    ];
  
    try {
      for await (let URL of URLs) {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchNewData();