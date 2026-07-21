import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import ProfileCard from "../components/dashboard/ProfileCard";
import QuizStatusCard from "../components/dashboard/QuizStatusCard";
import QuickActions from "../components/dashboard/QuickActions";
import XPCard from "../components/dashboard/XPCard";
import BadgeCollection from "../components/dashboard/BadgeCollection";
import CourseProgressCard from "../components/dashboard/CourseProgressCard";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import LearningStreak from "../components/dashboard/LearningStreak";

import PasswordChecker from "../components/games/PasswordChecker";
import LinkChecker from "../components/games/LinkChecker";

import useQuiz from "../hooks/useQuiz";

export default function Dashboard() {
  const { quizResult, loading } = useQuiz();

  const savedQuiz = JSON.parse(
    sessionStorage.getItem("quizState") || "{}"
  );

  const result = savedQuiz.result || quizResult;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 ">

      {/* Welcome */}
      <WelcomeCard />

      <div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">


        <XPCard />

        <LearningStreak />

        <CourseProgressCard />

        <ContinueLearning />


      </div>


      <BadgeCollection />

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <StatsCard
          title="Courses"
          value="4"
          color="bg-blue-600"
        />

        <StatsCard
          title="Games"
          value="2"
          color="bg-purple-600"
        />

        <StatsCard
          title="Quiz"
          value={result.passed ? "Passed" : "Pending"}
          color={result.passed ? "bg-green-600" : "bg-yellow-500"}
        />

        <StatsCard
          title="Certificate"
          value={result.passed ? "Unlocked" : "Locked"}
          color={result.passed ? "bg-emerald-600" : "bg-red-500"}
        />

      </div>

      {/* Profile + Quiz */}
      <div className="grid lg:grid-cols-2 gap-6">

        <ProfileCard />

        <QuizStatusCard />

      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Cyber Games */}
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-3xl font-bold mb-5">
          🎮 Cyber Safety Games
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <PasswordChecker />

          <LinkChecker />

        </div>

      </div>

    </div>
  );
}