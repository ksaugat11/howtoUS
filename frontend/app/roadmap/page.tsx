"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const steps = [
  { number: 1, title: "Research Universities", description: "Find universities that match your major, budget, and academic profile.", tags: ["GPA", "SAT/ACT", "Tuition"], icon: "🎓", side: "left" },
  { number: 2, title: "Prepare Documents", description: "Gather transcripts, recommendation letters, and English test scores.", tags: ["Transcripts", "LOR", "IELTS/TOEFL"], icon: "📄", side: "right" },
  { number: 3, title: "Apply to Universities", description: "Submit applications through Common App or university portals.", tags: ["Common App", "Deadlines"], icon: "📝", side: "left" },
  { number: 4, title: "Receive Your I-20", description: "Once accepted, the university sends your I-20 document.", tags: ["I-20", "SEVIS ID"], icon: "📬", side: "right" },
  { number: 5, title: "Pay the SEVIS Fee", description: "Pay the I-901 SEVIS fee of $350 at fmjfee.com.", tags: ["I-901", "$350"], icon: "💳", side: "left" },
  { number: 6, title: "Fill Out DS-160", description: "Complete the DS-160 visa application at ceac.state.gov.", tags: ["DS-160", "Photo"], icon: "🖊️", side: "right" },
  { number: 7, title: "Schedule Interview", description: "Book your F-1 visa interview at the nearest US Embassy.", tags: ["Embassy", "MRV Fee"], icon: "📅", side: "left" },
  { number: 8, title: "Attend Visa Interview", description: "Go prepared and confident. Answer clearly and honestly.", tags: ["Confidence", "Documents"], icon: "✈️", side: "right" },
];

export default function Roadmap() {
  const [phase, setPhase] = useState<"intro" | "done">("intro");
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    steps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleNodes((prev) => [...prev, index]);
        if (index > 0) {
          setTimeout(() => {
            setVisibleLines((prev) => [...prev, index]);
          }, 200);
        }
      }, index * 500);
    });

    // Show flag after all nodes
    setTimeout(() => {
      setShowFlag(true);
    }, steps.length * 500 + 300);

    // Switch to full page
    setTimeout(() => {
      setPhase("done");
    }, steps.length * 500 + 1800);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 font-[family-name:var(--font-inter)]">
      <Navbar />

      {phase === "intro" ? (
        <section className="flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
          <p className="mb-16 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
            Your F-1 Mission
          </p>

          <div className="flex items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">

                {/* Connecting line */}
                {index !== 0 && (
                  <div
                    className="transition-all duration-300"
                    style={{
                      height: "2px",
                      width: visibleLines.includes(index) ? "80px" : "0px",
                      backgroundColor: "#3b82f6",
                      marginTop: index % 2 === 0 ? "-50px" : "50px",
                    }}
                  />
                )}

                {/* Node */}
                <div
                  className="flex flex-col items-center transition-all duration-500"
                  style={{
                    opacity: visibleNodes.includes(index) ? 1 : 0,
                    transform: visibleNodes.includes(index) ? "scale(1)" : "scale(0)",
                    marginTop: index % 2 === 0 ? "-50px" : "50px",
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  <span className="mt-1 text-lg">{step.icon}</span>
                  <p className="mt-1 max-w-16 text-center text-xs font-medium text-gray-700 leading-tight">
                    {step.title.split(" ")[0]}
                  </p>
                </div>

              </div>
            ))}

            {/* Flag */}
            {showFlag && (
              <div className="flex items-center">
                <div
                  style={{
                    height: "2px",
                    width: "60px",
                    backgroundColor: "#3b82f6",
                    marginTop: steps.length % 2 === 0 ? "-50px" : "50px",
                  }}
                />
                <div
                  className="flex flex-col items-center transition-all duration-500"
                  style={{
                    marginTop: steps.length % 2 === 0 ? "-50px" : "50px",
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg">
                    🇺🇸
                  </div>
                  <p className="mt-1 text-xs font-bold text-green-600">Done!</p>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="mx-auto w-full max-w-3xl px-6 pt-28 pb-20">
          <h1 className="mb-2 font-[family-name:var(--font-poppins)] text-4xl font-bold text-gray-900">
            F-1 Visa Roadmap
          </h1>
          <p className="mb-12 text-gray-500">
            Follow these 8 steps to go from high school graduate to F-1 student in the US.
          </p>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                {index !== 0 && <div className="h-8 w-0.5 bg-blue-200" />}
                <div className="flex w-full gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-md">
                      {step.number}
                    </div>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-[family-name:var(--font-poppins)] text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center">
              <div className="h-8 w-0.5 bg-blue-200" />
              <div className="flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg">
                <span className="text-2xl">🇺🇸</span>
                <span className="font-[family-name:var(--font-poppins)] text-lg font-bold">You're in the US!</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}