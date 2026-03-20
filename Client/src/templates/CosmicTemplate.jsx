import React from "react";

function GlassCard({ children, style = {}, accentColor = "#7b2fff" }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(20px)",
      borderRadius: "12px",
      padding: "28px",
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)`,
      }} />
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
      <div style={{ width: "16px", height: "1px", background: "linear-gradient(90deg, #7b2fff, #00f5d4)" }} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: "#00f5d4",
        opacity: 0.7,
      }}>
        {children}
      </span>
    </div>
  );
}

function SkillBadge({ skill }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "4px 12px",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "11px",
      letterSpacing: "0.03em",
      border: "1px solid rgba(123,47,255,0.35)",
      background: "rgba(123,47,255,0.08)",
      color: "rgba(123,47,255,0.9)",
      borderRadius: "3px",
      margin: "3px",
      transition: "all 0.2s",
    }}>
      {skill}
    </span>
  );
}

function ProjectCard({ proj, index }) {
  return (
    <div style={{
      background: "rgba(123,47,255,0.04)",
      border: "1px solid rgba(123,47,255,0.15)",
      borderRadius: "10px",
      padding: "20px 22px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.3s",
    }}>
      <div style={{
        position: "absolute",
        top: 0, left: 0, bottom: 0,
        width: "3px",
        background: "linear-gradient(180deg, #7b2fff, #00f5d4)",
      }} />
      <div style={{ paddingLeft: "12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            color: "#fffae6",
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            {proj.title}
          </h3>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "rgba(0,245,212,0.5)",
            border: "1px solid rgba(0,245,212,0.2)",
            padding: "2px 8px",
            borderRadius: "3px",
            flexShrink: 0,
            marginLeft: "12px",
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "13px",
          lineHeight: "1.7",
          color: "rgba(255,250,230,0.45)",
          margin: 0,
        }}>
          {proj.description}
        </p>
      </div>
    </div>
  );
}

export default function CosmicTemplate({ data }) {
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

  const expLines = experience ? experience.split("\n").filter(Boolean) : [];
  const eduLines = education ? education.split("\n").filter(Boolean) : [];

  return (
    <div style={{
      fontFamily: "'Outfit', sans-serif",
      background: "#03020a",
      minHeight: "100vh",
      color: "#fffae6",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Animated background orbs */}
      <div style={{
        position: "absolute", top: "-15%", right: "-10%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-10%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", right: "20%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Noise texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        pointerEvents: "none",
        opacity: 0.5,
      }} />

      {/* HERO SECTION */}
      <div style={{
        padding: "64px 64px 48px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
      }}>
        {/* Top grid lines decoration */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(123,47,255,0.4), rgba(0,245,212,0.4), transparent)" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            {/* Status badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", border: "1px solid rgba(0,245,212,0.25)", borderRadius: "20px", marginBottom: "24px", background: "rgba(0,245,212,0.04)" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00f5d4", boxShadow: "0 0 8px #00f5d4, 0 0 16px rgba(0,245,212,0.5)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#00f5d4", letterSpacing: "0.12em" }}>Open to opportunities</span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: "800",
              lineHeight: "0.9",
              letterSpacing: "-0.04em",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #fffae6 0%, rgba(255,250,230,0.7) 40%, #a78bfa 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {name}
            </h1>

            {/* Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "24px", height: "2px", background: "linear-gradient(90deg, #7b2fff, #00f5d4)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: "300", color: "#7b2fff", letterSpacing: "0.08em" }}>
                {title}
              </span>
            </div>

            {/* About */}
            {about && (
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: "1.8", color: "rgba(255,250,230,0.45)", maxWidth: "540px", fontWeight: "300" }}>
                {about}
              </p>
            )}
          </div>

          {/* Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
            {[
              { icon: "✉", val: contact.email, href: `mailto:${contact.email}` },
              { icon: "◉", val: contact.phone },
              { icon: "⬡", val: contact.linkedin?.replace("https://",""), href: contact.linkedin },
              { icon: "◈", val: contact.github?.replace("https://",""), href: contact.github },
              { icon: "◎", val: contact.website?.replace("https://",""), href: contact.website },
            ].filter(c => c.val).map((c, i) => (
              <a
                key={i}
                href={c.href || "#"}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                  color: "rgba(255,250,230,0.4)", textDecoration: "none",
                  padding: "6px 12px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#7b2fff", fontSize: "13px" }}>{c.icon}</span>
                {c.val.length > 30 ? c.val.substring(0, 28) + "…" : c.val}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN BODY */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", minHeight: "70vh" }}>

        {/* LEFT COLUMN */}
        <div style={{ borderRight: "1px solid rgba(255,255,255,0.04)", padding: "48px 40px" }}>

          {/* Skills */}
          {skills.length > 0 && (
            <div style={{ marginBottom: "44px" }}>
              <SectionLabel>Tech Stack</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", margin: "-3px" }}>
                {skills.map((s, i) => <SkillBadge key={i} skill={s} />)}
              </div>
            </div>
          )}

          {/* Education */}
          {eduLines.length > 0 && (
            <div style={{ marginBottom: "44px" }}>
              <SectionLabel>Education</SectionLabel>
              <div style={{ position: "relative", paddingLeft: "20px" }}>
                <div style={{ position: "absolute", left: 0, top: "4px", bottom: "4px", width: "1px", background: "linear-gradient(180deg, #7b2fff, transparent)" }} />
                {eduLines.map((line, i) => (
                  <div key={i} style={{ marginBottom: "8px", position: "relative" }}>
                    {i === 0 && <div style={{ position: "absolute", left: "-23px", top: "6px", width: "7px", height: "7px", borderRadius: "50%", background: "#7b2fff", boxShadow: "0 0 8px #7b2fff" }} />}
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", lineHeight: "1.7", color: i === 0 || line.includes("—") || line.includes("B.") || line.includes("M.") ? "rgba(255,250,230,0.8)" : "rgba(255,250,230,0.4)", margin: 0, fontWeight: i === 0 ? "500" : "400" }}>
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {expLines.length > 0 && (
            <div>
              <SectionLabel>Experience</SectionLabel>
              <div style={{ position: "relative", paddingLeft: "20px" }}>
                <div style={{ position: "absolute", left: 0, top: "4px", bottom: "4px", width: "1px", background: "linear-gradient(180deg, #00f5d4, transparent)" }} />
                {expLines.map((line, i) => {
                  const isRole = line.includes("@");
                  return (
                    <div key={i} style={{ marginBottom: "10px", position: "relative" }}>
                      {isRole && (
                        <div style={{ position: "absolute", left: "-23px", top: "6px", width: "7px", height: "7px", borderRadius: "50%", background: "#00f5d4", boxShadow: "0 0 8px #00f5d4" }} />
                      )}
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "13px", lineHeight: "1.7", margin: 0,
                        color: isRole ? "rgba(255,250,230,0.85)" : "rgba(255,250,230,0.35)",
                        fontWeight: isRole ? "500" : "400",
                      }}>
                        {line}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ padding: "48px 48px 48px 56px" }}>
          {projects.length > 0 && (
            <div>
              <SectionLabel>Featured Projects</SectionLabel>
              <div style={{ display: "grid", gap: "16px" }}>
                {projects.map((proj, i) => (
                  <ProjectCard key={i} proj={proj} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* Stats row */}
          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { label: "Projects", value: projects.length || "—" },
              { label: "Skills", value: skills.length || "—" },
              { label: "Years Exp.", value: (() => {
                const match = experience?.match(/\((\d{4})/);
                return match ? `${new Date().getFullYear() - parseInt(match[1])}+` : "—";
              })() },
            ].map((s, i) => (
              <GlassCard key={i} style={{ padding: "20px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: "800", background: "linear-gradient(135deg, #7b2fff, #00f5d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "4px" }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,250,230,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "20px 64px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "20px", height: "20px", background: "linear-gradient(135deg, #7b2fff, #00f5d4)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,250,230,0.2)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {name} · Cosmic Portfolio
          </span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,250,230,0.15)", letterSpacing: "0.1em" }}>
          {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}