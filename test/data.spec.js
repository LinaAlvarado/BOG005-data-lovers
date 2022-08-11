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
