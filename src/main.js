//import  from "./data.js";
import { filtradoEquipo } from "./data.js";
import olymGam from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";


const inputCountry = document.getElementById("country");
const inputSport = document.getElementById("sport");
const inputGender = document.getElementById("gender");
const inputMedal = document.getElementById("medal");

// Carga el dom
window.addEventListener("DOMContentLoaded", () => {
  // llamar la funcion de pintado con  todos los atletas
  // pintarAtletas(olymGam.athletes)
  visual(olymGam.athletes);
  console.log("loaded");
});
// evento: capturar lo que el usuario escribe
inputCountry.addEventListener("keyup", () => {
  // llamar la funcion filtrar
  // llamar la funcion de pintado con el resultado anterior
  // pintarAtletas(filtrados)

  console.log(inputCountry.value);
  console.log(filtradoEquipo(olymGam.athletes, inputCountry.value));
});
inputSport.addEventListener("keyup", () => {
  // llamar la funcion filtrar
  // llamar la funcion de pintado con el resultado anterior
  // pintarAtletas(filtrados)

  console.log(inputSport.value);
});
inputGender.addEventListener("change", () => {
  //revisar el evento
  // llamar la funcion filtrar
  // llamar la funcion de pintado con el resultado anterior
  // pintarAtletas(filtrados)

  console.log(inputGender.value);
});

inputMedal.addEventListener("change", () => {
  //revisar el evento
  // llamar la funcion filtrar
  // llamar la funcion de pintado con el resultado anterior
  // pintarAtletas(filtrados)

  console.log(inputMedal.value);
});

function visual() {
  let atletasContenedor = document.getElementById("atletas");
  // const todosAtletas = olymGam.athletes;
  const todosAtletas = olymGam.athletes;
  let atletas = "";
  for (let atleta of todosAtletas) {
    // console.log(atleta);
    //   ************ MANIPULACION DINAMICA DEL DOM
    // const p = document.createElement("p");
    // const article = document.createElement("article");
    // p.innerText = atleta.name;
    // article.appendChild(p);
    // atletasContenedor.append(article);

    //   ************ template string && interpolacion de variables
    atletas += `<article id="contenido">
        <p>${atleta.name}</p>
        <p>  ${atleta.team}</p>
        <p>  ${atleta.gender}</p>
        <p>  ${atleta.sport}</p>
        <p>  ${atleta.medal}</p>
        <hr id="linea">
        <img src="" alt="" srcset="">
      </article>`;
    // atletasContenedor.innerHTML += atleta.name;

    //  = Object.values(
    //   olymGam.athletes[prop]
    // );
  }
  atletasContenedor.innerHTML = atletas;
}

=======
// import data from './data/athetes/athetes.js';
/*let olympic = [];
for (let i = 0; i < 2023; i++) {
  olympic = Object.values(olymGam.athletes[i]);
  document.getElementById("atletas").innerHTML = olympic[0];

}*/

let eleccion= document.getElementById("team")
let atletasContenedor = document.getElementById("atletas");
let todosAtletas = olymGam.athletes.slice(0, 10);

let filtrado= todosAtletas.filter( todosAtletas => todosAtletas.team === "Russia")
console.log(filtrado);
// const todosAtletas = olymGam.athletes;


// for (let atleta of todosAtletas) {
//   console.log(atleta);
  //   ************ MANIPULACION DINAMICA DEL DOM
  //   const p = document.createElement("p");
  //   const article = document.createElement("article");
  //   p.innerText = atleta.name;
  //   article.appendChild(p);
  //   atletasContenedor.append(article);

  //   ************ template string && interpolacion de variables
    // atletasContenedor.innerHTML += `<article>
    //     <h3>${atleta.name}</h3>
    //     <p></p>
    //     <img src="" alt="" srcset="">
    //   </article>`;
  // atletasContenedor.innerHTML += atleta.name;
  // atletasContenedor.innerHTML += `<h3>${atleta.name}-- ${atleta.team}</h3>`;
  

  //    = Object.values(
  //     olymGam.athletes[prop]
  //   );
// }

