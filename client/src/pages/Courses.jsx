const courses = [

  "Internet Safety Basics",

  "Password Protection",

  "Phishing Awareness",

  "Social Media Safety"

];


export default function Courses() {

  return (

    <div className="container py-10">


      <h1 className="text-3xl font-bold">
        Cyber Safety Courses
      </h1>


      <div className="grid md:grid-cols-2 gap-5 mt-5">

        {
          courses.map(course => (

            <div
              className="bg-white shadow p-5 rounded"
            >

              {course}

            </div>

          ))
        }

      </div>


    </div>

  )

}