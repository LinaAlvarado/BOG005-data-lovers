// estas funciones son de ejemplo

export const filtradoEquipo = (todosAtletas, inputOne) => {
  let compare = todosAtletas.filter(
    (todosAtletas) => todosAtletas.team === inputOne
  );
  console.log(compare);
  return compare;
};
export const filtradoDeporte = (todosAtletas, inputOne) => {
  let compare = todosAtletas.filter(
    (todosAtletas) => todosAtletas.sport === inputOne
  );
  console.log(compare);
  return compare;
};
export const filtradoGenero = (todosAtletas, inputOne) => {
  let compare = todosAtletas.filter(
    (todosAtletas) => todosAtletas.gender === inputOne
  );
  console.log(compare);
  return compare;
};
export const filtradoMedalleria = (todosAtletas, inputOne) => {
  let compare = todosAtletas.filter(
    (todosAtletas) => todosAtletas.medal === inputOne
  );
  console.log(compare);
  return compare;
};

export const anotherExample = () => {
  return "OMG";
};
