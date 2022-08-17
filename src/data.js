
export const filtrado = (data, input, categoria)=> {
  let compare = data.filter(
  (atleta) => atleta[categoria].toLowerCase() === input.toLowerCase() 
  );
  return compare;
}

export const ordenar = (data, inputOr) => {
  let listaOr="";
  if(inputOr === "menor"){
    listaOr = data.sort( (x, y)=>{ 
      if(x.name < y.name){ return -1;}
      if(x.name > y.name){ return 1;}
      return 0
    });
  } else{
    listaOr = data.sort( (x, y)=>{ 
      if(x.name < y.name){ return -1;}
      if(x.name > y.name){ return 1;}
      return 0
    });
    listaOr = data.reverse();
  }
  return (listaOr)
}

// export const calcular = (data, input, boton) => {
//   let calculoPais = filtrado(data, input, "team");
//   let cantidadPais = calculoPais.length;
//   if( boton == ""){
//     calculoPais = filtrado(data, boton)
//     let calculoGenero = calculoPais
//     // MEDALLA
//   }
// }

// filtrar pais
// saber cantidad de hombre y mujer
// sacar porcentaje

// ingresa usuario: pais y condición genero (hombre y mujer)
// salida: porcentaje de hombres y mujeres por pais 
//  o selecciona condición medalla (bronze, oro, plata)
// salida: porcentaje de atletas que ganaron bronze, plata y oro

export const calcularGender = (constCountry, varH, varM) => {
let porcentajeM = Math.round((varM/constCountry)*100);
let porcentajeH = Math.round((varH/constCountry)*100);
return  "Porcetaje de Mujeres es: "+ porcentajeM +"% porcentaje de Hombres es: " + porcentajeH +"%";

}

export const calcularMedal = (constCountry, varG, varS, varB) => {
  let porcentajeG = Math.round((varG/constCountry)*100);
  let porcentajeS = Math.round((varS/constCountry)*100);
  let porcentajeB = Math.round((varB/constCountry)*100);
  return "Porcetaje en oro es: "+ porcentajeG +"% porcentaje en plata es: " + porcentajeS + "% porcentaje en bronce es: " + porcentajeB+"%";
  
  }