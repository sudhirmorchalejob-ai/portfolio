import React from "react";

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-5">
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c84b31",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h2>
        <div style={{ flex: 1, height: "1px", background: "#e5e2de" }}></div>
      </div>
      {children}
    </div>
  );
}

export default function MinimalTemplate({ data }) {
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

  const experienceLines = experience
    ? experience.split("\n").filter(Boolean)
    : [];
  const educationLines = education
    ? education.split("\n").filter(Boolean)
    : [];

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#faf9f6",
        minHeight: "100vh",
        color: "#0f0e0d",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: "#0f0e0d",
          color: "#faf9f6",
          padding: "56px 64px 48px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: "#c84b31",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Portfolio
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              {name}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#9a9590",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              {title}
            </p>
          </div>
          <div style={{ textAlign: "right", fontSize: "13px", color: "#6b6560", lineHeight: 2 }}>
            {contact.email && <div>{contact.email}</div>}
            {contact.phone && <div>{contact.phone}</div>}
            {contact.github && (
              <div>
                <a href={contact.github} style={{ color: "#c84b31" }}>
                  {contact.github.replace("https://", "")}
                </a>
              </div>
            )}
            {contact.linkedin && (
              <div>
                <a href={contact.linkedin} style={{ color: "#c84b31" }}>
                  {contact.linkedin.replace("https://", "")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Red Rule */}
      <div style={{ height: "4px", background: "#c84b31" }}></div>

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "0",
          minHeight: "80vh",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            borderRight: "1px solid #e5e2de",
            padding: "48px 40px",
            background: "#f5f3f0",
          }}
        >
          {about && (
            <Section title="About">
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "#4a4845",
                  fontWeight: 300,
                }}
              >
                {about}
              </p>
            </Section>
          )}

          {skills.length > 0 && (
            <Section title="Skills">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "12px",
                      fontFamily: "'JetBrains Mono', monospace",
                      padding: "4px 10px",
                      border: "1px solid #c84b31",
                      color: "#c84b31",
                      background: "transparent",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {educationLines.length > 0 && (
            <Section title="Education">
              {educationLines.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "#4a4845",
                    fontWeight: line.includes("@") || line.match(/^\d{4}/) ? 400 : 500,
                  }}
                >
                  {line}
                </p>
              ))}
            </Section>
          )}
        </div>

        {/* Right Column */}
        <div style={{ padding: "48px 56px" }}>
          {experienceLines.length > 0 && (
            <Section title="Experience">
              <div style={{ space: "16px" }}>
                {experienceLines.map((line, i) => {
                  const isRole = line.includes("@") || line.includes("•");
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "16px",
                        marginBottom: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: isRole ? "#c84b31" : "#ddd",
                          marginTop: "6px",
                          flexShrink: 0,
                        }}
                      ></div>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: isRole ? "#0f0e0d" : "#6b6560",
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
            </Section>
          )}

          {projects.length > 0 && (
            <Section title="Projects">
              <div style={{ display: "grid", gap: "16px" }}>
                {projects.map((proj, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: "2px solid #c84b31",
                      paddingLeft: "16px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "17px",
                        fontWeight: 700,
                        marginBottom: "4px",
                        color: "#0f0e0d",
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#6b6560",
                        margin: 0,
                      }}
                    >
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #e5e2de",
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
            color: "#9a9590",
          }}
        >
          {name} · Portfolio
        </span>
        {contact.website && (
          <a
            href={contact.website}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#c84b31",
            }}
          >
            {contact.website.replace("https://", "")}
          </a>
        )}
      </div>
    </div>
  );
}