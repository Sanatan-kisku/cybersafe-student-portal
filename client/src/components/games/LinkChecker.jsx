import { useState } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaLink,
  FaGlobe,
  FaLock,
  FaSearch,
} from "react-icons/fa";

/* ---------------------------------------------------- */
/* Suspicious keywords */
/* ---------------------------------------------------- */

const suspiciousKeywords = [
  "login",
  "verify",
  "update",
  "secure",
  "bank",
  "paypal",
  "signin",
  "password",
  "wallet",
  "bonus",
  "claim",
  "gift",
  "otp",
  "free",
];

/* ---------------------------------------------------- */
/* URL shorteners */
/* ---------------------------------------------------- */

const shorteners = [
  "bit.ly",
  "tinyurl.com",
  "goo.gl",
  "t.co",
  "ow.ly",
  "cutt.ly",
  "is.gd",
  "rebrand.ly",
  "buff.ly",
];

/* ---------------------------------------------------- */
/* Helper Functions */
/* ---------------------------------------------------- */

function isIPAddress(hostname) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname);
}

function hasTooManyNumbers(url) {
  return (url.match(/\d/g) || []).length > 8;
}

function hasEncodedCharacters(url) {
  return url.includes("%");
}

function hasDoubleSlashAttack(url) {
  return url.replace(/^https?:\/\//, "").includes("//");
}

function getRiskLevel(percent) {
  if (percent >= 80) {
    return {
      text: "LOW",
      color: "green",
      badge: "bg-green-100 text-green-700",
      bar: "bg-green-500",
    };
  }

  if (percent >= 50) {
    return {
      text: "MEDIUM",
      color: "yellow",
      badge: "bg-yellow-100 text-yellow-700",
      bar: "bg-yellow-500",
    };
  }

  return {
    text: "HIGH",
    color: "red",
    badge: "bg-red-100 text-red-700",
    bar: "bg-red-500",
  };
}

/* ---------------------------------------------------- */
/* Component */
/* ---------------------------------------------------- */

export default function LinkChecker() {
  const [url, setUrl] = useState("");

  const [analysis, setAnalysis] = useState(null);
  const analyzeURL = () => {
    if (!url.trim()) {
      setAnalysis(null);
      return;
    }

    let parsed;

    try {
      parsed = new URL(url);
    } catch {
      setAnalysis({
        valid: false,
        error: "Invalid URL. Please enter a valid URL including https://",
      });
      return;
    }

    let score = 0;

    const checks = [];

    const recommendations = [];

    const hostname = parsed.hostname.toLowerCase();

    const path = parsed.pathname.toLowerCase();

    const full = url.toLowerCase();

    /* ------------------------------ */
    /* HTTPS */
    /* ------------------------------ */

    if (parsed.protocol === "https:") {
      score++;
      checks.push({
        title: "HTTPS Enabled",
        passed: true,
      });
    } else {
      checks.push({
        title: "HTTPS Enabled",
        passed: false,
      });

      recommendations.push(
        "Use websites protected with HTTPS."
      );
    }

    /* ------------------------------ */
    /* Domain */
    /* ------------------------------ */

    if (
      /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(hostname)
    ) {
      score++;
      checks.push({
        title: "Valid Domain",
        passed: true,
      });
    } else {
      checks.push({
        title: "Valid Domain",
        passed: false,
      });
    }

    /* ------------------------------ */
    /* IP Address */
    /* ------------------------------ */

    if (!isIPAddress(hostname)) {
      score++;
      checks.push({
        title: "Uses Domain Name",
        passed: true,
      });
    } else {
      checks.push({
        title: "Uses Domain Name",
        passed: false,
      });

      recommendations.push(
        "Avoid websites that use raw IP addresses."
      );
    }

    /* ------------------------------ */
    /* URL Shortener */
    /* ------------------------------ */

    if (
      !shorteners.some((item) =>
        hostname.includes(item)
      )
    ) {
      score++;
      checks.push({
        title: "No URL Shortener",
        passed: true,
      });
    } else {
      checks.push({
        title: "No URL Shortener",
        passed: false,
      });

      recommendations.push(
        "Be cautious with shortened URLs."
      );
    }

    /* ------------------------------ */
    /* Suspicious Keywords */
    /* ------------------------------ */

    const foundWords =
      suspiciousKeywords.filter((word) =>
        full.includes(word)
      );

    if (foundWords.length === 0) {
      score++;
      checks.push({
        title: "No Suspicious Keywords",
        passed: true,
      });
    } else {
      checks.push({
        title: "No Suspicious Keywords",
        passed: false,
      });

      recommendations.push(
        "The URL contains suspicious words such as: " +
        foundWords.join(", ")
      );
    }

    /* ------------------------------ */
    /* URL Length */
    /* ------------------------------ */

    if (url.length < 80) {
      score++;
      checks.push({
        title: "Safe URL Length",
        passed: true,
      });
    } else {
      checks.push({
        title: "Safe URL Length",
        passed: false,
      });

      recommendations.push(
        "Very long URLs can hide malicious content."
      );
    }

    /* ------------------------------ */
    /* Hyphen */
    /* ------------------------------ */

    if (!hostname.includes("-")) {
      score++;
      checks.push({
        title: "No Hyphenated Domain",
        passed: true,
      });
    } else {
      checks.push({
        title: "No Hyphenated Domain",
        passed: false,
      });
    }

    /* ------------------------------ */
    /* Encoded Characters */
    /* ------------------------------ */

    if (!hasEncodedCharacters(url)) {
      score++;
      checks.push({
        title: "No Encoded Characters",
        passed: true,
      });
    } else {
      checks.push({
        title: "No Encoded Characters",
        passed: false,
      });
    }

    /* ------------------------------ */
    /* Double Slash */
    /* ------------------------------ */

    if (!hasDoubleSlashAttack(url)) {
      score++;
      checks.push({
        title: "No Double Slash Attack",
        passed: true,
      });
    } else {
      checks.push({
        title: "No Double Slash Attack",
        passed: false,
      });
    }

    /* ------------------------------ */
    /* Too Many Numbers */
    /* ------------------------------ */

    if (!hasTooManyNumbers(url)) {
      score++;
      checks.push({
        title: "Normal Number Usage",
        passed: true,
      });
    } else {
      checks.push({
        title: "Normal Number Usage",
        passed: false,
      });
    }

    /* ------------------------------ */
    /* Subdomains */
    /* ------------------------------ */

    if (hostname.split(".").length <= 3) {
      score++;
      checks.push({
        title: "Normal Subdomains",
        passed: true,
      });
    } else {
      checks.push({
        title: "Normal Subdomains",
        passed: false,
      });
    }

    /* ------------------------------ */
    /* Query Parameters */
    /* ------------------------------ */

    if (parsed.search.length < 60) {
      score++;
      checks.push({
        title: "Safe Query Parameters",
        passed: true,
      });
    } else {
      checks.push({
        title: "Safe Query Parameters",
        passed: false,
      });
    }

    const percentage = Math.round(
      (score / checks.length) * 100
    );

    const risk = getRiskLevel(percentage);

    setAnalysis({
      valid: true,

      percentage,

      risk,

      checks,

      recommendations,

      details: {
        protocol: parsed.protocol,

        hostname,

        pathname: path || "/",

        extension:
          hostname.split(".").pop(),

        length: url.length,

        parameters:
          new URLSearchParams(
            parsed.search
          ).toString() === ""
            ? 0
            : parsed.search
              .substring(1)
              .split("&").length,
      },
    });
  };
  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl border border-slate-200">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-blue-600 p-3 text-white">
          <FaShieldAlt size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Advanced Suspicious Link Analyzer
          </h2>

          <p className="text-sm text-slate-500">
            Analyze URLs using multiple cybersecurity checks.
          </p>
        </div>

      </div>

      {/* Search Box */}

      <div className="flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <FaLink
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
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
          onClick={analyzeURL}
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
          <FaSearch />

          Analyze
        </button>

      </div>

      {/* Invalid URL */}

      {analysis && !analysis.valid && (

        <div
          className="
            mt-6
            rounded-xl
            border
            border-red-300
            bg-red-50
            p-4
            text-red-700
          "
        >
          {analysis.error}
        </div>

      )}

      {/* Result */}

      {analysis?.valid && (

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
                  Security Score
                </h3>

                <p className="text-slate-500">
                  Overall URL Safety Analysis
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
                {analysis.risk.text} RISK
              </span>

            </div>

            <div className="mt-6">

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  Score
                </span>

                <span className="font-bold text-blue-600">
                  {analysis.percentage}%
                </span>

              </div>

              <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">

                <div
                  className={`
                    h-full
                    transition-all
                    duration-700
                    ${analysis.risk.bar}
                  `}
                  style={{
                    width: `${analysis.percentage}%`,
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

                      <span className="flex items-center gap-2 text-green-600 font-semibold">

                        <FaCheckCircle />

                        Passed

                      </span>

                    ) : (

                      <span className="flex items-center gap-2 text-red-600 font-semibold">

                        <FaTimesCircle />

                        Failed

                      </span>

                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* URL Information */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

                <FaGlobe className="text-blue-600" />

                URL Information

              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Protocol
                  </span>

                  <span className="font-semibold">
                    {analysis.details.protocol}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Hostname
                  </span>

                  <span className="font-semibold break-all">
                    {analysis.details.hostname}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Path
                  </span>

                  <span className="font-semibold break-all">
                    {analysis.details.pathname}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Extension
                  </span>

                  <span className="font-semibold">
                    .{analysis.details.extension}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    URL Length
                  </span>

                  <span className="font-semibold">
                    {analysis.details.length} Characters
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Query Parameters
                  </span>

                  <span className="font-semibold">
                    {analysis.details.parameters}
                  </span>

                </div>

              </div>

            </div>

          </div>
          {/* Threat Summary */}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">

              <FaExclamationTriangle className="text-orange-500" />

              Threat Summary

            </h3>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="rounded-xl bg-blue-50 p-5 text-center">

                <h4 className="text-sm font-semibold text-slate-500">
                  Security Score
                </h4>

                <p className="mt-2 text-4xl font-bold text-blue-600">
                  {analysis.percentage}%
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
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-lg
                        bg-yellow-50
                        p-4
                      "
                    >

                      <FaExclamationTriangle
                        className="
                          mt-1
                          text-yellow-600
                        "
                      />

                      <span className="text-slate-700">
                        {item}
                      </span>

                    </li>

                  )
                )}

              </ul>

            ) : (

              <div
                className="
                  rounded-xl
                  bg-green-50
                  p-5
                  text-green-700
                  font-medium
                "
              >

                🎉 Great! No major phishing indicators were detected.
                Always verify the website before entering sensitive
                information.

              </div>

            )}

          </div>

          {/* Disclaimer */}

          <div
            className="
              mt-8
              rounded-xl
              border-l-4
              border-blue-600
              bg-blue-50
              p-5
            "
          >

            <h4 className="font-bold text-blue-700">
              Disclaimer
            </h4>

            <p className="mt-2 text-sm text-slate-600 leading-6">

              This analyzer performs heuristic checks based on common
              phishing indicators such as HTTPS usage, domain structure,
              suspicious keywords, URL length, encoding patterns, and
              other characteristics. It estimates the likelihood of risk
              but cannot guarantee whether a website is completely safe
              or malicious. Always use trusted security software and
              verify websites before sharing passwords or personal
              information.

            </p>

          </div>

        </>

      )}

    </div>

  );

}