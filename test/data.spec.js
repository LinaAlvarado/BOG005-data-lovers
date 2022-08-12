import { filtrado } from "../src/data.js";
import dataMock from "./datamock.js";

describe("example", () => {
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

  it.only("Si no existe atleta del pais indicado, retorna un arreglo vacio", () => {
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

  it.skip("returns `example`", () => {
    expect(filtrado()).toBe("example");
  });
});

// describe("anotherExample", () => {
//   it("is a function", () => {
//     expect(typeof anotherExample).toBe("function");
//   });

//   it("returns `anotherExample`", () => {
//     expect(anotherExample()).toBe("OMG");
//   });
// });
