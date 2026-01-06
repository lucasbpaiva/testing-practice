import { capitalize } from "./capitalize.js";

test("capitalize first letter", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test("works with first letter capitalized", () => {
    expect(capitalize("Hello world")).toBe("Hello world");
});

test("works with empty string", () => {
    expect(capitalize("")).toBe("");
});

test("works with unitary string", () => {
    expect(capitalize("a")).toBe("A");
});