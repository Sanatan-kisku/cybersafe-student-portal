import { createContext, useEffect, useState } from "react";
import { getQuizResult } from "../services/quizService";

export const QuizContext = createContext();

const initialQuiz = {
  score: 0,
  total: 0,
  percentage: 0,
  passed: false,
};

export default function QuizProvider({ children }) {
  const [quizResult, setQuizResult] = useState(initialQuiz);
  const [loading, setLoading] = useState(false);

  const loadQuiz = async () => {
    setLoading(true);

    try {
      const data = await getQuizResult();

      if (data.success && data.quiz) {
        setQuizResult(data.quiz);
      } else {
        setQuizResult(initialQuiz);
      }
    } catch (error) {
      if (error.response?.status !== 401) {
        console.error(error);
      }

      setQuizResult(initialQuiz);
    } finally {
      setLoading(false);
    }
  };

  const resetQuiz = () => {
    setQuizResult(initialQuiz);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      loadQuiz();
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizResult,
        setQuizResult,
        loadQuiz,
        resetQuiz,
        loading,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}