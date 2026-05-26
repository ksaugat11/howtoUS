"use client";

import { useState } from "react";

const steps = ["Education Level", "Academic Info", "English Test", "Goals"];

export default function Onboarding() {
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 font-[family-name:var(--font-inter)]">
      
      {/* Logo */}
      <a href="/" className="mb-8 font-[family-name:var(--font-poppins)] text-2xl font-bold text-blue-600">
        HowToUS
      </a>

      {/* Progress bar */}
      <div className="mb-8 flex w-full max-w-md gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className="h-1.5 flex-1 rounded-full transition-all duration-300"
            style={{ backgroundColor: index <= currentStep ? "#2563eb" : "#e5e7eb" }}
          />
        ))}
      </div>

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-gray-100">

        {/* Step label */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
          Step {currentStep + 1} of {steps.length}
        </p>

        {/* STEP 1 - Education Level */}
        {currentStep === 0 && (
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
              What is your current education level?
            </h2>
            <p className="mb-6 text-sm text-gray-500">This helps us guide you to the right path.</p>

            <div className="flex flex-col gap-3">
              {["High School Graduate", "Currently in High School", "Undergraduate Student", "Undergraduate Graduate", "Looking for Masters", "Looking for PhD"].map((option) => (
                <button
                  key={option}
                  onClick={() => update("educationLevel", option)}
                  className="rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200"
                  style={{
                    borderColor: formData.educationLevel === option ? "#2563eb" : "#e5e7eb",
                    backgroundColor: formData.educationLevel === option ? "#eff6ff" : "white",
                    color: formData.educationLevel === option ? "#2563eb" : "#374151",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 - Academic Info */}
        {currentStep === 1 && (
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
              Tell us about your academics
            </h2>
            <p className="mb-6 text-sm text-gray-500">We use this to suggest universities that fit your profile.</p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Intended Major</label>
                <input
                  type="text"
                  placeholder="e.g. Computer Science"
                  value={formData.major}
                  onChange={(e) => update("major", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">GPA (out of 4.0)</label>
                <input
                  type="text"
                  placeholder="e.g. 3.8"
                  value={formData.gpa}
                  onChange={(e) => update("gpa", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">SAT Score (optional)</label>
                <input
                  type="text"
                  placeholder="e.g. 1350"
                  value={formData.satScore}
                  onChange={(e) => update("satScore", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 - English Test */}
        {currentStep === 2 && (
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
              English proficiency test
            </h2>
            <p className="mb-6 text-sm text-gray-500">Most US universities require an English test score.</p>

            <div className="mb-4 flex flex-col gap-3">
              {["IELTS", "TOEFL", "Duolingo English Test", "Not taken yet"].map((option) => (
                <button
                  key={option}
                  onClick={() => update("englishTest", option)}
                  className="rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200"
                  style={{
                    borderColor: formData.englishTest === option ? "#2563eb" : "#e5e7eb",
                    backgroundColor: formData.englishTest === option ? "#eff6ff" : "white",
                    color: formData.englishTest === option ? "#2563eb" : "#374151",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {formData.englishTest && formData.englishTest !== "Not taken yet" && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Your Score</label>
                <input
                  type="text"
                  placeholder={formData.englishTest === "IELTS" ? "e.g. 7.0" : "e.g. 100"}
                  value={formData.englishScore}
                  onChange={(e) => update("englishScore", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
        )}

        {/* STEP 4 - Goals */}
        {currentStep === 3 && (
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
              What are your goals?
            </h2>
            <p className="mb-6 text-sm text-gray-500">Almost done! Just a couple more things.</p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Intended Degree in the US</label>
                <select
                  value={formData.intendedDegree}
                  onChange={(e) => update("intendedDegree", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select degree</option>
                  <option value="associates">Associate's Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Intended Start Semester</label>
                <select
                  value={formData.startSemester}
                  onChange={(e) => update("startSemester", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 0 ? (
            <button
              onClick={back}
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length - 1 ? (
            <button
              onClick={next}
              disabled={currentStep === 0 && !formData.educationLevel}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => window.location.href = "/"}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Finish Setup
            </button>
          )}
        </div>

      </div>
    </main>
  );
}