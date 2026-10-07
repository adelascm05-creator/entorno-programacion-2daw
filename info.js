const os = require("os");
const ahora = new Date();

console.log("Versión de Node.js: " + process.version);
console.log("Sistema operativo: " + os.type() + " (" + process.platform + ")");
console.log("Arquitectura del sistema: " + process.arch);
console.log("Directorio actual: " + process.cwd());
console.log("Fecha y hora de ejecución: " + ahora.toLocaleString());