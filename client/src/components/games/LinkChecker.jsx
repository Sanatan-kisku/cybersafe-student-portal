import { useState } from "react";

export default function LinkChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkLink = () => {
    if (!url.trim()) {
      setResult({
        safe: false,
        risk: "Unknown",
        reasons: ["Please enter a URL."],
      });
      return;
    }

    let score = 0;
    let reasons = [];

    // Validate URL
    let parsedUrl;

    try {
      parsedUrl = new URL(url);
    } catch {
      setResult({
        safe: false,
        risk: "Invalid",
        reasons: ["Invalid URL format."],
      });
      return;
    }

    // HTTPS Check
    if (parsedUrl.protocol === "https:") {
      score++;
    } else {
      reasons.push("Uses HTTP instead of HTTPS.");
    }

    // IP Address Check
    const ipRegex =
      /^(\d{1,3}\.){3}\d{1,3}$/;

    if (ipRegex.test(parsedUrl.hostname)) {
      reasons.push("Uses an IP address instead of a domain.");
    } else {
      score++;
    }

    // Suspicious Keywords
    const suspiciousWords = [
      "login",
      "verify",
      "update",
      "secure",
      "bank",
      "gift",
      "winner",
      "bonus",
      "free",
      "claim",
    ];

    const lowerUrl = url.toLowerCase();

    const foundWords = suspiciousWords.filter((word) =>
      lowerUrl.includes(word)
    );

    if (foundWords.length > 0) {
      reasons.push(
        `Contains suspicious words: ${foundWords.join(", ")}`
      );
    } else {
      score++;
    }

    // Too Long URL
    if (url.length > 100) {
      reasons.push("URL is unusually long.");
    } else {
      score++;
    }

    // Too Many Subdomains
    const dots = parsedUrl.hostname.split(".").length;

    if (dots > 4) {
      reasons.push("Contains many subdomains.");
    } else {
      score++;
    }

    let risk = "";
    let safe = false;

    if (score >= 5) {
      risk = "Low";
      safe = true;
    } else if (score >= 3) {
      risk = "Medium";
    } else {
      risk = "High";
    }

    setResult({
      safe,
      risk,
      reasons,
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-4">
        🔗 Suspicious Link Checker
      </h2>

      <input
        type="text"
        placeholder="Paste a URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-3 w-full rounded"
      />

      <button
        onClick={checkLink}
        className="mt-4 bg-green-600 text-white px-5 py-2 rounded"
      >
        Check Link
      </button>

      {result && (
        <div className="mt-5">

          <h3 className="text-xl font-bold">
            Risk Level: {result.risk}
          </h3>

          <p className="mt-2">
            {result.safe
              ? "✅ This link appears relatively safe based on basic checks."
              : "⚠️ This link may be suspicious. Review the reasons below."}
          </p>

          {result.reasons.length > 0 && (
            <ul className="list-disc ml-5 mt-3">
              {result.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          )}

        </div>
      )}

    </div>
  );
}