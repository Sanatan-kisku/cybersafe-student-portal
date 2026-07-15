import useAuth from "../../hooks/useAuth";

export default function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        👤 Student Profile
      </h2>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>

      <p className="mt-3">
        <strong>Email:</strong> {user?.email}
      </p>

      <p className="mt-3">
        <strong>Role:</strong> Student
      </p>

    </div>
  );
}