import { useState } from "react";


import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaLock,
  FaKey,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

/* ---------------------------------- */
/* Common Weak Passwords */
/* ---------------------------------- */

const commonPasswords = [
  "password",
  "password123",
  "123456",
  "12345678",
  "123456789",
  "qwerty",
  "abc123",
  "welcome",
  "admin",
  "letmein",
  "iloveyou",
  "football",
  "monkey",
];

/* ---------------------------------- */
/* Keyboard Patterns */
/* ---------------------------------- */

const keyboardPatterns = [
  "qwerty",
  "asdf",
  "zxcv",
  "12345",
  "98765",
];

/* ---------------------------------- */
/* Helper Functions */
/* ---------------------------------- */

function estimateEntropy(password) {
  let pool = 0;

  if (/[a-z]/.test(password)) pool += 26;

  if (/[A-Z]/.test(password)) pool += 26;

  if (/[0-9]/.test(password)) pool += 10;

  if (/[^A-Za-z0-9]/.test(password)) pool += 32;

  if (!pool) return 0;

  return Math.round(
    password.length * Math.log2(pool)
  );
}

function estimateCrackTime(entropy) {

  if (entropy < 28)
    return "Instantly";

  if (entropy < 36)
    return "Minutes";

  if (entropy < 60)
    return "Days";

  if (entropy < 80)
    return "Years";

  return "Millions of Years";

}

function getRisk(score) {

  if (score >= 90) {

    return {
      text: "Excellent",
      color: "green",
      badge: "bg-green-100 text-green-700",
      bar: "bg-green-500",
    };

  }

  if (score >= 75) {

    return {
      text: "Strong",
      color: "emerald",
      badge: "bg-emerald-100 text-emerald-700",
      bar: "bg-emerald-500",
    };

  }

  if (score >= 55) {

    return {
      text: "Good",
      color: "yellow",
      badge: "bg-yellow-100 text-yellow-700",
      bar: "bg-yellow-500",
    };

  }

  if (score >= 35) {

    return {
      text: "Weak",
      color: "orange",
      badge: "bg-orange-100 text-orange-700",
      bar: "bg-orange-500",
    };

  }

  return {
    text: "Very Weak",
    color: "red",
    badge: "bg-red-100 text-red-700",
    bar: "bg-red-500",
  };

}

export default function PasswordChecker() {

  const [password, setPassword] = useState("");

  const [analysis, setAnalysis] = useState(null);
  const analyzePassword = () => {

    if (!password) {
      setAnalysis(null);
      return;
    }

    let score = 0;

    const checks = [];

    const recommendations = [];

    /* ------------------------------ */
    /* Password Length */
    /* ------------------------------ */

    if (password.length >= 12) {
      score += 10;
      checks.push({
        title: "12+ Characters",
        passed: true,
      });
    } else {
      checks.push({
        title: "12+ Characters",
        passed: false,
      });

      recommendations.push(
        "Increase password length to at least 12 characters."
      );
    }

    /* ------------------------------ */
    /* Uppercase */
    /* ------------------------------ */

    if (/[A-Z]/.test(password)) {
      score += 8;
      checks.push({
        title: "Uppercase Letters",
        passed: true,
      });
    } else {
      checks.push({
        title: "Uppercase Letters",
        passed: false,
      });

      recommendations.push(
        "Include uppercase letters."
      );
    }

    /* ------------------------------ */
    /* Lowercase */
    /* ------------------------------ */

    if (/[a-z]/.test(password)) {
      score += 8;
      checks.push({
        title: "Lowercase Letters",
        passed: true,
      });
    } else {
      checks.push({
        title: "Lowercase Letters",
        passed: false,
      });

      recommendations.push(
        "Include lowercase letters."
      );
    }

    /* ------------------------------ */
    /* Numbers */
    /* ------------------------------ */

    if (/\d/.test(password)) {
      score += 8;
      checks.push({
        title: "Numbers",
        passed: true,
      });
    } else {
      checks.push({
        title: "Numbers",
        passed: false,
      });

      recommendations.push(
        "Include numbers."
      );
    }

    /* ------------------------------ */
    /* Symbols */
    /* ------------------------------ */

    if (/[^A-Za-z0-9]/.test(password)) {
      score += 10;
      checks.push({
        title: "Special Characters",
        passed: true,
      });
    } else {
      checks.push({
        title: "Special Characters",
        passed: false,
      });

      recommendations.push(
        "Use symbols like ! @ # $ %."
      );
    }

    /* ------------------------------ */
    /* Common Password */
    /* ------------------------------ */

    if (
      commonPasswords.includes(
        password.toLowerCase()
      )
    ) {

      checks.push({
        title: "Not a Common Password",
        passed: false,
      });

      recommendations.push(
        "This password appears in common password databases."
      );

      score -= 20;

    } else {

      score += 10;

      checks.push({
        title: "Not a Common Password",
        passed: true,
      });

    }

    /* ------------------------------ */
    /* Repeated Characters */
    /* ------------------------------ */

    if (!/(.)\1{2,}/.test(password)) {

      score += 8;

      checks.push({
        title: "No Repeated Characters",
        passed: true,
      });

    } else {

      checks.push({
        title: "No Repeated Characters",
        passed: false,
      });

      recommendations.push(
        "Avoid repeated characters."
      );

    }

    /* ------------------------------ */
    /* Sequential Characters */
    /* ------------------------------ */

    const sequences = [
      "1234",
      "2345",
      "3456",
      "4567",
      "5678",
      "6789",
      "abcd",
      "bcde",
      "cdef",
      "qwerty",
    ];

    if (
      !sequences.some((item) =>
        password.toLowerCase().includes(item)
      )
    ) {

      score += 8;

      checks.push({
        title: "No Sequential Patterns",
        passed: true,
      });

    } else {

      checks.push({
        title: "No Sequential Patterns",
        passed: false,
      });

      recommendations.push(
        "Avoid sequential patterns like 1234 or abcd."
      );

    }

    /* ------------------------------ */
    /* Keyboard Patterns */
    /* ------------------------------ */

    if (
      !keyboardPatterns.some((item) =>
        password.toLowerCase().includes(item)
      )
    ) {

      score += 8;

      checks.push({
        title: "No Keyboard Patterns",
        passed: true,
      });

    } else {

      checks.push({
        title: "No Keyboard Patterns",
        passed: false,
      });

      recommendations.push(
        "Avoid keyboard patterns like qwerty."
      );

    }

    /* ------------------------------ */
    /* Spaces */
    /* ------------------------------ */

    if (!/\s/.test(password)) {

      score += 5;

      checks.push({
        title: "No Spaces",
        passed: true,
      });

    } else {

      checks.push({
        title: "No Spaces",
        passed: false,
      });

    }

    /* ------------------------------ */
    /* Character Variety */
    /* ------------------------------ */

    const types =
      [
        /[A-Z]/,
        /[a-z]/,
        /\d/,
        /[^A-Za-z0-9]/,
      ].filter((regex) =>
        regex.test(password)
      ).length;

    score += types * 3;

    const entropy =
      estimateEntropy(password);

    const crackTime =
      estimateCrackTime(entropy);

    score = Math.max(
      0,
      Math.min(score, 100)
    );

    const risk = getRisk(score);

    setAnalysis({

      score,

      risk,

      entropy,

      crackTime,

      checks,

      recommendations,

      statistics: {

        length: password.length,

        uppercase:
          (password.match(/[A-Z]/g) || [])
            .length,

        lowercase:
          (password.match(/[a-z]/g) || [])
            .length,

        numbers:
          (password.match(/\d/g) || [])
            .length,

        symbols:
          (
            password.match(
              /[^A-Za-z0-9]/g
            ) || []
          ).length,

        unique:
          new Set(password).size,

      },

    });

  };
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

      {/* Header */}

      <div className="mb-6 flex items-center gap-4">

        <div className="rounded-xl bg-blue-600 p-3 text-white">

          <FaShieldAlt size={30} />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">

            Advanced Password Security Analyzer

          </h2>

          <p className="text-slate-500">

            Analyze your password using multiple cybersecurity checks.

          </p>

        </div>

      </div>

      {/* Password Input */}

      <div className="flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <FaKey
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
    w-full
    rounded-xl
    border
    border-slate-300
    py-3
    pl-12
    pr-4
    outline-none
    transition
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-200
  "
          />

        </div>

        <button
          onClick={analyzePassword}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >

          <FaChartLine />

          Analyze Password

        </button>

      </div>

      {analysis && (

        <>

          {/* Security Score */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold">

                  Password Security Score

                </h3>

                <p className="text-slate-500">

                  Overall Password Strength

                </p>

              </div>

              <span
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-bold
                  ${analysis.risk.badge}
                `}
              >

                {analysis.risk.text}

              </span>

            </div>

            <div className="mt-6">

              <div className="mb-2 flex justify-between">

                <span className="font-medium">

                  Security Score

                </span>

                <span className="font-bold text-blue-600">

                  {analysis.score}%

                </span>

              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                <div
                  className={`
                    h-full
                    transition-all
                    duration-700
                    ${analysis.risk.bar}
                  `}
                  style={{
                    width: `${analysis.score}%`,
                  }}
                />

              </div>

            </div>

          </div>
          {/* Security Checklist */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

                <FaShieldAlt className="text-blue-600" />

                Security Checklist

              </h3>

              <div className="space-y-3">

                {analysis.checks.map((check, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
                  >

                    <span className="font-medium text-slate-700">

                      {check.title}

                    </span>

                    {check.passed ? (

                      <span className="flex items-center gap-2 font-semibold text-green-600">

                        <FaCheckCircle />

                        Passed

                      </span>

                    ) : (

                      <span className="flex items-center gap-2 font-semibold text-red-600">

                        <FaTimesCircle />

                        Failed

                      </span>

                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* Password Statistics */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

                <FaChartLine className="text-blue-600" />

                Password Statistics

              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Length
                  </span>

                  <span className="font-semibold">
                    {analysis.statistics.length}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Uppercase Letters
                  </span>

                  <span className="font-semibold">
                    {analysis.statistics.uppercase}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Lowercase Letters
                  </span>

                  <span className="font-semibold">
                    {analysis.statistics.lowercase}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Numbers
                  </span>

                  <span className="font-semibold">
                    {analysis.statistics.numbers}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Symbols
                  </span>

                  <span className="font-semibold">
                    {analysis.statistics.symbols}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Unique Characters
                  </span>

                  <span className="font-semibold">
                    {analysis.statistics.unique}
                  </span>

                </div>

                <div className="border-t pt-4">

                  <div className="flex justify-between">

                    <span className="font-medium text-slate-700">
                      Entropy
                    </span>

                    <span className="font-bold text-blue-600">
                      {analysis.entropy} bits
                    </span>

                  </div>

                </div>

                <div className="flex justify-between">

                  <span className="font-medium text-slate-700">
                    Estimated Crack Time
                  </span>

                  <span className="font-bold text-green-600">
                    {analysis.crackTime}
                  </span>

                </div>

              </div>

            </div>

          </div>
          {/* Security Summary */}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

              <FaChartLine className="text-blue-600" />

              Security Summary

            </h3>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="rounded-xl bg-blue-50 p-5 text-center">

                <h4 className="text-sm font-semibold text-slate-500">
                  Security Score
                </h4>

                <p className="mt-2 text-4xl font-bold text-blue-600">
                  {analysis.score}%
                </p>

              </div>

              <div className="rounded-xl bg-green-50 p-5 text-center">

                <h4 className="text-sm font-semibold text-slate-500">
                  Checks Passed
                </h4>

                <p className="mt-2 text-4xl font-bold text-green-600">
                  {
                    analysis.checks.filter(
                      (item) => item.passed
                    ).length
                  }
                </p>

              </div>

              <div className="rounded-xl bg-red-50 p-5 text-center">

                <h4 className="text-sm font-semibold text-slate-500">
                  Checks Failed
                </h4>

                <p className="mt-2 text-4xl font-bold text-red-600">
                  {
                    analysis.checks.filter(
                      (item) => !item.passed
                    ).length
                  }
                </p>

              </div>

            </div>

          </div>

          {/* CyberSafe AI Advice */}

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">

            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-blue-700">

              <FaShieldAlt />

              CyberSafe AI Advice

            </h3>

            <p className="leading-7 text-slate-700">

              {analysis.score >= 90 &&
                "Excellent! Your password follows modern password security recommendations. It is suitable for protecting important accounts such as email, banking, and social media."}

              {analysis.score >= 75 &&
                analysis.score < 90 &&
                "Your password is strong. Consider increasing the length to 16+ characters for even greater protection and always enable Multi-Factor Authentication (MFA)."}

              {analysis.score >= 55 &&
                analysis.score < 75 &&
                "Your password is reasonably secure but could be improved by increasing its length and adding more random symbols and character variety."}

              {analysis.score >= 35 &&
                analysis.score < 55 &&
                "Your password is weak. It should include uppercase letters, lowercase letters, numbers, symbols, and avoid predictable patterns."}

              {analysis.score < 35 &&
                "This password is highly vulnerable to guessing and dictionary attacks. Create a completely new password before using it for any important account."}

            </p>

          </div>

          {/* Recommendations */}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

              <FaLock className="text-green-600" />

              Security Recommendations

            </h3>

            {analysis.recommendations.length > 0 ? (

              <ul className="space-y-3">

                {analysis.recommendations.map(
                  (item, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-yellow-50 p-4"
                    >

                      <FaExclamationTriangle className="mt-1 text-yellow-600" />

                      <span className="text-slate-700">
                        {item}
                      </span>

                    </li>

                  )
                )}

                <li className="flex items-start gap-3 rounded-lg bg-green-50 p-4">

                  <FaCheckCircle className="mt-1 text-green-600" />

                  <span>
                    Enable Multi-Factor Authentication (MFA) whenever possible.
                  </span>

                </li>

                <li className="flex items-start gap-3 rounded-lg bg-green-50 p-4">

                  <FaCheckCircle className="mt-1 text-green-600" />

                  <span>
                    Never reuse the same password across multiple websites.
                  </span>

                </li>

                <li className="flex items-start gap-3 rounded-lg bg-green-50 p-4">

                  <FaCheckCircle className="mt-1 text-green-600" />

                  <span>
                    Consider using a password manager to generate and store strong passwords.
                  </span>

                </li>

              </ul>

            ) : (

              <div className="rounded-xl bg-green-50 p-5 font-medium text-green-700">

                🎉 Excellent! No major password weaknesses were detected. Continue using unique passwords and enable Multi-Factor Authentication for maximum security.

              </div>

            )}

          </div>

          {/* Disclaimer */}

          <div className="mt-8 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5">

            <h4 className="font-bold text-blue-700">

              CyberSafe Security Note

            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">

              This password analyzer evaluates password strength using
              multiple heuristic security checks, including character
              diversity, length, entropy estimation, repeated characters,
              sequential patterns, keyboard patterns, and common password
              databases. The estimated crack time is approximate and is
              intended for educational purposes. For maximum security,
              always use unique passwords together with Multi-Factor
              Authentication (MFA).

            </p>

          </div>

        </>

      )}

    </div>

  );

}