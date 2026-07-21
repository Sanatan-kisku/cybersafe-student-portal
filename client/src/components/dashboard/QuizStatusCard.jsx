import useQuiz from "../../hooks/useQuiz";

export default function QuizStatusCard() {

  const { quizResult } = useQuiz();

  const savedQuiz = JSON.parse(
    sessionStorage.getItem("quizState") || "{}"
  );

  const result = savedQuiz.result || quizResult;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        📝 Quiz Progress
      </h2>

      <p>
        Score:
        {" "}
        {result.score}/{result.total}
      </p>

      <p className="mt-2">
        Percentage:
        {" "}
        {result.percentage}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-5">

        <div
          className="bg-green-500 h-3 rounded-full"
          style={{
            width: `${result.percentage}%`,
          }}
        />

      </div>

      <p className="mt-5 font-semibold">

        {result.passed
          ? "✅ Passed"
          : "❌ Not Passed"}

      </p>

    </div>
  );
}