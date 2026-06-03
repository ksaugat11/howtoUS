"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const steps = ["Education Level", "Academic Info", "English Test", "Goals"];

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    educationLevel: "",
    major: "",
    gpa: "",
    satScore: "",
    englishTest: "",
    englishScore: "",
    intendedDegree: "",
    startSemester: "",
  });

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setCurrentStep((prev) => prev + 1);
  const back = () => setCurrentStep((prev) => prev - 1);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <span style={{ height: "2rem", width: "2rem", display: "grid", placeItems: "center", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "1rem" }}>
          🧭
        </span>
        <span className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)" }}>
          HowTo<span style={{ color: "var(--accent)" }}>US</span>
        </span>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        {steps.map((_, index) => (
          <div
            key={index}
            style={{
              height: "0.5rem",
              width: index === currentStep ? "2rem" : "0.5rem",
              borderRadius: "9999px",
              backgroundColor: index <= currentStep ? "var(--primary)" : "var(--border)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div style={{ width: "100%", maxWidth: "26rem", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "2rem" }}>

        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
          Step {currentStep + 1} of {steps.length}
        </p>

        {/* STEP 1 */}
        {currentStep === 0 && (
          <div>
            <h2 className="font-serif" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem" }}>
              Where are you in your studies?
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              This helps us guide you to the right path.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                "Currently in High School",
                "High School Graduate",
                "Undergraduate Student",
                "Undergraduate Graduate",
                "Looking for Masters",
                "Looking for PhD",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => update("educationLevel", option)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `1px solid ${formData.educationLevel === option ? "var(--primary)" : "var(--border)"}`,
                    backgroundColor: formData.educationLevel === option ? "#F0FDF4" : "transparent",
                    color: formData.educationLevel === option ? "var(--primary)" : "var(--foreground)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 1 && (
          <div>
            <h2 className="font-serif" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem" }}>
              Tell us about your academics
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              We use this to suggest universities that fit your profile.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Intended Major", field: "major", placeholder: "e.g. Computer Science" },
                { label: "GPA (out of 4.0)", field: "gpa", placeholder: "e.g. 3.8" },
                { label: "SAT Score (optional)", field: "satScore", placeholder: "e.g. 1350" },
              ].map((input) => (
                <div key={input.field}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>
                    {input.label}
                  </label>
                  <input
                    type="text"
                    placeholder={input.placeholder}
                    value={formData[input.field as keyof typeof formData]}
                    onChange={(e) => update(input.field, e.target.value)}
                    style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 2 && (
          <div>
            <h2 className="font-serif" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem" }}>
              English proficiency
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              Most US universities require an English test score.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1rem" }}>
              {["IELTS", "TOEFL", "Duolingo English Test", "Not taken yet"].map((option) => (
                <button
                  key={option}
                  onClick={() => update("englishTest", option)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: `1px solid ${formData.englishTest === option ? "var(--primary)" : "var(--border)"}`,
                    backgroundColor: formData.englishTest === option ? "#F0FDF4" : "transparent",
                    color: formData.englishTest === option ? "var(--primary)" : "var(--foreground)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            {formData.englishTest && formData.englishTest !== "Not taken yet" && (
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>
                  Your Score
                </label>
                <input
                  type="text"
                  placeholder={formData.englishTest === "IELTS" ? "e.g. 7.0" : "e.g. 100"}
                  value={formData.englishScore}
                  onChange={(e) => update("englishScore", e.target.value)}
                  style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>
            )}
          </div>
        )}

        {/* STEP 4 */}
        {currentStep === 3 && (
          <div>
            <h2 className="font-serif" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem" }}>
              Almost there
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              Just a couple more things to personalize your roadmap.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>
                  Intended Degree in the US
                </label>
                <select
                  value={formData.intendedDegree}
                  onChange={(e) => update("intendedDegree", e.target.value)}
                  style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                >
                  <option value="">Select degree</option>
                  <option value="associates">Associate's Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>
                  Intended Start Semester
                </label>
                <select
                  value={formData.startSemester}
                  onChange={(e) => update("startSemester", e.target.value)}
                  style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                >
                  <option value="">Select semester</option>
                  <option value="fall2025">Fall 2025</option>
                  <option value="spring2026">Spring 2026</option>
                  <option value="fall2026">Fall 2026</option>
                  <option value="spring2027">Spring 2027</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
          {currentStep > 0 ? (
            <button
              onClick={back}
              style={{ padding: "0.625rem 1.25rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "transparent", color: "var(--foreground)", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer" }}
            >
              Back
            </button>
          ) : <div />}

          {currentStep < steps.length - 1 ? (
            <button
              onClick={next}
              disabled={currentStep === 0 && !formData.educationLevel}
              style={{ padding: "0.625rem 1.25rem", borderRadius: "0.5rem", border: "none", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", opacity: currentStep === 0 && !formData.educationLevel ? 0.4 : 1 }}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => router.push("/")}
              style={{ padding: "0.625rem 1.25rem", borderRadius: "0.5rem", border: "none", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer" }}
            >
              Finish setup →
            </button>
          )}
        </div>

      </div>
    </div>
  );
}