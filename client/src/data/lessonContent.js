import passwordImage from "../assets/courseImages/password.png";
import phishingImage from "../assets/courseImages/phishing.png";
import socialImage from "../assets/courseImages/social.png";
import malwareImage from "../assets/courseImages/malware.png";

const lessonContent = {

  // ==============================
  // COURSE 1
  // ==============================

  1: [

    {
      title: "Introduction to Password Security",

      image: passwordImage,

      content: `
Passwords protect your online identity.

Every email account, social media account and banking app uses passwords to verify your identity.

Weak passwords are one of the biggest causes of cyber attacks.

By the end of this course you will know how to create strong passwords and secure your online accounts.
`,

      didYouKnow:
        "More than 80% of hacking incidents happen because of weak or reused passwords.",

      mistakes: [
        "Using 123456",
        "Using your birthday",
        "Using your mobile number",
        "Using the same password everywhere"
      ],

      activity: {
        question: "Choose the strongest password",

        options: [
          "password123",
          "Sanatan@2026#",
          "abc123"
        ],

        answer: "Sanatan@2026#",

        explanation:
          "A strong password contains uppercase letters, lowercase letters, numbers and symbols."
      },

      quiz: {

        question:
          "Which is the strongest password?",

        options: [
          "12345678",
          "password",
          "Cyber@2026#",
          "abcdef"
        ],

        answer: 2

      }

    },

    {
      title: "Creating Strong Passwords",

      image: passwordImage,

      content: `
A strong password should contain

• Uppercase letters

• Lowercase letters

• Numbers

• Symbols

• Minimum 12 characters

Long passwords are harder to crack.
`,

      didYouKnow:
        "Every extra character increases password strength dramatically.",

      mistakes: [
        "Using your pet name",
        "Using your school name",
        "Using dictionary words"
      ],

      activity: {

        question:
          "Minimum recommended password length?",

        options: [
          "4",
          "8",
          "12",
          "20"
        ],

        answer: "12",

        explanation:
          "Security experts recommend at least 12 characters."
      },

      quiz: {

        question:
          "Which password is safest?",

        options: [
          "Rahul123",
          "Password1",
          "Cyber@Safe2026#",
          "abcdef"
        ],

        answer: 2

      }

    },

    {
      title: "Password Managers",

      image: passwordImage,

      content: `
Password managers store your passwords securely.

Examples:

• Bitwarden

• Dashlane

• 1Password

• LastPass

You only remember one master password.
`,

      didYouKnow:
        "Password managers can generate random passwords stronger than humans usually create.",

      mistakes: [

        "Writing passwords in notebooks",

        "Saving passwords in WhatsApp"

      ],

      activity: {

        question:
          "Which is a password manager?",

        options: [
          "Chrome",
          "Bitwarden",
          "Photoshop"
        ],

        answer: "Bitwarden",

        explanation:
          "Bitwarden is a password manager."
      },

      quiz: {

        question:
          "Why use password managers?",

        options: [

          "Store passwords securely",

          "Increase internet speed",

          "Remove viruses",

          "Edit images"

        ],

        answer: 0

      }

    },

    {
      title: "Two Factor Authentication",

      image: passwordImage,

      content: `
2FA adds another layer of security.

After entering the password, users verify identity using:

• OTP

• Authenticator App

• Security Key
`,

      didYouKnow:
        "Google reports that enabling 2FA significantly reduces the risk of account compromise.",

      mistakes: [

        "Sharing OTP",

        "Ignoring security alerts"

      ],

      activity: {

        question:
          "Never share your _____",

        options: [

          "OTP",

          "Username",

          "Profile Photo"

        ],

        answer: "OTP",

        explanation:
          "OTP should never be shared."
      },

      quiz: {

        question:
          "What does OTP stand for?",

        options: [

          "One Time Password",

          "Online Transfer Protocol",

          "Open Text Password",

          "Only Two Passwords"

        ],

        answer: 0

      }

    },

    {
      title: "Course Summary",

      image: passwordImage,

      content: `
Congratulations!

You learned

• Strong Passwords

• Password Managers

• 2FA

• OTP Safety

You are ready for the Cyber Safety Quiz.
`,

      didYouKnow:
        "Using unique passwords for every account greatly limits damage if one account is compromised.",

      mistakes: [

        "Reusing passwords",

        "Ignoring updates"

      ],

      activity: {

        question:
          "Are you ready for the quiz?",

        options: [

          "Yes",

          "Need Revision"

        ],

        answer: "Yes",

        explanation:
          "Great! Proceed to the quiz."
      },

      quiz: {

        question:
          "Which topic was NOT covered?",

        options: [

          "2FA",

          "Password Managers",

          "Password Strength",

          "Video Editing"

        ],

        answer: 3

      }

    }

  ],

  // ==============================
  // COURSE 2
  // ==============================

  2: [

    {
      title: "Introduction to Phishing",

      image: phishingImage,

      content: `
Phishing is a cyber attack where attackers trick users into revealing passwords, bank details, or personal information by pretending to be trustworthy organizations.
`,

      didYouKnow:
        "Phishing emails are one of the most common cyber threats worldwide.",

      mistakes: [
        "Clicking unknown links",
        "Opening suspicious attachments",
        "Ignoring sender addresses"
      ],

      activity: {
        question: "Which email looks suspicious?",
        options: [
          "support@google.com",
          "support-google.xyz",
          "help@microsoft.com"
        ],
        answer: "support-google.xyz",
        explanation:
          "Attackers often use fake domains that look similar to real companies."
      },

      quiz: {
        question: "What is phishing?",
        options: [
          "A type of cyber attack",
          "A programming language",
          "An antivirus",
          "A browser"
        ],
        answer: 0
      }

    }

    // More phishing lessons will be added in Part 7.2

  ],

  // ==============================
  // COURSE 3
  // ==============================

  3: [

    {
      title: "Internet Safety",

      image: socialImage,

      content: `
Always think before posting online. Once information is shared publicly, it can be difficult to remove permanently.
`,

      didYouKnow:
        "Your digital footprint can affect future education and job opportunities.",

      mistakes: [
        "Oversharing personal information",
        "Accepting friend requests from strangers"
      ],

      activity: {
        question: "Should you share your home address online?",
        options: [
          "Yes",
          "No"
        ],
        answer: "No",
        explanation:
          "Personal information should only be shared with trusted people."
      },

      quiz: {
        question: "What is a digital footprint?",
        options: [
          "Your online activity",
          "A computer virus",
          "A mobile app",
          "A password"
        ],
        answer: 0
      }

    }

  ],

  // ==============================
  // COURSE 4
  // ==============================

  4: [

    {
      title: "Introduction to Malware",

      image: malwareImage,

      content: `
Malware is malicious software designed to damage devices, steal information, or disrupt normal operations.
`,

      didYouKnow:
        "Ransomware attacks have affected hospitals, schools, and businesses around the world.",

      mistakes: [
        "Downloading software from unknown websites",
        "Ignoring security updates"
      ],

      activity: {
        question: "Which is malware?",
        options: [
          "Trojan",
          "Google Chrome",
          "Microsoft Word"
        ],
        answer: "Trojan",
        explanation:
          "A Trojan is a type of malware that disguises itself as legitimate software."
      },

      quiz: {
        question: "Which helps protect against malware?",
        options: [
          "Antivirus software",
          "Turning off updates",
          "Sharing USB drives",
          "Ignoring warnings"
        ],
        answer: 0
      }

    }

  ]

};

export default lessonContent;