import { Link } from "react-router-dom";
import getContinueCourse
  from "../../utils/getContinueCourse";


export default function ContinueLearning() {


  const data =
    getContinueCourse();



  if (!data)
    return null;



  return (

    <div className="
bg-white
shadow-lg
rounded-xl
p-6
">


      <h2 className="text-2xl font-bold">

        ▶ Continue Learning

      </h2>


      <p className="mt-3">

        Course:
        {data.courseId}

      </p>



      <Link

        to={`/courses/${data.courseId}`}

        className="
inline-block
mt-5
bg-blue-600
text-white
px-5
py-3
rounded-lg
"

      >

        Continue

      </Link>


    </div>

  )


}