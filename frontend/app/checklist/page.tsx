"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const categories = [
  {
    title: "Academic Documents",
    icon: "🎓",
    items: [
      "High school transcripts (official copy)",
      "GPA certificate or grade report",
      "SAT/ACT score report (if applicable)",
      "Diploma or graduation certificate",
    ],
  },
  {
    title: "English Proficiency",
    icon: "🗣️",
    items: [
      "IELTS or TOEFL score report",
      "Score meets university minimum requirement",
      "Scores sent directly to universities",
    ],
  },
  {
    title: "Application Documents",
    icon: "📝",
    items: [
      "Statement of Purpose (SOP) written",
      "Letters of Recommendation (LOR) requested",
      "Resume or CV updated",
      "Application fee payment ready",
    ],
  },
  {
    title: "After Acceptance",
    icon: "📬",
    items: [
      "Acceptance letter received",
      "I-20 form received from university",
      "SEVIS ID noted from I-20",
    ],
  },
  {
    title: "SEVIS & Visa Fee",
    icon: "💳",
    items: [
      "I-901 SEVIS fee paid ($350) at fmjfee.com",
      "SEVIS fee receipt saved",
      "MRV visa application fee paid",
    ],
  },
  {
    title: "DS-160 & Interview",
    icon: "🖊️",
    items: [
      "DS-160 form completed at ceac.state.gov",
      "DS-160 confirmation page printed",
      "Visa interview scheduled at US Embassy",
      "Interview appointment letter printed",
    ],
  },
  {
    title: "Interview Day Documents",
    icon: "📁",
    items: [
      "Valid passport (6+ months validity)",
      "DS-160 confirmation page",
      "SEVIS fee receipt",
      "I-20 form",
      "Acceptance letter",
      "Financial proof (bank statement)",
      "Passport-size photos",
    ],
  },
];

export default function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = Object.values(checked).filter(Boolean).length;
  const percentage = Math.round((completedItems / totalItems) * 100);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <Navbar />

      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 2rem 6rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>
          Stay organized
        </p>
        <h1
          className="font-serif"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem", lineHeight: 1.15 }}
        >
          F-1 Document Checklist
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
          Every document you need, grouped by stage. Check things off as you go.
        </p>

        {/* Progress */}
        <div
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>
              Overall progress
            </span>
            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--primary)" }}>
              {completedItems} of {totalItems} completed
            </span>
          </div>
          <div style={{ height: "0.5rem", backgroundColor: "var(--secondary)", borderRadius: "9999px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${percentage}%`,
                backgroundColor: "var(--primary)",
                borderRadius: "9999px",
                transition: "width 0.5s ease",
              }}
            />
          </div>
          <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            {percentage === 0 && "Let's get started — check off your first item."}
            {percentage > 0 && percentage < 50 && `You're ${percentage}% of the way there — keep going!`}
            {percentage >= 50 && percentage < 100 && `Great progress — ${percentage}% done. Almost there!`}
            {percentage === 100 && "🎉 You're ready. Go get that visa!"}
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {categories.map((category) => {
            const categoryCompleted = category.items.filter(
              (item) => checked[`${category.title}-${item}`]
            ).length;

            return (
              <div
                key={category.title}
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid var(--border)",
                    backgroundColor: "var(--secondary)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{category.icon}</span>
                    <h2
                      className="font-serif"
                      style={{ fontSize: "1rem", fontWeight: 600, color: "var(--foreground)" }}
                    >
                      {category.title}
                    </h2>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
                    {categoryCompleted}/{category.items.length}
                  </span>
                </div>

                {/* Items */}
                <div>
                  {category.items.map((item, itemIndex) => {
                    const key = `${category.title}-${item}`;
                    const isDone = checked[key];

                    return (
                      <div
                        key={key}
                        onClick={() => toggle(key)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          padding: "0.875rem 1.5rem",
                          cursor: "pointer",
                          borderTop: itemIndex !== 0 ? "1px solid var(--border)" : "none",
                          backgroundColor: isDone ? "#F0FDF4" : "transparent",
                          transition: "background-color 0.2s",
                        }}
                      >
                        {/* Custom checkbox */}
                        <div
                          style={{
                            height: "1.25rem",
                            width: "1.25rem",
                            flexShrink: 0,
                            borderRadius: "9999px",
                            border: isDone ? "2px solid var(--primary)" : "2px solid var(--border)",
                            backgroundColor: isDone ? "var(--primary)" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s",
                          }}
                        >
                          {isDone && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>

                        {/* Text */}
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: isDone ? "var(--muted-foreground)" : "var(--foreground)",
                            textDecoration: isDone ? "line-through" : "none",
                            transition: "all 0.2s",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}