const subjectMarks = [86, 79, 92, 74, 81];
const totalMarks = subjectMarks.reduce((total, mark) => total + mark, 0);
const maximumMarks = subjectMarks.length * 100;
const averageMarks = totalMarks / subjectMarks.length;
const overallPercentage = (totalMarks / maximumMarks) * 100;
const hasFailedSubject = subjectMarks.some((mark) => mark < 35);
let result;

if (hasFailedSubject || overallPercentage < 50) {
  result = "Detained";
} else if (overallPercentage >= 85) {
  result = "Promoted with Distinction";
} else {
  result = "Promoted";
}

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);
console.log(result);
