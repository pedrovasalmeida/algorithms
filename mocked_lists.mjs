const ARRAY_LENGTH = 500000;

const random = Array.from({ length: ARRAY_LENGTH }, () => Math.floor(Math.random() * ARRAY_LENGTH))
const sorted = [1, 2, 3, 4, 5, 6, 9, 20, 22, 23, 28,
  32, 34, 39, 40, 42, 76, 87, 99, 112]
const inversed = [117, 90, 88, 83, 81, 77, 74, 69, 64, 63, 51,
  50, 49, 42, 41, 34, 32, 29, 28, 22, 16, 8, 6, 5, 3, 1]
const repeated = [7, 7, 7, 7, 7, 1, 1, 9, 9, 0, 4, 4, 4, 5, 4, 5, 7, 1, 1]

export { random, inversed, sorted, repeated, ARRAY_LENGTH };