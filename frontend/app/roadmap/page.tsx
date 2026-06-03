import Navbar from "@/components/Navbar";

const steps = [
  {
    number: 1,
    title: "Research Universities",
    description: "Find universities that match your major, budget, and academic profile. Look at ranking, location, tuition, and admission requirements.",
    tags: ["GPA", "SAT/ACT", "Tuition", "Location"],
    icon: "🎓",
  },
  {
    number: 2,
    title: "Prepare Your Documents",
    description: "Gather all required documents including transcripts, recommendation letters, personal statement, and English test scores.",
    tags: ["Transcripts", "LOR", "SOP", "IELTS/TOEFL"],
    icon: "📄",
  },
  {
    number: 3,
    title: "Apply to Universities",
    description: "Submit your applications through the Common App or university portals. Pay close attention to deadlines — missing one can cost you a full year.",
    tags: ["Common App", "Deadlines", "Application Fee"],
    icon: "📝",
  },
  {
    number: 4,
    title: "Receive Your I-20",
    description: "Once accepted, the university will send you an I-20 form. This is the most important document for your F-1 visa — keep it safe.",
    tags: ["Acceptance Letter", "I-20", "SEVIS ID"],
    icon: "📬",
  },
  {
    number: 5,
    title: "Pay the SEVIS Fee",
    description: "Pay the I-901 SEVIS fee of $350 at fmjfee.com before your visa interview. Save the receipt — you will need it at the embassy.",
    tags: ["I-901", "$350", "fmjfee.com"],
    icon: "💳",
  },
  {
    number: 6,
    title: "Fill Out DS-160",
    description: "Complete the DS-160 online visa application form at ceac.state.gov. Be honest and accurate — every detail matters.",
    tags: ["DS-160", "ceac.state.gov", "Photo"],
    icon: "🖊️",
  },
  {
    number: 7,
    title: "Schedule Visa Interview",
    description: "Book your F-1 visa interview at the nearest US Embassy or Consulate. Book early — slots fill up fast in peak seasons.",
    tags: ["Embassy", "Interview Date", "MRV Fee"],
    icon: "📅",
  },
  {
    number: 8,
    title: "Attend Visa Interview",
    description: "Go to your interview prepared and confident. Dress professionally, answer clearly and honestly. Most F-1 interviews are under 5 minutes.",
    tags: ["Confidence", "Documents", "Dress Code"],
    icon: "✈️",
  },
];

export default function Roadmap() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <Navbar />

      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "4rem 2rem 6rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>
          The journey
        </p>
        <h1
          className="font-serif"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem", lineHeight: 1.15 }}
        >
          Your F-1 Visa Roadmap
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", marginBottom: "3.5rem", lineHeight: 1.6 }}>
          Eight steps, explained like a friend would — not a government website.
        </p>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, index) => (
            <div key={step.number} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Connector line */}
              {index !== 0 && (
                <div style={{ width: "2px", height: "2rem", backgroundColor: "var(--border)" }} />
              )}

              {/* Card */}
              <div
                style={{
                  width: "100%",
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1.25rem",
                }}
              >
                {/* Left: number + icon */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      height: "2.75rem",
                      width: "2.75rem",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {step.number}
                  </div>
                  <span style={{ fontSize: "1.5rem" }}>{step.icon}</span>
                </div>

                {/* Right: content */}
                <div style={{ flex: 1 }}>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.4rem" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    {step.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: "#FEF3C7",
                          color: "#92400E",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Final destination */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "2px", height: "2rem", backgroundColor: "var(--border)" }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                backgroundColor: "#15803D",
                color: "white",
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                boxShadow: "0 4px 12px rgba(21,128,61,0.25)",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>🇺🇸</span>
              <span className="font-serif" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                Celebrations!
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}