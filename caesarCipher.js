export function caesarCipher(string, shift) {
    const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encrypted = "";
    for (const char of string) {
        if (isLetter(char)) {
            if (char === char.toUpperCase()) {
                const index = alphabetUpper.indexOf(char);
                encrypted += alphabetUpper.at((index + shift) % 26);
            } else {
                const index = alphabetLower.indexOf(char);
                encrypted += alphabetLower.at((index + shift) % 26);
            }
        } else {
            encrypted += char;
        }
    }
    return encrypted;
}

function isLetter(char) {
  if (typeof char !== 'string' || char.length !== 1) {
    return false;
  }
  // If the uppercase version is different from the lowercase version, it's a letter
  return char.toLowerCase() !== char.toUpperCase();
}