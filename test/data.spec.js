import { calcularPorcentaje, filtrado, ordenar } from "../src/data.js";
import dataMock from "./datamock.js";

const data = [
  {
    name: "Luc Abalo",
    team: "France",
    sport: "Handball",
    gender: "M",
    medal: "Silver",
  },

  {
    name: "Patimat Abakarova",
    team: "Azerbaijan",
    sport: "Taekwondo",
    gender: "F",
    medal: "Bronze",
  },

  {
    name: "Giovanni Abagnale",
    team: "Italy",
    sport: "Rowing",
    gender: "M",
    medal: "Bronze",
  },
];

describe("Test funcion filtrar", () => {
  // FN FILTRADO
  it("filtrado es una funcion", () => {
    expect(typeof filtrado).toBe("function");
  });

  it("return de filtrado", () => {
    expect(
      filtrado(dataMock.array, dataMock.input, dataMock.categoria)
    ).toStrictEqual(dataMock.returnFiltrado);
  });

  it("filtra el array segun el pais indicado", () => {
    expect(filtrado(data, "Italy", "team")).toStrictEqual([
      {
        name: "Giovanni Abagnale",
        team: "Italy",
        sport: "Rowing",
        gender: "M",
        medal: "Bronze",
      },
    ]);
  });

  it("Si no existe atleta del pais indicado, retorna un arreglo vacio", () => {
    expect(filtrado(data, "Colombia", "team")).toStrictEqual([]);
  });

  it("filtra el array segun el deporte indicado", () => {
    expect(filtrado(data, "Handball", "sport")).toStrictEqual([
      {
        name: "Luc Abalo",
        team: "France",
        sport: "Handball",
        gender: "M",
        medal: "Silver",
      },
    ]);
  });

  it("filtra el array segun el genero", () => {
    expect(filtrado(data, "F", "gender")).toStrictEqual([
      {
        name: "Patimat Abakarova",
        team: "Azerbaijan",
        sport: "Taekwondo",
        gender: "F",
        medal: "Bronze",
      },
    ]);
  });

  it("filtra el array segun el medallero", () => {
    expect(filtrado(data, "Bronze", "medal")).toStrictEqual([
      {
        name: "Patimat Abakarova",
        team: "Azerbaijan",
        sport: "Taekwondo",
        gender: "F",
        medal: "Bronze",
      },

      {
        name: "Giovanni Abagnale",
        team: "Italy",
        sport: "Rowing",
        gender: "M",
        medal: "Bronze",
      },
    ]);
  });
});

describe("Test funcion ordenar", () => {
  it("ordenar es una funcion", () => {
    expect(typeof ordenar).toBe("function");
  });

  it("ordena de la A a Z", () => {
    expect(ordenar(data, "menor")).toStrictEqual([
      {
        name: "Giovanni Abagnale",
        team: "Italy",
        sport: "Rowing",
        gender: "M",
        medal: "Bronze",
      },
      {
        name: "Luc Abalo",
        team: "France",
        sport: "Handball",
        gender: "M",
        medal: "Silver",
      },
      {
        name: "Patimat Abakarova",
        team: "Azerbaijan",
        sport: "Taekwondo",
        gender: "F",
        medal: "Bronze",
      },
    ]);
  });
  it("ordena de la Z a A", () => {
    expect(ordenar(data, "mayor")).toStrictEqual([
      {
        name: "Patimat Abakarova",
        team: "Azerbaijan",
        sport: "Taekwondo",
        gender: "F",
        medal: "Bronze",
      },
      {
        name: "Luc Abalo",
        team: "France",
        sport: "Handball",
        gender: "M",
        medal: "Silver",
      },
      {
        name: "Giovanni Abagnale",
        team: "Italy",
        sport: "Rowing",
        gender: "M",
        medal: "Bronze",
      },
    ]);
  });
});

let mujer = 1;
// let hombre = 2;
let oro = 0;
// let plata = 1;
// let bronce = 2;
let totalDatos = 3;
describe("Test de la funcion calcular porcentajes ", () => {
  it("ver si es una función", () => {
    expect(typeof calcularPorcentaje).toBe("function");
  });

  it("calcula los porcentajes del genero femenino", () => {
    expect(calcularPorcentaje(totalDatos, mujer)).toStrictEqual(33);
  });
  it("calcula los porcentaje de medallas de oro", () => {
    expect(calcularPorcentaje(totalDatos, oro)).toStrictEqual(0);
  });
});

it("calcula los porcentajes del genero femenino", () => {
  expect(calcularPorcentaje(totalDatos, mujer)).toStrictEqual(33);
});
