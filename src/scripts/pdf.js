const fs = require('fs');

console.log("Iniciando lenctura");
var files =fs.readdirSync("../../public/media/docs/Boletines");
console.log("Finalizando lectura");
console.log(files)