import { TestResult } from "@jest/types";
import * as operations from "./operations";


describe('text test', () => {

  test('text field', () => {
  expect(operations.texto('hellow world')).not.toBeNull();
  });

});



describe('function add positive numbers', () => {

  test('sum 5 + 4 is equal to 9', () => {
  expect(operations.suma(5, 4)).toBe(9);
  });

});


describe('function that subtracts positive numbers', () => {

  test('subtrac 10 - 6 is equal to 4', () => {
  expect(operations.resta(10, 6)).toBe(4);
  });

});


describe('function that multiplies positive values', () => {

  test('multiplying 5 * 6 equals 30', () => {
  expect(operations.multiplicacion(5, 6)).toBe(30);
  });

});


describe('function of dividing different numbers', () => {

  test('dividing 50/0 equals 0', () => {
  expect(operations.division(50, 0)).toBe('No se puede dividir por 0');
  });
  test('dividing 50/5 equals 10', () => {
  expect(operations.division(50, 5)).toBe(10);
  });

});


describe('multiplication function', () => {

  test('tablaMultiplicar undefined', () => {
  expect(operations.tablaMultiplicar(2, undefined)).toStrictEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test('multiplying 2 for 5', () => {
  expect(operations.tablaMultiplicar(2, 4)).toEqual([0, 2, 4, 6, 8]);
  });
});


describe('power function with positive values', () => {

  test('positive exponents', () => {
  expect(operations.potencia(5, 7)).toBe(78125);
  });

});


describe('positive squared numbers functions', () => {

  test('multiply by x', () => {
  expect(operations.anidada(4, 5)).toBe(41);
  });

});


describe('', () => {

test('adding two left ceros to the left', () => {
  expect(operations.cerosIzq(15, 4)).toBe("0015");
  });

});