import { useEffect, useState } from "react";


export default function LearningStreak() {


  const [streak, setStreak] = useState(0);



  useEffect(() => {


    let value =
      Number(
        localStorage.getItem("streak")
      ) || 1;


    setStreak(value);



  }, []);



  return (

    <div className="
bg-purple-600
text-white
rounded-xl
p-6
">


      <h2 className="text-2xl font-bold">

        🔥 Learning Streak

      </h2>


      <p className="text-5xl font-bold mt-3">

        {streak}

      </p>


      <p>
        Days Active
      </p>


    </div>

  )

}