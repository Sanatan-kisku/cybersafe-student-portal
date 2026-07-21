import DidYouKnow from "./DidYouKnow";
import CommonMistakes from "./CommonMistakes";
import ActivityCard from "./ActivityCard";
import QuizCard from "./QuizCard";


export default function LessonCard({ lesson }) {


  return (

    <div className="bg-white rounded-xl shadow-lg p-8">


      {/* Image */}

      <img

        src={lesson.image}

        alt={lesson.title}

        className="w-full h-64 object-cover rounded-xl mb-6"

      />



      {/* Title */}

      <h1 className="text-3xl font-bold mb-5">

        {lesson.title}

      </h1>



      {/* Content */}

      <p className="text-gray-700 whitespace-pre-line leading-8">

        {lesson.content}

      </p>



      {/* Did You Know */}

      <DidYouKnow

        text={lesson.didYouKnow}

      />



      {/* Mistakes */}

      <CommonMistakes

        mistakes={lesson.mistakes}

      />



      {/* Activity */}

      <ActivityCard

        activity={lesson.activity}

      />



      {/* Quiz */}

      <QuizCard

        quiz={lesson.quiz}

      />



    </div>

  );

}