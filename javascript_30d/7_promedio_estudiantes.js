students = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];

function getStudentAverage(students){
  let output = {};
  let gradesArray = [];
  let studentsArray = [];
  let dictArray = [];
  
  for(const student of students){
    let gradesSum = student["grades"].reduce((adder,grade) => {
      return adder + grade;
    }, 0);
    gradesArray.push(gradesSum/student["grades"].length);
    studentsArray.push(student["name"]);
  }

  let globalAverage = gradesArray.reduce((adder,grade) => {
    return (adder + grade)
  }, 0);
  globalAverage /= gradesArray.length;
  globalAverage = Number(globalAverage.toFixed(2));

  for(let i=0; i<students.length; i++){
    let dict = {};
    dict.name = studentsArray[i];
    dict.average = Number(gradesArray[i].toFixed(2));
    dictArray.push(dict);
  }
  
  output["classAverage"] = globalAverage;
  output["students"] = dictArray;
  return output;
}

console.log(getStudentAverage(students));

/*
Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
*/