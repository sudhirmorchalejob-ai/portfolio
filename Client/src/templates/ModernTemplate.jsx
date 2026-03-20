import React from "react";

function GlowCard({ children, style = {} }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(124,106,247,0.2)",
        borderRadius: "12px",
        padding: "24px",
        backdropFilter: "blur(8px)",
        transition: "border-color 0.2s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
      <div
        style={{
          width: "20px",
          height: "2px",
          background: "linear-gradient(90deg, #7c6af7, #a78bfa)",
        }}
      ></div>
      <h2
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#7c6af7",
          margin: 0,
        }}
      >
        {children}
      </h2>
    </div>
  );
}

export default function ModernTemplate({ data }) {
  const {
    name = "Your Name",
    title = "Your Title",
    about = "",
    skills = [],
    projects = [],
    education = "",
    experience = "",
    contact = {},
  } = data || {};

  const experienceLines = experience ? experience.split("\n").filter(Boolean) : [];
  const educationLines = education ? education.split("\n").filter(Boolean) : [];

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#0d0d14",
        minHeight: "100vh",
        color: "#e8e6f0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,75,49,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>

      {/* Hero */}
      <div
        style={{
          padding: "80px 64px 60px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                border: "1px solid rgba(124,106,247,0.4)",
                borderRadius: "20px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                }}
              ></div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#7c6af7",
                  letterSpacing: "0.1em",
                }}
              >
                Available for work
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(44px, 7vw, 80px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
                background: "linear-gradient(135deg, #fff 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {name}
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#7c6af7",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              {title}
            </p>
          </div>

          {/* Contact Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
            {[
              { label: contact.email, href: `mailto:${contact.email}` },
              { label: contact.github?.replace("https://", ""), href: contact.github },
              { label: contact.linkedin?.replace("https://", ""), href: contact.linkedin },
              { label: contact.website?.replace("https://", ""), href: contact.website },
            ]
              .filter((c) => c.label)
              .map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "#9090b0",
                    textDecoration: "none",
                    padding: "4px 10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  {c.label}
                </a>
              ))}
          </div>
        </div>

        {about && (
          <p
            style={{
              marginTop: "32px",
              maxWidth: "640px",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#9090b0",
              fontWeight: 300,
            }}
          >
            {about}
          </p>
        )}
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
        }}
      >
        {/* Left */}
        <div style={{ padding: "48px 40px 48px 64px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          {skills.length > 0 && (
            <div style={{ marginBottom: "48px" }}>
              <SectionTitle>Skills</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      background: "rgba(124,106,247,0.12)",
                      border: "1px solid rgba(124,106,247,0.25)",
                      color: "#a78bfa",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {experienceLines.length > 0 && (
            <div style={{ marginBottom: "48px" }}>
              <SectionTitle>Experience</SectionTitle>
              <div style={{ position: "relative", paddingLeft: "20px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "6px",
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    background: "linear-gradient(180deg, #7c6af7, transparent)",
                  }}
                ></div>
                {experienceLines.map((line, i) => {
                  const isRole = line.includes("@");
                  return (
                    <div key={i} style={{ position: "relative", marginBottom: "8px" }}>
                      {isRole && (
                        <div
                          style={{
                            position: "absolute",
                            left: "-16px",
                            top: "7px",
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "#7c6af7",
                            boxShadow: "0 0 6px #7c6af7",
                          }}
                        ></div>
                      )}
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: 1.7,
                          color: isRole ? "#e8e6f0" : "#6060a0",
                          fontWeight: isRole ? 500 : 400,
                          margin: 0,
                        }}
                      >
                        {line}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {educationLines.length > 0 && (
            <div>
              <SectionTitle>Education</SectionTitle>
              {educationLines.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: line.length > 40 ? "#6060a0" : "#e8e6f0",
                    margin: "0 0 4px",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right */}
        <div style={{ padding: "48px 64px 48px 40px" }}>
          {projects.length > 0 && (
            <div>
              <SectionTitle>Projects</SectionTitle>
              <div style={{ display: "grid", gap: "16px" }}>
                {projects.map((proj, i) => (
                  <GlowCard key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#e8e6f0",
                          margin: 0,
                        }}
                      >
                        {proj.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "#7c6af7",
                          padding: "2px 8px",
                          border: "1px solid rgba(124,106,247,0.3)",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#6060a0",
                        margin: 0,
                      }}
                    >
                      {proj.description}
                    </p>
                  </GlowCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          {name} · {new Date().getFullYear()}
        </span>
        <div style={{ display: "flex", gap: "16px" }}>
          {contact.phone && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {contact.phone}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}