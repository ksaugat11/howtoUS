"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        borderBottom: "1px solid var(--border)",
        backgroundColor: "rgba(250, 250, 248, 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 2rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <span
            style={{
              height: "2rem",
              width: "2rem",
              display: "grid",
              placeItems: "center",
              borderRadius: "0.5rem",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontSize: "1rem",
            }}
          >
            🧭
          </span>
          <span
            className="font-serif"
            style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            HowTo<span style={{ color: "var(--accent)" }}>US</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {[
            { href: "/", label: "Home" },
            { href: "/roadmap", label: "Roadmap" },
            { href: "/checklist", label: "Checklist" },
            { href: "/universities", label: "Universities" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--secondary)";
                e.currentTarget.style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--muted-foreground)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link
            href="/signin"
            style={{
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--foreground)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              textDecoration: "none",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Get started
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--background)",
            padding: "0.75rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/roadmap", label: "Roadmap" },
            { href: "/checklist", label: "Checklist" },
            { href: "/universities", label: "Universities" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--foreground)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              style={{
                flex: 1,
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--border)",
                fontSize: "0.875rem",
                textAlign: "center",
                textDecoration: "none",
                color: "var(--foreground)",
              }}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              style={{
                flex: 1,
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                backgroundColor: "var(--primary)",
                fontSize: "0.875rem",
                textAlign: "center",
                textDecoration: "none",
                color: "var(--primary-foreground)",
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}