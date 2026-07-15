import { createContext, useEffect, useState } from "react";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {

  const [quizResult, setQuizResult] = useState(() => {
    const saved = localStorage.getItem("quizResult");

    return saved
      ? JSON.parse(saved)
      : {
        score: 0,
        total: 0,
        percentage: 0,
        passed: false,
      };
  });

  useEffect(() => {
    localStorage.setItem(
      "quizResult",
      JSON.stringify(quizResult)
    );
  }, [quizResult]);

  return (
    <QuizContext.Provider
      value={{
        quizResult,
        setQuizResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}