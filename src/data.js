// estas funciones son de ejemplo

export const filtradoEquipo = (todosAtletas, inputOne) => {
  let compare = todosAtletas.filter(
    (todosAtletas) => todosAtletas.team === inputOne
  );
  console.log(compare);
  return compare;
};

export const anotherExample = () => {
  return "OMG";
};
