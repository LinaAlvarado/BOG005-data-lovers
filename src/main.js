//import  from "./data.js";
import {
  filtrado,
  ordenar
} from "./data.js";
import olymGam from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

// Carga el dom
window.addEventListener("DOMContentLoaded", () => {
  // llamar la funcion de pintado con  todos los atletas
  // pintarAtletas(olymGam.athletes)
  visual(olymGam.athletes);
  const inputOrder = document.getElementById("ordenar");
  inputOrder.addEventListener("change",()=>{
  let dataActual=data.athletes;
  const inputValor= inputOrder.value;
  dataActual= ordenar(dataActual, inputValor);
  console.log(ordenar(dataActual, inputValor));
  console.log(inputValor);
  visual(dataActual);
});
  
  console.log("loaded");
});



const boton= document.getElementById("filtrarBoton");

boton.addEventListener("click",()=>{
const inputCountry = document.getElementById("country").value;
const inputSport = document.getElementById("sport").value;
const inputGender = document.getElementById("gender").value;
const inputMedal = document.getElementById("medal").value;
let dataActual=data.athletes;
console.log(dataActual)

if( inputCountry !== ""){
  dataActual=filtrado(dataActual, inputCountry, "team")
  console.log(dataActual)
}

if( inputSport !== ""){
  dataActual=filtrado(dataActual, inputSport, "sport")
  console.log(dataActual)
}
if( inputGender !== ""){
  dataActual=filtrado(dataActual, inputGender, "gender")
  console.log(dataActual)
}
if( inputMedal !== ""){
  dataActual=filtrado(dataActual, inputMedal, "medal")
  console.log(dataActual)
}


const inputOrder = document.getElementById("ordenar");
inputOrder.addEventListener("change",()=>{
  const inputValor= inputOrder.value;
  console.log(ordenar(dataActual, inputValor));
  dataActual=ordenar(dataActual, inputValor);

  
let contenedor=document.getElementById("atletas");
let datosFiltrados="";
for(let cont of dataActual){
  datosFiltrados += `<article id="contenido">
  <p>${cont.name}</p>
  <p>  ${cont.team}</p>
  <p>  ${cont.gender}</p>
  <p>  ${cont.sport}</p>
  <p>  ${cont.medal}</p>
  <hr id="linea">

</article>`;
contenedor.innerHTML= datosFiltrados;
}

});
let contenedor=document.getElementById("atletas");
let datosFiltrados="";
for(let cont of dataActual){
  datosFiltrados += `<article id="contenido">
  <p>${cont.name}</p>
 
  <p>  ${cont.team}</p>
 
  <p>  ${cont.gender}</p>
 
  <p>  ${cont.sport}</p>
 
  <p>  ${cont.medal}</p>
 <hr>

</article>`;
contenedor.innerHTML= datosFiltrados;
}

});

//FUNCION ORDENAR 

// const inputOrder = document.getElementById("ordenar");
// inputOrder.addEventListener("change",()=>{
//   let dataActual=data.athletes;
//   const inputValor= inputOrder.value;
//   dataActual= ordenar(dataActual, inputValor);
//   console.log(ordenar(dataActual, inputValor));
//   console.log(inputValor);
  
  // let contenedor=document.getElementById("atletas");
  // let datosFiltrados="";
  // for(let cont of dataActual){
  //   datosFiltrados += `<article id="contenido">
  //   <p>${cont.name}</p>
  //   <p>  ${cont.team}</p>
  //   <p>  ${cont.gender}</p>
  //   <p>  ${cont.sport}</p>
  //   <p>  ${cont.medal}</p>
  //   <hr id="linea">
  
  // </article>`;
  // contenedor.innerHTML= datosFiltrados;
  // }

//});
 

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

   
  }
  atletasContenedor.innerHTML = atletas;
}


console.log(
  filtrado,
  ordenar,
  data
);
// console.log(atleta);
    //   ************ MANIPULACION DINAMICA DEL DOM
    // const p = document.createElement("p");
    // const article = document.createElement("article");
    // p.innerText = atleta.name;
    // article.appendChild(p);
    // atletasContenedor.append(article);

    //   ************ template string && interpolacion de variables
