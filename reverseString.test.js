import { reverseString } from "./reverseString.js";

test("reverses string", () => {
    expect(capitalize("hello")).toBe("olleh");
});

test("preserves case", () => {
    expect(capitalize("Hello")).toBe("olleH");
});

test("works with empty string", () => {
    expect(capitalize("")).toBe("");
});

test("works with unitary string", () => {
    expect(capitalize("a")).toBe("a");
});