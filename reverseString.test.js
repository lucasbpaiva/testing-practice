import { reverseString } from "./reverseString.js";

test("reverses string", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("preserves case", () => {
    expect(reverseString("HelLo")).toBe("oLleH");
});

test("works with empty string", () => {
    expect(reverseString("")).toBe("");
});

test("works with unitary string", () => {
    expect(reverseString("a")).toBe("a");
});