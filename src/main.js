import { example } from "./data.js";
import olymGam from "./data/athletes/athletes.js";
// import data from './data/lol/lol.js';
import data from "./data/athletes/athletes.js";
// import data from './data/athetes/athetes.js';
/*let olympic = [];
for (let i = 0; i < 2023; i++) {
  olympic = Object.values(olymGam.athletes[i]);
  document.getElementById("atletas").innerHTML = olympic[0];

}*/
let atletasContenedor = document.getElementById("atletas");
// const todosAtletas = olymGam.athletes;
const todosAtletas = olymGam.athletes.slice(0, 10);
for (let atleta of todosAtletas) {
  console.log(atleta);
  //   ************ MANIPULACION DINAMICA DEL DOM
  //   const p = document.createElement("p");
  //   const article = document.createElement("article");
  //   p.innerText = atleta.name;
  //   article.appendChild(p);
  //   atletasContenedor.append(article);

  //   ************ template string && interpolacion de variables
  //   atletasContenedor.innerHTML += `<article>
  //       <h3>${atleta.name}</h3>
  //       <p></p>
  //       <img src="" alt="" srcset="">
  //     </article>`;
  // atletasContenedor.innerHTML += atleta.name;

  //    = Object.values(
  //     olymGam.athletes[prop]
  //   );
}
// console.log(olymGam.athletes);

// console.log(example, data);
