console.log("ID del proceso:", process.pid);
console.log("Directorio actual:", process.cwd());
console.log("Versión de Node:", process.version);
console.log("Plataforma:", process.platform);
console.log("Arquitectura:", process.arch);

console.log(process.env); // Muestra todas las variables de entorno
console.log("PATH:", process.env.PATH);
console.log("USER PROFILE:", process.env.USER_PROFILE);
console.log("NODE_ENV:", process.env.NODE_ENV || "No definido");

const memory = process.memoryUsage();
console.log(memory);

process.on('exit', (code) => {
    console.log("El proceso está terminado", code);
  });

  process.on('SIGINT', () => {
    console.log("Se recibió la señal de interrupción");
    // Limpiar recursos, cerrar conexiones, etc.
    process.exit(0);
  });

  console.log("Escribe algo y presiona Enter o Control+C para salir");

process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === 'salir') {
    console.log("Comando de salida recibido");
    process.exit();
  } else {
    console.log("Escribiste:", input);
    console.log("Escribe 'salir' para terminar o escribe algo más");
  }
});