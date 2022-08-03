import { filtrerOne } from "./data.js";
import olymGam from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

const input = document.getElementById("country");

// Carga el dom
window.addEventListener("DOMContentLoaded", () => {
  // llamar la funcion de pintado con  todos los atletas
  // pintarAtletas(olymGam.athletes)
  visual(olymGam.athletes);
  console.log("loaded");
});
// evento: capturar lo que el usuario escribe
input.addEventListener("keyup", (e) => {
  // llamar la funcion filtrar
  // llamar la funcion de pintado con el resultado anterior
  // pintarAtletas(filtrados)
  filtrerOne(todosAtletas, input);
  visual(compere);
  console.log(input.value);
});

/*let olympic = [];
for (let i = 0; i < 2023; i++) {
  olympic = Object.values(olymGam.athletes[i]);
  document.getElementById("atletas").innerHTML = olympic[0];

}*/

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
    atletas += `<article>
        <h3>${atleta.name}</h3>
        <p> country: ${atleta.team}</p>
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

console.log(filtrerOne, data);
