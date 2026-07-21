import { useState } from "react";


export default function ActivityCard({ activity }) {


  const [selected, setSelected] = useState("");

  const [result, setResult] = useState("");


  const checkAnswer = () => {


    if (selected === activity.answer) {

      setResult("✅ Correct! " + activity.explanation);

    }
    else {

      setResult("❌ Incorrect. " + activity.explanation);

    }

  };


  return (

    <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mt-6">


      <h3 className="text-xl font-bold text-yellow-700 mb-4">

        🧠 Activity

      </h3>


      <p className="font-semibold mb-4">

        {activity.question}

      </p>



      <div className="space-y-3">


        {activity.options.map((option, index) => (

          <label
            key={index}
            className="flex gap-3 items-center cursor-pointer"
          >

            <input

              type="radio"

              name="activity"

              value={option}

              onChange={(e) => setSelected(e.target.value)}

            />


            {option}


          </label>


        ))}


      </div>



      <button

        onClick={checkAnswer}

        className="mt-5 bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-lg"

      >

        Submit Answer

      </button>



      {
        result && (

          <p className="mt-4 font-semibold">

            {result}

          </p>

        )
      }



    </div>

  );

}