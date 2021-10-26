// var os = require("os");

// console.log("Ruta: "+os.tmpdir());

var fs = require("fs");

fs.writeFile("MIarchivo.txt","Hola mundo con Node",error=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Archivo creado...!!!");
    }
});