"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/lib/api";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await registerUser(formData);
      if (res.access) {
        localStorage.setItem("access_token", res.access);
        localStorage.setItem("refresh_token", res.refresh);
        localStorage.setItem("user", JSON.stringify(res.user));
        router.push("/onboarding");
      } else {
        const firstError = Object.values(res)[0];
        setError(Array.isArray(firstError) ? firstError[0] as string : String(firstError));
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
          Create your account
        </h1>
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.75rem" }}>
          Start your US study journey with HowToUS.
        </p>

        {error && (
          <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#DC2626" }}>
            {error}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>First Name</label>
              <input
                type="text"
                placeholder="Saugat"
                value={formData.first_name}
                onChange={(e) => update("first_name", e.target.value)}
                style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Last Name</label>
              <input
                type="text"
                placeholder="Karki"
                value={formData.last_name}
                onChange={(e) => update("last_name", e.target.value)}
                style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Country</label>
            <select
              value={formData.country}
              onChange={(e) => update("country", e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            >
              <option value="">Select your country</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => update("password", e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.4rem" }}>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={formData.confirm_password}
              onChange={(e) => update("confirm_password", e.target.value)}
              style={{ width: "100%", padding: "0.625rem 0.875rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: "100%", padding: "0.7rem", borderRadius: "0.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: "0.875rem", fontWeight: 500, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: "0.5rem" }}
          >
            {loading ? "Creating account..." : "Create account"}
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