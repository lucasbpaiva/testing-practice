export function analyzeArray(array) {
    const length = array.length;
    const average = array.reduce((sum, current) => sum + current, 0) / length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    return { average, min, max, length };
}