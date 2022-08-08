
export const filtrado = (data, input, categoria)=> {
  let compare = data.filter(
  (atleta) => atleta[categoria] === input
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


