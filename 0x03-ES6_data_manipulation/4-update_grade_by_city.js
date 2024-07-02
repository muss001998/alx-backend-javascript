export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  const gradeStudents = filterStudents.map(
    (student) => {
      for (const gradeInfo of newGrades) {
        if (student.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade; // this eslint-disable-line no-param-reassign
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // this  eslint-disable-line no-param-reassign
      }
      return student;
    },
  );

  return gradeStudents;
}
