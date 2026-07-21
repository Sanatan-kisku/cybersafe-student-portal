import { useEffect, useState } from "react";
import { getXP } from "../../utils/achievement";


export default function XPCard() {

  const [xp, setXP] = useState(0);


  useEffect(() => {

    setXP(getXP());

  }, []);


  return (

    <div className="
 bg-gradient-to-r
 from-yellow-400
 to-orange-500
 text-white
 rounded-xl
 p-6
 shadow-lg
 ">


      <h2 className="text-xl font-bold">
        ⭐ Total XP
      </h2>


      <p className="text-5xl font-bold mt-3">
        {xp}
      </p>


      <p>
        Keep learning to earn more XP
      </p>


    </div>

  );

}