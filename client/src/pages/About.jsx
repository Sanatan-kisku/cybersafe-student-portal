import { motion } from "framer-motion";
import {
  ShieldCheck,
  BookOpen,
  Gamepad2,
  Award,
  Users,
  LockKeyhole,
  Target,
  Lightbulb,
  GraduationCap
} from "lucide-react";


export default function About() {


  const features = [

    {
      icon: <BookOpen size={35} />,
      title: "Interactive Learning",
      description:
        "Learn cyber safety concepts through structured courses, lessons and real-world examples."
    },


    {
      icon: <Gamepad2 size={35} />,
      title: "Cyber Safety Games",
      description:
        "Practice your knowledge through fun challenges like password checking and suspicious link detection."
    },


    {
      icon: <Award size={35} />,
      title: "Certificates & Badges",
      description:
        "Complete courses, earn XP, unlock badges and receive certificates for your achievements."
    },


    {
      icon: <LockKeyhole size={35} />,
      title: "Safe Digital Habits",
      description:
        "Develop responsible online behavior and protect yourself from cyber threats."
    }

  ];





  const stats = [

    {
      number: "100%",
      title: "Student Focused"
    },


    {
      number: "24/7",
      title: "Learning Access"
    },


    {
      number: "10+",
      title: "Cyber Topics"
    },


    {
      number: "Interactive",
      title: "Learning Style"
    }

  ];







  return (


    <div className="bg-gray-50">


      {/* HERO SECTION */}


      <section className="
      container mx-auto
      px-5
      py-16
      text-center
      ">


        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

        >


          <div className="
          flex
          justify-center
          mb-6
          ">

            <div className="
            bg-blue-100
            text-blue-700
            p-5
            rounded-full
            ">

              <ShieldCheck size={55} />

            </div>


          </div>





          <h1 className="
          text-5xl
          font-bold
          text-gray-800
          ">


            About
            <span className="text-blue-600">
              {" "}CyberSafe
            </span>


          </h1>





          <p className="
          max-w-3xl
          mx-auto
          mt-6
          text-lg
          text-gray-600
          leading-8
          ">


            CyberSafe Student Portal is a digital learning
            platform designed to help students understand
            cyber security, online privacy and safe internet
            practices through engaging courses, interactive
            activities and practical challenges.


          </p>



        </motion.div>



      </section>









      {/* MISSION VISION */}



      <section className="
      container
      mx-auto
      px-5
      grid
      md:grid-cols-2
      gap-8
      pb-16
      ">



        <motion.div

          whileHover={{
            scale: 1.03
          }}

          className="
        bg-white
        rounded-2xl
        shadow
        p-8
        "

        >


          <div className="
          bg-orange-100
          text-orange-600
          w-fit
          p-3
          rounded-xl
          ">

            <Target />

          </div>



          <h2 className="
          text-2xl
          font-bold
          mt-5
          ">

            Our Mission

          </h2>



          <p className="
          mt-4
          text-gray-600
          leading-7
          ">


            Our mission is to empower students with
            essential cyber awareness skills so they can
            confidently navigate the digital world and
            become responsible technology users.


          </p>


        </motion.div>









        <motion.div

          whileHover={{
            scale: 1.03
          }}

          className="
        bg-white
        rounded-2xl
        shadow
        p-8
        "

        >


          <div className="
          bg-yellow-100
          text-yellow-600
          w-fit
          p-3
          rounded-xl
          ">


            <Lightbulb />


          </div>




          <h2 className="
          text-2xl
          font-bold
          mt-5
          ">

            Our Vision

          </h2>




          <p className="
          mt-4
          text-gray-600
          leading-7
          ">


            To create a generation of digitally aware
            students who understand online risks and
            follow secure digital practices.


          </p>



        </motion.div>



      </section>









      {/* STATS */}



      <section className="
      bg-blue-600
      py-14
      ">



        <div className="
        container
        mx-auto
        px-5
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        ">



          {
            stats.map((item, index) => (


              <motion.div

                key={index}

                whileHover={{
                  y: -8
                }}

                className="
            text-center
            text-white
            "

              >


                <h3 className="
              text-3xl
              font-bold
              ">

                  {item.number}

                </h3>



                <p className="
              mt-2
              text-blue-100
              ">

                  {item.title}

                </p>



              </motion.div>


            ))
          }



        </div>



      </section>









      {/* FEATURES */}



      <section className="
      container
      mx-auto
      px-5
      py-16
      ">



        <h2 className="
        text-4xl
        font-bold
        text-center
        ">

          What CyberSafe Provides

        </h2>



        <p className="
        text-center
        text-gray-600
        mt-4
        ">

          Everything students need to build strong cyber awareness.

        </p>





        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-10
        ">




          {
            features.map((item, index) => (


              <motion.div

                key={index}

                whileHover={{
                  scale: 1.05
                }}

                className="
            bg-white
            rounded-xl
            shadow
            p-6
            "

              >



                <div className="
              text-blue-600
              mb-4
              ">

                  {item.icon}

                </div>



                <h3 className="
              text-xl
              font-bold
              ">

                  {item.title}

                </h3>




                <p className="
              text-gray-600
              mt-3
              leading-6
              ">

                  {item.description}

                </p>



              </motion.div>


            ))
          }




        </div>



      </section>









      {/* CREATOR SECTION */}



      <section className="
      bg-gradient-to-r
      from-blue-600
      to-orange-500
      text-white
      py-16
      ">


        <div className="
        container
        mx-auto
        px-5
        text-center
        ">


          <GraduationCap
            className="mx-auto"
            size={50}
          />



          <h2 className="
          text-4xl
          font-bold
          mt-5
          ">


            Building Safer Digital Citizens


          </h2>



          <p className="
          max-w-3xl
          mx-auto
          mt-5
          text-lg
          ">


            CyberSafe combines education, technology and
            interactive learning to make cyber security
            simple, practical and accessible for students.


          </p>



        </div>


      </section>





    </div>


  );

}