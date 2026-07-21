import courses from "../../data/courseData";


export default function CourseProgressCard() {


  const completed =
    courses.filter(
      course => course.progress === 100
    ).length;


  const percentage =
    Math.round(
      (completed / courses.length) * 100
    );


  return (

    <div className="
bg-white
rounded-xl
shadow
p-6
">


      <h2 className="text-2xl font-bold">
        📊 Course Progress
      </h2>


      <p className="text-4xl font-bold mt-4">
        {percentage}%
      </p>


      <div className="
bg-gray-200
rounded-full
h-4
mt-4
">


        <div
          className="
bg-blue-600
h-4
rounded-full
"
          style={{
            width: `${percentage}%`
          }}
        />


      </div>


    </div>

  );

}