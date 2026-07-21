export const badges = [
  {
    id: "first_lesson",
    name: "First Step",
    icon: "🎯",
    description:
      "Completed your first lesson",
  },

  {
    id: "password_master",
    name: "Password Master",
    icon: "🔐",
    description:
      "Completed Password Security course",
  },

  {
    id: "phishing_detector",
    name: "Scam Spotter",
    icon: "🎣",
    description:
      "Completed Phishing course",
  },

  {
    id: "malware_defender",
    name: "Malware Defender",
    icon: "🛡️",
    description:
      "Completed Malware course",
  },

  {
    id: "cyber_expert",
    name: "Cyber Expert",
    icon: "🏆",
    description:
      "Completed all courses",
  },
];


// Add XP

export function addXP(points) {

  const currentXP =
    Number(localStorage.getItem("studentXP")) || 0;


  localStorage.setItem(
    "studentXP",
    currentXP + points
  );

}


// Get XP

export function getXP() {

  return Number(
    localStorage.getItem("studentXP")
  ) || 0;

}


// Save Badge

export function unlockBadge(id) {

  const saved =
    JSON.parse(
      localStorage.getItem("badges") || "[]"
    );


  if (!saved.includes(id)) {

    saved.push(id);

    localStorage.setItem(
      "badges",
      JSON.stringify(saved)
    );

  }

}


// Get Badges

export function getBadges() {

  return JSON.parse(
    localStorage.getItem("badges") || "[]"
  );

}