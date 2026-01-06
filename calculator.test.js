import { calculator } from "./calculator.js";

test("add works", () => {
    expect(calculator.add(2, 3)).toBe(5);
});
test("subtract works", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
});
test("multiply works", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});
test("divide works", () => {
    expect(calculator.divide(2, 3)).toBe(0.6666666666666666);
});
test("divide works", () => {
    expect(calculator.divide(3, 2)).toBe(1.5);
});
test("divide works", () => {
    expect(calculator.divide(2, 0)).toBe(Infinity);
});