const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const studentScores = scores.map((score, index) => ({
  student: `Student ${index + 1}`,
  score
}));
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
const passedStudents = scores.filter((score) => score >= 50).length;

console.table(studentScores);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedStudents} of ${scores.length}`);
