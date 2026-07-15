import useAuth from "../hooks/useAuth";
import PasswordChecker from "../components/games/PasswordChecker";
import LinkChecker from "../components/games/LinkChecker";


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

      <PasswordChecker />
      <LinkChecker />

    </div>

  )

}