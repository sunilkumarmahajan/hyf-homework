const class07Students = [];
function addStudentToClass(studentName)
{
  if (studentName.trim() === " ")
  {
    console.log("name should not be empty");
  }
  else if(class07Students.includes(studentName))
  {
    console.log("student must not be same");
  }
  else if (class07Students.length<=5)
  {
    class07Students.push(studentName);
  }
  else if(studentName==="Queen") 
  {
    class07Students.push(studentName);
  }
  else
  {
    console.log("class is full")
  }
}
function getNumberOfStudents()
{
  return class07Students.length;
}
addStudentToClass("Kalvin");
addStudentToClass("Mason");
addStudentToClass("Jannik");
addStudentToClass("Kalvin");// duplicate name 
addStudentToClass("Joachim");
addStudentToClass(""); // empty string
addStudentToClass("Luke5");
addStudentToClass("Simon");
addStudentToClass("Mathias"); //tryring to add more students to clss
addStudentToClass("Queen"); // adding Queen
console.log(`Total no of Students in class 07 is ${getNumberOfStudents()}`);
