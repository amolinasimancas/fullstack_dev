// Función para obtener el timestamp actual
function getTimeStamp() {
    return Date.now();
  }
  
  // Función para obtener la fecha en formato largo
  function getLongTime(locale = 'es') {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
  
    return new Date().toLocaleDateString(locale, options);
  }
  
  // Exportar las funciones
  module.exports = {
    getTimeStamp,
    getLongTime
  };