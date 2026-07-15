import CertificateTemplate from "../components/certificate/CertificateTemplate";
import { Navigate } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";

export default function Certificate() {

  const downloadCertificate = () => {

    window.print();

  };

  const { quizResult } = useQuiz();

  if (!quizResult.passed) {
    return <Navigate to="/quiz" replace />;
  }

  return (

    <div className="py-10">

      <CertificateTemplate />

      <div className="text-center mt-8">

        <button

          onClick={downloadCertificate}

          className="bg-blue-700 text-white px-6 py-3 rounded-lg"

        >

          Download / Print Certificate

        </button>

      </div>

    </div>

  );

}