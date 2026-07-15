import useQuiz from "../../hooks/useQuiz";

export default function QuizStatusCard() {

  const { quizResult } = useQuiz();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        📝 Quiz Progress
      </h2>

      <p>
        Score:
        {" "}
        {quizResult.score}/{quizResult.total}
      </p>

      <p className="mt-2">
        Percentage:
        {" "}
        {quizResult.percentage}%
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-5">

        <div
          className="bg-green-500 h-3 rounded-full"
          style={{
            width: `${quizResult.percentage}%`,
          }}
        />

      </div>

      <p className="mt-5 font-semibold">

        {quizResult.passed
          ? "✅ Passed"
          : "❌ Not Passed"}

      </p>

    </div>
  );
}