import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import courses from "../data/courseData";
import lessonContent from "../data/lessonContent";

import {
  updateCourseProgress,
  getCourseProgress
} from "../utils/lmsProgress";

import {
  addXP,
  unlockBadge
} from "../utils/achievement";


export default function CoursePlayer() {

  const { id } = useParams();
  const navigate = useNavigate();


  const course = courses.find(
    (item) => item.id === Number(id)
  );


  if (!course) {

    return (
      <div className="text-center mt-20">

        <h1 className="text-3xl font-bold">
          Course Not Found
        </h1>

      </div>
    );

  }



  const lessons = lessonContent[course.id] || [];



  const saved =
    getCourseProgress()[course.id] ||
    {
      currentLesson: 0,
      completedLessons: []
    };



  const [currentLesson, setCurrentLesson] =
    useState(saved.currentLesson);



  const [completedLessons, setCompletedLessons] =
    useState(saved.completedLessons);



  const storageKey =
    `course_${course.id}_progress`;



  const progress =
    Math.round(
      (
        completedLessons.length /
        lessons.length
      )
      *
      100
    );



  const currentContent =
    lessons[currentLesson];




  useEffect(() => {


    localStorage.setItem(
      storageKey,
      JSON.stringify({

        currentLesson,

        completedLessons

      })
    );


  }, [
    currentLesson,
    completedLessons,
    storageKey
  ]);







  // ===============================
  // COMPLETE LESSON
  // ===============================


  const completeLesson = () => {


    if (
      !completedLessons.includes(currentLesson)
    ) {


      const updated = [
        ...completedLessons,
        currentLesson
      ];



      setCompletedLessons(updated);



      updateCourseProgress(

        course.id,

        currentLesson,

        lessons.length

      );



      // Lesson XP

      addXP(20);



      // First lesson badge

      if (currentLesson === 0) {

        unlockBadge(
          "First Lesson Completed"
        );

      }





      // Course completion

      if (
        updated.length === lessons.length
      ) {


        addXP(100);



        unlockBadge(
          `${course.title} Master`
        );


      }


    }


  };









  // ===============================
  // NEXT LESSON
  // ===============================


  const nextLesson = () => {


    if (
      currentLesson < lessons.length - 1
    ) {

      setCurrentLesson(
        currentLesson + 1
      );

    }


  };









  // ===============================
  // PREVIOUS LESSON
  // ===============================


  const previousLesson = () => {


    if (currentLesson > 0) {

      setCurrentLesson(
        currentLesson - 1
      );

    }


  };








  const courseCompleted =
    progress === 100;








  return (


    <div className="container mx-auto px-4 py-8">





      {/* COURSE HEADER */}



      <div className="bg-white rounded-xl shadow-lg p-6">


        <div className="flex gap-5 items-center">


          <div className="text-6xl">

            {course.icon}

          </div>



          <div>


            <h1 className="text-4xl font-bold">

              {course.title}

            </h1>



            <p className="text-gray-600 mt-2">

              {course.description}

            </p>


          </div>


        </div>


      </div>









      {/* PROGRESS */}



      <div className="bg-white shadow rounded-xl p-6 mt-6">


        <div className="flex justify-between">


          <h2 className="text-xl font-bold">

            Course Progress

          </h2>



          <span>

            {progress}%

          </span>


        </div>





        <div className="bg-gray-200 h-4 rounded-full mt-3">


          <div

            className="bg-green-600 h-4 rounded-full"

            style={{
              width: `${progress}%`
            }}

          />

        </div>


      </div>









      <div className="grid lg:grid-cols-3 gap-6 mt-8">






        {/* LESSON LIST */}



        <div className="bg-white rounded-xl shadow p-5">


          <h2 className="text-2xl font-bold mb-5">

            Lessons

          </h2>



          {
            lessons.map(
              (lesson, index) => (


                <button

                  key={index}

                  onClick={() => setCurrentLesson(index)}

                  className={`
                  w-full text-left p-3 rounded-lg mb-3

                  ${currentLesson === index

                      ?

                      "bg-blue-600 text-white"

                      :

                      "bg-gray-100"

                    }

                  `}

                >


                  {
                    completedLessons.includes(index)

                      ?

                      "✅"

                      :

                      "📖"

                  }


                  {" "}


                  {lesson.title}



                </button>


              )
            )
          }


        </div>









        {/* LESSON CONTENT */}



        <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">



          {
            currentContent &&

            <>


              <img

                src={currentContent.image}

                alt="lesson"

                className="w-full h-64 object-cover rounded-lg mb-6"

              />





              <h1 className="text-3xl font-bold">

                {currentContent.title}

              </h1>





              <p className="mt-5 whitespace-pre-line text-gray-700 leading-8">

                {currentContent.content}

              </p>






              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mt-8">


                <h3 className="font-bold text-xl">

                  💡 Did You Know?

                </h3>


                <p>

                  {currentContent.didYouKnow}

                </p>


              </div>






              <div className="bg-red-50 border-l-4 border-red-600 p-5 mt-6">


                <h3 className="font-bold text-xl">

                  ⚠ Common Mistakes

                </h3>



                <ul className="mt-3 list-disc ml-5">


                  {
                    currentContent.mistakes?.map(
                      (item, index) => (

                        <li key={index}>

                          ❌ {item}

                        </li>

                      )
                    )
                  }


                </ul>


              </div>









              {/* BUTTONS */}



              <div className="flex flex-wrap gap-4 mt-10">



                <button

                  onClick={previousLesson}

                  disabled={currentLesson === 0}

                  className="
                  bg-gray-500
                  text-white
                  px-5 py-3
                  rounded-lg
                  disabled:bg-gray-300
                  "

                >

                  ⬅ Previous

                </button>







                <button

                  onClick={completeLesson}

                  className="
                  bg-green-600
                  text-white
                  px-5 py-3
                  rounded-lg
                  "

                >

                  ✅ Mark Complete (+20 XP)

                </button>







                <button

                  onClick={nextLesson}

                  disabled={
                    currentLesson === lessons.length - 1
                  }

                  className="
                  bg-blue-600
                  text-white
                  px-5 py-3
                  rounded-lg
                  disabled:bg-gray-300
                  "

                >

                  Next ➡

                </button>



              </div>









              {
                courseCompleted &&


                <div className="bg-green-100 p-6 rounded-xl mt-10">


                  <h2 className="text-3xl font-bold text-green-700">

                    🎉 Course Completed!

                  </h2>



                  <p className="mt-3">

                    You earned XP and unlocked a badge.

                  </p>




                  <button

                    onClick={() => navigate("/courses")}

                    className="
                    mt-5
                    bg-green-600
                    text-white
                    px-6 py-3
                    rounded-lg
                    "

                  >

                    Back To Courses

                  </button>


                </div>


              }



            </>

          }



        </div>





      </div>




    </div>


  );

}