function gradingStudents(grades) {
  const computeGrade = grade => {
      if (grade < 38) {
          return grade;
      }

      const nextMultipleOfFive = grade + (5 - (grade % 5 != 0 ? grade % 5 : 5))

      if (nextMultipleOfFive - grade < 3) {
          return nextMultipleOfFive;
      } else {
          return grade;
      }        
  };

  const roundedGrades = grades.map(cur => computeGrade(cur));
  
  return roundedGrades; 
}