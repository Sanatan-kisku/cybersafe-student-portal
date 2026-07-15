const features = [

  "Cyber Safety Courses",

  "Password Security Checker",

  "Suspicious Link Checker",

  "Student Awareness Games"

];


export default function Features() {


  return (

    <section className="container py-10">


      <h2 className="text-3xl font-bold text-center">

        Features

      </h2>


      <div className="grid md:grid-cols-4 gap-5 mt-8">


        {
          features.map((item, index) => (

            <div
              key={index}
              className="bg-white p-5 shadow rounded"
            >

              {item}

            </div>

          ))
        }


      </div>


    </section>

  )

}