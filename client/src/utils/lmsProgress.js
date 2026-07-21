const COURSE_KEY = "courseProgress";
const XP_KEY = "studentXP";
const BADGE_KEY = "studentBadges";


export const getCourseProgress = () => {

  return JSON.parse(
    localStorage.getItem(COURSE_KEY) || "{}"
  );

};



export const saveCourseProgress = (data) => {

  localStorage.setItem(
    COURSE_KEY,
    JSON.stringify(data)
  );

};



export const updateCourseProgress = (
  courseId,
  lessonIndex,
  totalLessons
) => {

  const progress =
    getCourseProgress();


  if (!progress[courseId]) {

    progress[courseId] = {
      currentLesson: 0,
      completedLessons: []
    };

  }


  if (
    !progress[courseId]
      .completedLessons
      .includes(lessonIndex)
  ) {

    progress[courseId]
      .completedLessons
      .push(lessonIndex);

  }


  progress[courseId]
    .currentLesson = lessonIndex;



  progress[courseId]
    .percentage =
    Math.round(
      (
        progress[courseId]
          .completedLessons
          .length
        /
        totalLessons
      ) * 100
    );


  saveCourseProgress(progress);


  return progress;

};



// XP SYSTEM

export const addXP = (amount) => {


  let xp =
    Number(
      localStorage.getItem(XP_KEY)
      || 0
    );


  xp += amount;


  localStorage.setItem(
    XP_KEY,
    xp
  );


  return xp;

};



// BADGES

export const getBadges = () => {

  return JSON.parse(
    localStorage.getItem(BADGE_KEY)
    || "[]"
  );

};



export const unlockBadge = (badge) => {


  let badges = getBadges();


  if (!badges.includes(badge)) {

    badges.push(badge);

    localStorage.setItem(
      BADGE_KEY,
      JSON.stringify(badges)
    );

  }


  return badges;

};