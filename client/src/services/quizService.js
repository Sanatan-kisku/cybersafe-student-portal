import api from "./api";

export const submitQuiz = async (quizData) => {
  const response = await api.post("/quiz/submit", quizData);
  return response.data;
};

export const getQuizResult = async () => {
  const response = await api.get("/quiz/result");
  return response.data;
};