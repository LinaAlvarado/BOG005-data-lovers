
export const filtrado = (data, input, categoria)=> {
  let compare = data.filter(
  (atleta) => atleta[categoria] === input
  );
  return compare;
}



