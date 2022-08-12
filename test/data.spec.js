import { filtrado, ordenar } from "../src/data.js";
import dataMock from "./datamock.js";

describe("Test funcion filtrar", () => {
  // FN FILTRADO
  it("filtrado es una funcion", () => {
    expect(typeof filtrado).toBe("function");
  });

  it("return de filtrado o yo que se", () => {
    expect(
      filtrado(dataMock.array, dataMock.input, dataMock.categoria)
    ).toStrictEqual(dataMock.returnFiltrado);
  });

  it("filtra el array segun el pais indicado", () => {
    const data = [
      {
        name: "Luc Abalo",
        team: "France",
      },
      {
        name: "Patimat Abakarova",
        team: "Azerbaijan",
      },
      {
        name: "Giovanni Abagnale",
        team: "Italy",
      },
    ];
    expect(filtrado(data, "Italy", "team")).toStrictEqual([
      {
        name: "Giovanni Abagnale",
        team: "Italy",
      },
    ]);
  });

  it("Si no existe atleta del pais indicado, retorna un arreglo vacio", () => {
    const data = [
      {
        name: "Luc Abalo",
        team: "France",
      },
      {
        name: "Patimat Abakarova",
        team: "Azerbaijan",
      },
      {
        name: "Giovanni Abagnale",
        team: "Italy",
      },
    ];
    expect(filtrado(data, "Colombia", "team")).toStrictEqual([]);
  });

  it("filtra el array segun el deporte indicado", () => {
    const data = [
      {
        name: "Luc Abalo",
        sport: "Handball",
      },
      {
        name: "Patimat Abakarova",
        sport: "Taekwondo",
      },
      {
        name: "Giovanni Abagnale",
        sport: "Rowing",
      },
    ];
    expect(filtrado(data, "Handball", "sport")).toStrictEqual([
      {
        name: "Luc Abalo",
        sport: "Handball",
      },
    ]);
  });

  it("filtra el array segun el genero", () => {
    const data = [
      {
        name: "Luc Abalo",
        gender: "M",
      },
      {
        name: "Patimat Abakarova",
        gender: "F",
      },
      {
        name: "Giovanni Abagnale",
        gender: "M",
      },
    ];
    expect(filtrado(data, "F", "gender")).toStrictEqual([
      {
        name: "Patimat Abakarova",
        gender: "F",
      },
    ]);
  });

  it("filtra el array segun el medallero", () => {
    const data = [
      {
        name: "Luc Abalo",
        medal: "Silver",
      },
      {
        name: "Patimat Abakarova",
        medal: "Bronze",
      },
      {
        name: "Giovanni Abagnale",
        medal: "Bronze",
      },
    ];
    expect(filtrado(data, "Bronze", "medal")).toStrictEqual([
      { name: "Patimat Abakarova", medal: "Bronze" },
      {
        name: "Giovanni Abagnale",
        medal: "Bronze",
      },
    ]);
  });
});

// it.skip("returns `example`", () => {
//   expect(filtrado()).toBe("example");
// });

describe("Test funcion ordenar", () => {
  it("ordenar es una funcion", () => {
    expect(typeof ordenar).toBe("function");
  });

  it("ordena de la A a Z", () => {
    const data = [
      {
        name: "Luc Abalo",
      },
      {
        name: "Patimat Abakarova",
      },
      {
        name: "Giovanni Abagnale",
      },
    ];
    expect(ordenar(data, "menor")).toStrictEqual([
      {
        name: "Giovanni Abagnale",
      },
      {
        name: "Luc Abalo",
      },
      {
        name: "Patimat Abakarova",
      },
    ]);
  });
  it("ordena de la Z a A", () => {
    const data = [
      {
        name: "Luc Abalo",
      },
      {
        name: "Patimat Abakarova",
      },
      {
        name: "Giovanni Abagnale",
      },
    ];
    expect(ordenar(data, "mayor")).toStrictEqual([
      {
        name: "Patimat Abakarova",
      },
      {
        name: "Luc Abalo",
      },
      {
        name: "Giovanni Abagnale",
      },
    ]);
  });
});
