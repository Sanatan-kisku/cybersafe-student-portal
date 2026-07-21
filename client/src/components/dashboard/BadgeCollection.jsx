import {
  badges,
  getBadges
} from "../../utils/achievement";


export default function BadgeCollection() {


  const unlocked = getBadges();


  return (

    <div className="
bg-white
rounded-xl
shadow
p-6
">


      <h2 className="text-2xl font-bold mb-5">
        🏅 Badge Collection
      </h2>


      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">


        {
          badges.map((badge) => (


            <div
              key={badge.id}
              className={`
rounded-xl
p-4
text-center

${unlocked.includes(badge.id)

                  ?
                  "bg-green-100"

                  :

                  "bg-gray-100 opacity-40"

                }

`}
            >


              <div className="text-4xl">

                {badge.icon}

              </div>


              <p className="font-semibold">

                {badge.name}

              </p>


            </div>


          ))

        }


      </div>


    </div>

  );


}