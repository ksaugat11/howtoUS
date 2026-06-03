import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "var(--secondary)",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            padding: "0.25rem 0.75rem",
            fontSize: "0.8rem",
            color: "var(--muted-foreground)",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "var(--accent)", fontSize: "0.6rem" }}>●</span>
          Built by students, for students
        </div>

        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            maxWidth: "36rem",
            marginBottom: "1.5rem",
          }}
        >
          Your F-1 visa journey,{" "}
          <em style={{ color: "var(--primary)", fontStyle: "italic" }}>
            guided like a friend would.
          </em>
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--muted-foreground)",
            maxWidth: "32rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          HowToUS is a warm, step-by-step companion for international students
          applying to study in the United States — from picking a university to
          getting the F1 Visa in the hand
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link
            href="/onboarding"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Start my journey →
          </Link>
          <Link
            href="/roadmap"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "var(--foreground)",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid var(--border)",
            }}
          >
            See the roadmap
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {[
           
            { number: "200+", label: "universities indexed" },
            { number: "8", label: "steps to your F-1 visa" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--foreground)" }}>
                {stat.number}
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's inside */}
      <section style={{ backgroundColor: "var(--secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>
            What's inside
          </p>
          <h2 className="font-serif" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "3rem", maxWidth: "28rem", lineHeight: 1.2 }}>
            A handbook that feels handwritten.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🗺️", title: "A roadmap, not a checklist", desc: "Each step explained in plain language — why it matters, when to do it, what comes next." },
              { icon: "🎓", title: "University guidance", desc: "Browse and shortlist programs with the things that actually matter to international students." },
              { icon: "🖊️", title: "Visa, demystified", desc: "I-20, DS-160, SEVIS, interview prep — translated from government-speak into human." },
              { icon: "✈️", title: "After the visa", desc: "What to expect after approval — packing, arrival tips, and settling into campus life." },            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.75rem" }}>{item.icon}</span>
                <h3 className="font-serif" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "3rem" }}>
          How it works
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          {[
            { number: "01", title: "Tell us about you", desc: "A quick, friendly intake — country, field of study, target intake, budget vibe." },
            { number: "02", title: "Get your personal roadmap", desc: "We sequence the whole journey by date, so you always know what's next." },
            { number: "03", title: "Move through it, together", desc: "Check things off, learn at each step, and arrive on US soil feeling ready." },
          ].map((step) => (
            <div key={step.number}>
              <p className="font-serif" style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--border)", marginBottom: "1rem" }}>
                {step.number}
              </p>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial + CTA */}
      <section style={{ backgroundColor: "var(--secondary)", borderTop: "1px solid var(--border)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "40rem", margin: "0 auto", textAlign: "center" }}>
          <blockquote
            className="font-serif"
            style={{ fontSize: "1.25rem", fontStyle: "italic", color: "var(--foreground)", lineHeight: 1.7, marginBottom: "1rem" }}
          >
            "I wish I'd had this when I applied. It's the older sibling I didn't have — patient, honest, and never makes you feel stupid for asking."
          </blockquote>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "3rem" }}>
            — Ananya, MS Computer Science, fall intake
          </p>

          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
            Free to start. No credit card.
          </p>
          <Link
            href="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Create your account →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--secondary)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "20rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ height: "2rem", width: "2rem", display: "grid", placeItems: "center", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "1rem" }}>
                  🧭
                </span>
                <span className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                  HowTo<span style={{ color: "var(--accent)" }}>US</span>
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                A quiet, considered guide for the F-1 visa journey — from application to approval, and a little beyond.
              </p>
            </div>

            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", fontSize: "0.875rem" }}>
              {[
                { href: "/roadmap", label: "Roadmap" },
                { href: "/checklist", label: "Checklist" },
                { href: "/universities", label: "Universities" },
                { href: "/signin", label: "Sign in" },
                { href: "/signup", label: "Sign up" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "2.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
              © 2026 HowToUS. Made with care for students far from home.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}