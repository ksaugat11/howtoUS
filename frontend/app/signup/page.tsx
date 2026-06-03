"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>

      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "2.5rem" }}>
        <span style={{ height: "2rem", width: "2rem", display: "grid", placeItems: "center", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "1rem" }}>
          🧭
        </span>
        <span className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)" }}>
          HowTo<span style={{ color: "var(--accent)" }}>US</span>
        </span>
      </Link>

      {/* Card */}
      <div style={{ width: "100%", maxWidth: "24rem", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "2rem" }}>
        <h1 className="font-serif" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem" }}>
          Create your account
        </h1>
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.75rem" }}>
          Start your US study journey with HowToUS.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Country</label>
            <select
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            >
              <option value="">Select your country</option>
              <option value="np">Nepal</option>
              <option value="in">India</option>
              <option value="bd">Bangladesh</option>
              <option value="pk">Pakistan</option>
              <option value="lk">Sri Lanka</option>
              <option value="ng">Nigeria</option>
              <option value="gh">Ghana</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <button
            onClick={() => router.push("/onboarding")}
            style={{ width: "100%", padding: "0.7rem", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "0.875rem", fontWeight: 500, border: "none", cursor: "pointer", marginTop: "0.5rem" }}
          >
            Create account
          </button>
        </div>

        <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          Already have an account?{" "}
          <Link href="/signin" style={{ color: "var(--primary)", fontWeight: 500, textDecoration: "none" }}>
            Sign in
          </Link>
        </p>
      </div>

    </div>
  );
}