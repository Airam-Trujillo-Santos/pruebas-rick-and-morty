let conexion = new XMLHttpRequest();

addEventListener('load', inicializarEventos, false);
let datos;

//Mostrar 3 datos no correlativos de un personaje
/** CÓDIGO: 
function inicializarEventos() {
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", "https://rickandmortyapi.com/api/character/3/", true);
    conexion.send();

}

function procesarEventos() {
    if (conexion.readyState == 4) {
        datos = JSON.parse(conexion.responseText);

        console.log(datos);
        let mensaje="URL del personaje: "+datos.url+" Nombre del presonaje: "+ datos.name+" Especie del personaje: "+ datos.species;
        console.log(mensaje);
        
    }

}

RESULTADO:
URL del personaje: https://rickandmortyapi.com/api/character/3 Nombre del presonaje: Summer Smith Especie del personaje: Human
*/

//Mostrar 3 episodios no correlativos en los que aparezca un personaje
function inicializarEventos() {
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", "https://rickandmortyapi.com/api/character/3/", true);
    conexion.send();

}

function procesarEventos() {
    if (conexion.readyState == 4) {
        datos = JSON.parse(conexion.responseText);

        console.log(datos);
        let mensaje="URL del personaje: "+datos.url+" Nombre del presonaje: "+ datos.name+" Especie del personaje: "+ datos.species;
        console.log(mensaje);
        
    }

}