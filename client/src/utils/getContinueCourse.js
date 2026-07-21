import { getCourseProgress }
  from "./lmsProgress";


export default function getContinueCourse() {

  const progress =
    getCourseProgress();


  for (
    const courseId in progress
  ) {

    if (
      progress[courseId].percentage < 100
    ) {

      return {
        courseId,
        lesson:
          progress[courseId]
            .currentLesson
      };

    }

  }


  return null;

}