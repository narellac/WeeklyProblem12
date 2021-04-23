import { TestResult } from "@jest/types";
import * as operations from "./operations";

//1
describe('text test', () => {

  test('text field', () => {
  expect(operations.texto()).not.toBeNull();
  });

});


//2
describe('function add positive numbers', () => {

  test('sum 5 + 4 is equal to 9', () => {
  expect(operations.suma(5, 4)).toBe(9);
  });

});

//3
describe('function that subtracts positive numbers', () => {

  test('subtrac 10 - 6 is equal to 4', () => {
  expect(operations.resta(10, 6)).toBe(4);
  });

});

//4
describe('function that multiplies positive values', () => {

  test('multiplying 5 * 6 equals 30', () => {
  expect(operations.multiplicacion(5, 6)).toBe(30);
  });

});

//5
describe('function of dividing positive numbers', () => {

  test('dividing 50/5 equals 10', () => {
  expect(operations.division(50, 5)).toBe(10);
  });

});

//6 REVEER
describe('multiplication function', () => {

  test('multiply by i', () => {
  expect(operations.tablaMultiplicar(50)).toBe();
  });

});

//7
describe('power function with positive values', () => {

  test('positive exponents', () => {
  expect(operations.potencia(5, 7)).toBe(78125);
  });

});

//8
describe('positive squared numbers functions', () => {

  test('multiply by x', () => {
  expect(operations.anidada(4, 5)).toBe(41);
  });

});

//9 REVEER
describe('', () => {

  test('', () => {
  expect(operations.tablaMultiplicar(50)).toBe();
  });

});