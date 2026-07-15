import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function Navbar() {

  const { user, logout } = useAuth();


  return (

    <nav className="bg-blue-700 text-white p-4">

      <div className="container flex justify-between items-center">


        <Link
          to="/"
          className="text-2xl font-bold"
        >
          🛡 CyberSafe
        </Link>


        <div className="flex gap-5">


          <Link to="/">
            Home
          </Link>


          <Link to="/courses">
            Courses
          </Link>


          <Link to="/about">
            About
          </Link>



          {
            user ?

              <>
                <Link to="/dashboard">
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                >
                  Logout
                </button>
              </>

              :

              <>
                <Link to="/login">
                  Login
                </Link>

                <Link to="/register">
                  Register
                </Link>

              </>

          }


        </div>


      </div>


    </nav>

  )

}