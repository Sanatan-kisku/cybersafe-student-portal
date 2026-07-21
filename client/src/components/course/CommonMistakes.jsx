export default function CommonMistakes({ mistakes }) {

  return (

    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6">

      <h3 className="text-xl font-bold text-red-700 mb-4">
        ⚠ Common Mistakes
      </h3>


      <ul className="space-y-3">

        {mistakes.map((mistake, index) => (

          <li
            key={index}
            className="flex items-center gap-2 text-gray-700"
          >

            <span className="text-red-500">
              ❌
            </span>

            {mistake}

          </li>

        ))}

      </ul>


    </div>

  );
}