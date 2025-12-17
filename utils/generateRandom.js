export function generateRandom(quizArray) {
  return quizArray[Math.floor(Math.random() * quizArray.length)];
}
