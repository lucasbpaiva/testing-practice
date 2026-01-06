import { caesarCipher } from "./caesarCipher.js";

test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("works with empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
});
test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("ignores punctuation", () => {
    expect(caesarCipher("even you, brutus?!", 3)).toBe("hyhq brx, euxwxv?!");
});