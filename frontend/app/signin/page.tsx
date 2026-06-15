"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/lib/api";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      if (res.access) {
        localStorage.setItem("access_token", res.access);
        localStorage.setItem("refresh_token", res.refresh);
        localStorage.setItem("user", JSON.stringify(res.user));
        router.push("/");
      } else {
        setError(res.error || "Invalid email or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>

      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "2.5rem" }}>
        <span style={{ height: "2rem", width: "2rem", display: "grid", placeItems: "center", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "1rem" }}>
          🧭
        </span>
        <span className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)" }}>
          HowTo<span style={{ color: "var(--accent)" }}>US</span>
        </span>
      </Link>

      <div style={{ width: "100%", maxWidth: "24rem", backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "2rem" }}>
        <h1 className="font-serif" style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem" }}>
          Welcome back
        </h1>
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.75rem" }}>
          Sign in to continue your F-1 journey.
        </p>

        {error && (
          <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#DC2626" }}>
            {error}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>Password</label>
              <a href="#" style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", textDecoration: "none" }}>Forgot password?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: "100%", padding: "0.7rem", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "0.875rem", fontWeight: 500, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: "0.5rem" }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          Don't have an account?{" "}
          <Link href="/signup" style={{ color: "var(--primary)", fontWeight: 500, textDecoration: "none" }}>
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
}