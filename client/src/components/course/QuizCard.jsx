import { useState } from "react";


export default function QuizCard({ quiz }) {


  const [selected, setSelected] = useState(null);

  const [score, setScore] = useState(null);



  const submitQuiz = () => {


    if (selected === quiz.answer) {

      setScore("🎉 Correct Answer");

    }

    else {

      setScore("❌ Wrong Answer");

    }


  };



  return (

    <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 mt-6">


      <h3 className="text-xl font-bold text-green-700 mb-4">

        ❓ Quick Check

      </h3>


      <p className="font-semibold mb-5">

        {quiz.question}

      </p>



      <div className="space-y-3">


        {
          quiz.options.map((option, index) => (


            <label
              key={index}
              className="flex gap-3 cursor-pointer"
            >


              <input

                type="radio"

                name="quiz"

                onChange={() => setSelected(index)}

              />


              {option}


            </label>


          ))
        }


      </div>


      <button

        onClick={submitQuiz}

        className="mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"

      >

        Submit

      </button>



      {
        score &&

        <p className="mt-4 font-bold">

          {score}

        </p>

      }



    </div>


  );


}