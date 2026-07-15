import useAuth from "../../hooks/useAuth";

export default function CertificateTemplate() {

  const { user } = useAuth();

  const today = new Date().toLocaleDateString();

  return (

    <div
      id="certificate"
      className="max-w-4xl mx-auto bg-white border-8 border-blue-700 p-10 text-center"
    >

      <h1 className="text-5xl font-bold text-blue-700">
        Certificate of Completion
      </h1>

      <p className="mt-10 text-xl">
        This certificate is proudly presented to
      </p>

      <h2 className="text-4xl font-bold mt-5">
        {user?.name}
      </h2>

      <p className="mt-8 text-xl">
        for successfully completing the
      </p>

      <h3 className="text-3xl font-bold mt-4">
        Cyber Safety Awareness Program
      </h3>

      <p className="mt-10">
        Issued on: {today}
      </p>

      <div className="mt-16 flex justify-between">

        <div>

          ______________________

          <p>Instructor</p>

        </div>

        <div>

          ______________________

          <p>CyberSafe Portal</p>

        </div>

      </div>

    </div>

  );

}