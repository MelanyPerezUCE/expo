import { sumar, multiplicar } from '../math.js';

describe('Tests matemáticos', () => {

  test('la suma NO debe ser mayor a 5', () => {
    expect(sumar(3, 1)).toBeLessThanOrEqual(5);
  });

  test('la multiplicación debe ser mayor o igual a 10', () => {
    expect(multiplicar(5, 2)).toBeGreaterThanOrEqual(10);
  });

});