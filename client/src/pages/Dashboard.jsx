import useAuth from "../hooks/useAuth";
import PasswordChecker from "../components/games/PasswordChecker";
import LinkChecker from "../components/games/LinkChecker";
import { Link } from "react-router-dom";


export default function Dashboard() {

  const { user } = useAuth();


  return (

    <div className="container py-10">


      <h1 className="text-3xl font-bold">

        Welcome {user?.name}

      </h1>


      <p className="mt-3">

        Continue your cyber safety learning journey.

      </p>
      <Link
        to="/quiz"
        className="block bg-blue-600 text-white p-5 rounded-lg mt-6 text-center hover:bg-blue-700"
      >
        📝 Take Cyber Safety Quiz
      </Link>

      <PasswordChecker />
      <LinkChecker />

    </div>

  )

}