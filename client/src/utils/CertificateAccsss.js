import {
  getCourseProgress
}
  from "./lmsProgress";


export default function canGetCertificate() {


  const progress =
    getCourseProgress();



  const courses =
    Object.values(progress);



  if (
    courses.length < 4
  )
    return false;



  const completed =
    courses.every(
      course =>
        course.percentage === 100
    );



  const quiz =
    JSON.parse(
      localStorage.getItem("quizResult")
      || "{}"
    );



  return (
    completed &&
    quiz.passed === true
  );


}