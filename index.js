const os= require('os');
const fs= require('fs'); 

var texto = 'Información de mi computador \n';
texto +=Capacidad_memoria()+'\n';
texto +=Version_sistema_operarivo()+'\n';
texto +=Arquitectura_cpu()+'\n';
texto +=Plataforma()+'\n';
texto +=cantidad_memoria()+'\n';
texto +=endianness()+'\n';
texto +=nombre_host()+'\n';
texto +=matriz_promedio()+'\n';
texto +=directorio()+'\n';
texto +=nombre_SO()+'\n';
// Archivo de texto
fs.writeFile("archivo.txt", texto, function(error){
    if (error){
    } 
    else{
        console.log("El archivo fue creado");
    }
});

// Funcion de capacidad de memoria
function Capacidad_memoria(){
    var memoria='Total Memoria :'+ os.totalmem();
    return memoria;
}

// Función de Version de sistemas operativos
function Version_sistema_operarivo(){
    var version='Versión del sistema operativo :'+ os.release();
    return version;
}

// Funcion cpu
function Arquitectura_cpu(){
    var constante='Arquitectura CPU : '+ os.arch();
    return constante;
}

// Funcion Sistema Operativo especifico
function Plataforma(){
    var espefico='Plataforma : '+ os.platform();
    return espefico;
}

// Funcion Cantidad de memoria
function cantidad_memoria(){
    var cantidad='Cantidad de Memoria: '+ os.freemem();
    return cantidad;
}
// Funcion Cantidad de memoria
function cantidad_memoria(){
    var cantidad='Cantidad de Memoria: '+ os.freemem()/1000000000;
    return cantidad;
}

// Funcion Cadena CPU
function endianness(){
    var endi='Identifica el edianness : '+ os.endianness();
    return endi;
}

// Funcion nombre
function nombre_host(){
    var nombre='Nombre de host : '+ os.hostname();
    return nombre
}

// Funcion matriz de promedios
function matriz_promedio(){
    var matriz='Matriz de promedio : '+ os.loadavg();
    return matriz;
}

// Funcion directorio
function directorio(){
    var directori='Directorio predeterminado : '+ os.tmpdir();
    return directori;
}

// Funcion  nombre del sistema
function nombre_SO(){
    var SO='Nombre del sistema operativo : '+ os.type();
    return SO;
}

