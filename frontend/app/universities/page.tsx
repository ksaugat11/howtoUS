"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const universities = [
  {
    name: "University of Louisiana at Monroe",
    shortName: "ULM",
    location: "Monroe, LA",
    tuition: "$23,000",
    intl: "4.4%",
    acceptance: "74.55",
    tags: ["CS", "Nursing", "Affordable"],
    type: "Public",
    image : "/assets/lib4college.jpg",
  },
  {
    name: "University of Texas at Arlington",
    shortName: "UTA",
    location: "Arlington, TX",
    tuition: "$25k",
    intl: "14%",
    acceptance: "81%",
    tags: ["Engineering", "Business", "Public"],
    type: "Public",
    gradient: "linear-gradient(135deg, #dbeafe, #93c5fd)",
  },
  {
    name: "Arizona State University",
    shortName: "ASU",
    location: "Tempe, AZ",
    tuition: "$32k",
    intl: "11%",
    acceptance: "88%",
    tags: ["Business", "CS", "Large"],
    type: "Public",
    gradient: "linear-gradient(135deg, #fef3c7, #fcd34d)",
  },
  {
    name: "University of Central Missouri",
    shortName: "UCM",
    location: "Warrensburg, MO",
    tuition: "$16k",
    intl: "6%",
    acceptance: "72%",
    tags: ["Aviation", "Affordable", "CS"],
    type: "Public",
    gradient: "linear-gradient(135deg, #ede9fe, #c4b5fd)",
  },
  {
    name: "Purdue University",
    shortName: "Purdue",
    location: "West Lafayette, IN",
    tuition: "$28k",
    intl: "22%",
    acceptance: "67%",
    tags: ["Engineering", "CS", "Research"],
    type: "Public",
    gradient: "linear-gradient(135deg, #fce7f3, #f9a8d4)",
  },
  {
    name: "University of Illinois Chicago",
    shortName: "UIC",
    location: "Chicago, IL",
    tuition: "$22k",
    intl: "18%",
    acceptance: "79%",
    tags: ["CS", "Medicine", "City"],
    type: "Public",
    gradient: "linear-gradient(135deg, #ffedd5, #fdba74)",
  },
];

const allTags = ["All", "CS", "Engineering", "Business", "Affordable", "Public", "Research"];

export default function Universities() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered = universities.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.location.toLowerCase().includes(search.toLowerCase());
    const matchesTag =
      selectedTag === "All" || u.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <Navbar />

      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 2rem 6rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.75rem" }}>
          Universities
        </p>
        <h1
          className="font-serif"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem", lineHeight: 1.1 }}
        >
          Find a place that feels like home.
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "36rem" }}>
          Hand-picked US schools, with the things international students quietly wonder about — cost, acceptance, vibe.
        </p>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <span style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", fontSize: "1rem" }}>
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by name, city, or state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "0.875rem 1rem 0.875rem 2.5rem", borderRadius: "0.625rem", border: "1px solid var(--border)", backgroundColor: "var(--card)", color: "var(--foreground)", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
          />
        </div>

        {/* Filter tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1px solid var(--border)",
                backgroundColor: selectedTag === tag ? "var(--accent)" : "var(--card)",
                color: selectedTag === tag ? "white" : "var(--foreground)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
          Showing {filtered.length} of {universities.length} universities
        </p>

        {/* University cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((uni) => (
            <div
              key={uni.name}
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.875rem", overflow: "hidden" }}
            >
              {/* Gradient header — image goes here later */}
              <div
                style={{
                  height: "9rem",
                  background: uni.image ? `url(${uni.image}) center/cover no-repeat` : uni.gradient,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "0.875rem",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.5)", backgroundColor: "rgba(255,255,255,0.6)", padding: "0.2rem 0.6rem", borderRadius: "9999px", backdropFilter: "blur(4px)" }}>
                  📍 {uni.location}
                </span>
              </div>

              {/* Card content */}
              <div style={{ padding: "1.25rem" }}>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.25rem" }}
                >
                  {uni.name}
                </h3>

                {/* Stats row */}
                <div style={{ display: "flex", gap: "1.25rem", margin: "1rem 0", paddingBottom: "1rem", borderBottom: "1px solid var(--border)" }}>
                  {[
                    { label: "Tuition", value: uni.tuition },
                    { label: "Intl.", value: uni.intl },
                    { label: "Accept", value: uni.acceptance },
                  ].map((stat) => (
                    <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--foreground)" }}>{stat.value}</span>
                      <span style={{ fontSize: "0.7rem", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {uni.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ backgroundColor: "#FEF3C7", color: "#92400E", padding: "0.2rem 0.6rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <p style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔍</p>
            <p style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "0.25rem" }}>No universities found</p>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Try adjusting your search or filters</p>
          </div>
        )}

      </div>
    </div>
  );
}