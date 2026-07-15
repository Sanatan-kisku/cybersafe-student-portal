import { useState } from "react";


export default function PasswordChecker() {

  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);


  const checkPassword = () => {

    let score = 0;
    let suggestions = [];


    // Length check
    if (password.length >= 8) {
      score++;
    }
    else {
      suggestions.push(
        "Use at least 8 characters"
      );
    }


    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score++;
    }
    else {
      suggestions.push(
        "Add uppercase letters"
      );
    }


    // Lowercase check
    if (/[a-z]/.test(password)) {
      score++;
    }
    else {
      suggestions.push(
        "Add lowercase letters"
      );
    }


    // Number check
    if (/[0-9]/.test(password)) {
      score++;
    }
    else {
      suggestions.push(
        "Add numbers"
      );
    }


    // Special character check
    if (/[!@#$%^&*]/.test(password)) {
      score++;
    }
    else {
      suggestions.push(
        "Add special characters (!@#$%)"
      );
    }



    let strength = "";


    if (score <= 2) {
      strength = "Weak";
    }
    else if (score <= 4) {
      strength = "Medium";
    }
    else {
      strength = "Strong";
    }



    setResult({
      score,
      strength,
      suggestions
    });

  };



  return (

    <div className="bg-white shadow rounded-lg p-6">


      <h2 className="text-2xl font-bold mb-4">
        🔐 Password Security Checker
      </h2>


      <input

        type="password"

        placeholder="Enter password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

        className="border p-3 w-full rounded"

      />


      <button

        onClick={checkPassword}

        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"

      >

        Check Password

      </button>



      {
        result && (

          <div className="mt-5">


            <h3 className="text-xl font-bold">

              Strength: {result.strength}

            </h3>


            <p>

              Score: {result.score}/5

            </p>



            {
              result.suggestions.length > 0 && (

                <div className="mt-3">

                  <h4 className="font-semibold">
                    Suggestions:
                  </h4>


                  <ul className="list-disc ml-5">

                    {
                      result.suggestions.map(
                        (item, index) => (

                          <li key={index}>
                            {item}
                          </li>

                        ))
                    }

                  </ul>

                </div>

              )
            }


          </div>

        )
      }



    </div>

  );
}