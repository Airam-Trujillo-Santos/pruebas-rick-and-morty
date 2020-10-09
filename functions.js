let conexion = new XMLHttpRequest();

addEventListener('load', inicializarEventos, false);
let datos;
//Mostrar datos de personajes

/* CÓDIGO


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/character/");

xhr.send();
*/
/*
RESULTADO 
{
    "info": {
        "count": 671,
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                ...
            ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                ...
               
            ],
            "url": "https://rickandmortyapi.com/api/character/2",
            "created": "2017-11-04T18:50:21.651Z"
        },
         ]
}
*/
//Mostrar datos de personaje 3
/* CÓDIGO

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/character/3/");

xhr.send();

*/
/*
RESULTADO 
{
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
     ...
    ],
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z"
}

*/
//Mostrar datos de localizaciones
/* CÓDIGO

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/location");

xhr.send();

*/
/*
RESULTADO
{
    "info": {
        "count": 108,
        "pages": 6,
        "next": "https://rickandmortyapi.com/api/location?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137",
            "residents": [
                "https://rickandmortyapi.com/api/character/38",
                "https://rickandmortyapi.com/api/character/45",
                ...
            ],
            "url": "https://rickandmortyapi.com/api/location/1",
            "created": "2017-11-10T12:42:04.162Z"
        },
        {
            "id": 2,
            "name": "Abadango",
            "type": "Cluster",
            "dimension": "unknown",
            "residents": [
                "https://rickandmortyapi.com/api/character/6"
            ],
            "url": "https://rickandmortyapi.com/api/location/2",
            "created": "2017-11-10T13:06:38.182Z"
        },
        {
            "id": 3,
            "name": "Citadel of Ricks",
            "type": "Space station",
            "dimension": "unknown",
            "residents": [
                "https://rickandmortyapi.com/api/character/8",
                "https://rickandmortyapi.com/api/character/14",
                ...
            ],
            "url": "https://rickandmortyapi.com/api/location/3",
            "created": "2017-11-10T13:08:13.191Z"
        },
        ...
   ]
}
 */
//Mostrar datos de episodios
/* CÓDIGO

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/episode/");

xhr.send();

*/
/*

RESULTADO
{
    "info": {
        "count": 41,
        "pages": 3,
        "next": "https://rickandmortyapi.com/api/episode/?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Pilot",
            "air_date": "December 2, 2013",
            "episode": "S01E01",
            "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2",
                "https://rickandmortyapi.com/api/character/35",
                
              ...
            ],
            "url": "https://rickandmortyapi.com/api/episode/1",
            "created": "2017-11-10T12:56:33.798Z"
        },
        {
            "id": 2,
            "name": "Lawnmower Dog",
            "air_date": "December 9, 2013",
            "episode": "S01E02",
            "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2",
                ...
            ],
            "url": "https://rickandmortyapi.com/api/episode/2",
            "created": "2017-11-10T12:56:33.916Z"
        },
        ...
    ]
}
 */
//Mostrar datos de episodio 25
/* CÓDIGO

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/episode/25");

xhr.send();
*/
/*
RESULTADO
{
    "id": 25,
    "name": "Vindicators 3: The Return of Worldender",
    "air_date": "August 13, 2017",
    "episode": "S03E04",
    "characters": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
       ...
    ],
    "url": "https://rickandmortyapi.com/api/episode/25",
    "created": "2017-11-10T12:56:36.310Z"
}
 */
//Mostrar la localización 6
/* CÓDIGO

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/location/6");

xhr.send();
*/
/*
RESULTADO
{
    "id": 6,
    "name": "Interdimensional Cable",
    "type": "TV",
    "dimension": "unknown",
    "residents": [
        "https://rickandmortyapi.com/api/character/20",
        "https://rickandmortyapi.com/api/character/28",
        "https://rickandmortyapi.com/api/character/29",
       ...
       
    ],
    "url": "https://rickandmortyapi.com/api/location/6",
    "created": "2017-11-10T13:09:09.102Z"
}
 */
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
*/
/*
RESULTADO:
URL del personaje: https://rickandmortyapi.com/api/character/3 Nombre del presonaje: Summer Smith Especie del personaje: Human
*/

//Mostrar 3 episodios no correlativos en los que aparezca un personaje

/* 
CÓDIGO:

function inicializarEventos() {
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", "https://rickandmortyapi.com/api/character/5/", true);
    conexion.send();

}

function procesarEventos() {
    if (conexion.readyState == 4) {
        datos = JSON.parse(conexion.responseText);

        
        let episodio1=datos.episode[0];
        episodio1=episodio1.split("/");
        let episodio2=datos.episode[2];
        episodio2=episodio2.split("/");
        let episodio3=datos.episode[4];
        episodio3=episodio3.split("/");
        let episodios=episodio1[episodio1.length-1]+","+episodio2[episodio2.length-1]+","+episodio3[episodio3.length-1]

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                datosEpisodios=JSON.parse(this.responseText);
                console.log(datosEpisodios);
            }
        });

        xhr.open("GET", "https://rickandmortyapi.com/api/episode/"+episodios);
        xhr.send();
    }

}
*/
/*
RESULTADO
 Array(3)
0: {id: 6, name: "Rick Potion #9", air_date: "January 27, 2014", episode: "S01E06", characters: Array(24), …}
1: {id: 8, name: "Rixty Minutes", air_date: "March 17, 2014", episode: "S01E08", characters: Array(57), …}
2: {id: 10, name: "Close Rick-counters of the Rick Kind", air_date: "April 7, 2014", episode: "S01E10", characters: Array(61), …}
length: 3
__proto__: Array(0)  */

//Mostrar solos campos del segundo nivel del json devuelto por get de todos los personajes.
//Pedir todos los personajes, mostrar un dato de cada personaje, mostrar dato de segundo nivel de cada personaje.
/* CÓDIGO

function inicializarEventos() {
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", "https://rickandmortyapi.com/api/character/", true);
    conexion.send();

}

function procesarEventos() {
    if (conexion.readyState == 4) {
        datos = JSON.parse(conexion.responseText);

        for (let i = 0; i < datos.results.length; i++) {
            console.log("Nombre del personaje: "+datos.results[i].name);
            console.log("Viene de :"+datos.results[i].origin.name);
            console.log("url del lugar de origen:"+datos.results[i].origin.url);
            console.log("Vive en :"+datos.results[i].location.name);
            console.log("url del lugar de residencia:"+datos.results[i].location.url);
            for (let j = 0; j < datos.results[i].episode.length; j++) {
                console.log("Aparece en el episodio: "+datos.results[i].episode[j]) ;              
            }
        }
        
    }

}
*/

/*
RESULTADO
Nombre del personaje: Rick Sanchez
Viene de :Earth (C-137)
url del lugar de origen:https://rickandmortyapi.com/api/location/1
Vive en :Earth (Replacement Dimension)
url del lugar de residencia:https://rickandmortyapi.com/api/location/20
Aparece en el episodio: https://rickandmortyapi.com/api/episode/1
Aparece en el episodio: https://rickandmortyapi.com/api/episode/2
Aparece en el episodio: https://rickandmortyapi.com/api/episode/3
 */


//Del episodio te envíen como parámetro, sacar por pantalla la localización donde reside cada 
//personaje. Ejemplo: Si el usuario introduce episodio 1. 
//Debe salir una relación similar a esta: 1 - Rick Sanchez - Earth (Replacement Dimension)
/* CÓDIGO


let numEpisodio=3;
function inicializarEventos() {
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", "https://rickandmortyapi.com/api/episode/"+numEpisodio+"/", true);
    conexion.send();

}

function procesarEventos() {
    if (conexion.readyState == 4) {
        datos = JSON.parse(conexion.responseText);
        

        for (let i = 0; i < datos.characters.length; i++) {
            let xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                    personaje=JSON.parse(this.responseText);
                    console.log(numEpisodio+" - "+personaje.name+ " - "+personaje.location.name);
                    
                }
            });
    
            xhr.open("GET", datos.characters[i]);
            xhr.send();
            
        }

       
    }
}
*/
/*
RESULTADO
3 - Rick Sanchez - Earth (Replacement Dimension)
3 - Morty Smith - Earth (Replacement Dimension)
3 - Alexander - Anatomy Park
...
 */