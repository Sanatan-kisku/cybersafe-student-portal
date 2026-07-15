import useAuth from "../../hooks/useAuth";

export default function WelcomeCard() {
  const { user } = useAuth();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg text-white p-8">

      <h1 className="text-3xl font-bold">
        Welcome, {user?.name} 👋
      </h1>

      <p className="mt-2">
        {user?.email}
      </p>

      <p className="mt-5 text-lg">
        Continue your Cyber Safety learning journey.
      </p>

    </div>
  );
}