// author: chatgpt
import { squareRoot } from './mathUtils.js';

test('calculates the square root of 4 to be 2', () => {
    expect(squareRoot(4)).toBe(2);
});

test('calculates the square root of 9 to be 3', () => {
    expect(squareRoot(9)).toBe(3);
});

test('calculates the square root of 0 to be 0', () => {
    expect(squareRoot(0)).toBe(0);
});

test('calculates the square root of 1 to be 1', () => {
    expect(squareRoot(1)).toBe(1);
});

test('calculates the square root of a negative number to be NaN', () => {
    expect(squareRoot(-1)).toBeNaN();
});

