const grades = [10, 30, 50, 70, 20, 75, 80, 90, 100, 60, 65, 95, 68, 98, 72]
const passGrades = grades.filter(grade => grade >= 70)
const passAverage = passGrades.reduce((acc, grade) => acc + grade, 0) / passGrades.length
console.log(passAverage)