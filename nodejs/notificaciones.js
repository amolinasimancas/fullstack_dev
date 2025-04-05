function enviarNotificacion(mensaje, destinatario) {
    console.log(`Enviando "${mensaje}" a ${destinatario}`);
    // Lógica real de envío...
  }
  
  const notificacionID = setTimeout(() => {
    enviarNotificacion("Tu pedido ha sido procesado", "usuario@ejemplo.com");
  }, 5000);
  
  // Si algo falla antes, podemos cancelar la notificación
  function cancelarProceso() {
    console.log("Proceso fallido, cancelando notificación");
    clearTimeout(notificacionID);
  }