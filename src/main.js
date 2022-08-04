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

// console.log(olymGam.athletes);

console.log(filtrado, data);
