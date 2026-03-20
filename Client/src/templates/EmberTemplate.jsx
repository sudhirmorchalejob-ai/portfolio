import React from "react";

function EmberSection({ title, children }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
        <div style={{ width: "4px", height: "28px", background: "linear-gradient(180deg, #ff4d00, #ff9a3c)", borderRadius: "2px" }} />
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: "600", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,154,60,0.7)", margin: 0 }}>
          {title}
        </h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(255,77,0,0.3), transparent)" }} />
      </div>
      {children}
    </div>
  );
}

function EmberProjectCard({ proj, index }) {
  const colors = ["#ff4d00", "#ff6b1a", "#ff8533", "#ff9a4c"];
  const c = colors[index % colors.length];

  return (
    <div style={{
      background: "rgba(255,77,0,0.04)",
      border: "1px solid rgba(255,77,0,0.12)",
      borderRadius: "8px",
      padding: "22px 24px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.3s",
    }}>
      {/* Number watermark */}
      <div style={{
        position: "absolute",
        right: "16px", top: "12px",
        fontFamily: "'Syne', sans-serif",
        fontSize: "48px",
        fontWeight: "800",
        color: `${c}08`,
        lineHeight: 1,
        letterSpacing: "-0.04em",
        userSelect: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "17px", fontWeight: "700", color: "#1a0800", letterSpacing: "-0.01em", marginBottom: "8px" }}>
        {proj.title}
      </h3>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", lineHeight: "1.7", color: "rgba(26,8,0,0.55)", margin: 0 }}>
        {proj.description}
      </p>

      {/* Bottom accent */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${c}, transparent)`, opacity: 0.6 }} />
    </div>
  );
}

export default function EmberTemplate({ data }) {
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
      background: "#fdf8f4",
      minHeight: "100vh",
      color: "#1a0800",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* HERO — full bleed dark */}
      <div style={{
        background: "linear-gradient(135deg, #0a0402 0%, #1a0800 50%, #0f0400 100%)",
        padding: "64px 64px 56px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Ember glow orbs */}
        <div style={{ position: "absolute", top: "-40%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,77,0,0.2) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-30%", left: "20%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,154,60,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

        {/* Top gradient bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #ff4d00, #ff9a3c, #ffcc80, #ff9a3c, #ff4d00)" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <div style={{ flex: 1, minWidth: "280px" }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg, #ff4d00, #ff9a3c)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.25em", color: "rgba(255,154,60,0.7)", textTransform: "uppercase" }}>
                Portfolio
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(50px, 7.5vw, 96px)",
              fontWeight: "800",
              lineHeight: "0.88",
              letterSpacing: "-0.04em",
              marginBottom: "20px",
            }}>
              <span style={{ display: "block", background: "linear-gradient(135deg, #fff5ee 0%, rgba(255,245,238,0.75) 60%, #ff9a3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {name.split(" ")[0]}
              </span>
              <span style={{ display: "block", background: "linear-gradient(135deg, #ff4d00 0%, #ff9a3c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Title */}
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "17px", fontWeight: "300", color: "rgba(255,245,238,0.5)", letterSpacing: "0.04em" }}>
              {title}
            </p>
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { icon: "→", val: contact.email, href: `mailto:${contact.email}` },
              { icon: "→", val: contact.phone },
              { icon: "→", val: contact.github?.replace("https://",""), href: contact.github },
              { icon: "→", val: contact.linkedin?.replace("https://",""), href: contact.linkedin },
              { icon: "→", val: contact.website?.replace("https://",""), href: contact.website },
            ].filter(c => c.val).map((c, i) => (
              <a key={i} href={c.href || "#"} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,245,238,0.35)", textDecoration: "none", transition: "color 0.2s" }}>
                <span style={{ color: "#ff4d00", fontSize: "14px" }}>{c.icon}</span>
                {c.val.length > 32 ? c.val.substring(0, 30) + "…" : c.val}
              </a>
            ))}
          </div>
        </div>

        {/* About — in hero */}
        {about && (
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", lineHeight: "1.8", color: "rgba(255,245,238,0.4)", maxWidth: "600px", marginTop: "32px", fontWeight: "300", position: "relative", zIndex: 1 }}>
            {about}
          </p>
        )}
      </div>

      {/* BODY */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr" }}>

        {/* LEFT */}
        <div style={{ padding: "48px 40px", borderRight: "1px solid rgba(26,8,0,0.08)" }}>

          {/* Skills */}
          {skills.length > 0 && (
            <EmberSection title="Skills & Tools">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skills.map((s, i) => (
                  <span key={i} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    padding: "5px 12px",
                    background: "rgba(255,77,0,0.06)",
                    border: "1px solid rgba(255,77,0,0.18)",
                    color: "rgba(255,77,0,0.8)",
                    borderRadius: "3px",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </EmberSection>
          )}

          {/* Experience */}
          {expLines.length > 0 && (
            <EmberSection title="Experience">
              {expLines.map((line, i) => {
                const isRole = line.includes("@");
                return (
                  <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "12px", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, marginTop: "6px" }}>
                      <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: isRole ? "#ff4d00" : "rgba(255,77,0,0.15)", boxShadow: isRole ? "0 0 6px rgba(255,77,0,0.6)" : "none" }} />
                    </div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", lineHeight: "1.7", color: isRole ? "#1a0800" : "rgba(26,8,0,0.45)", fontWeight: isRole ? "600" : "400", margin: 0 }}>
                      {line}
                    </p>
                  </div>
                );
              })}
            </EmberSection>
          )}

          {/* Education */}
          {eduLines.length > 0 && (
            <EmberSection title="Education">
              {eduLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: "16px", borderLeft: "2px solid rgba(255,77,0,0.2)", marginBottom: "10px" }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", lineHeight: "1.7", color: i === 0 ? "#1a0800" : "rgba(26,8,0,0.5)", fontWeight: i === 0 ? "600" : "400", margin: 0 }}>
                    {line}
                  </p>
                </div>
              ))}
            </EmberSection>
          )}
        </div>

        {/* RIGHT */}
        <div style={{ padding: "48px 48px 48px 48px" }}>
          {projects.length > 0 && (
            <EmberSection title="Projects">
              <div style={{ display: "grid", gap: "14px" }}>
                {projects.map((p, i) => (
                  <EmberProjectCard key={i} proj={p} index={i} />
                ))}
              </div>
            </EmberSection>
          )}

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(255,77,0,0.1)", border: "1px solid rgba(255,77,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
            {[
              { n: projects.length || 0, l: "Projects" },
              { n: skills.length || 0, l: "Technologies" },
              { n: (() => { const m = experience?.match(/\((\d{4})/); return m ? `${new Date().getFullYear() - parseInt(m[1])}+` : "5+"; })(), l: "Years" },
            ].map((m, i) => (
              <div key={i} style={{ background: "#fdf8f4", padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "32px", fontWeight: "800", color: "#ff4d00", lineHeight: 1, marginBottom: "6px" }}>
                  {m.n}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(26,8,0,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "3px solid", borderImage: "linear-gradient(90deg, #ff4d00, #ff9a3c, #ffcc80) 1", padding: "20px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0a0402" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "14px", fontWeight: "700", background: "linear-gradient(90deg, #ff4d00, #ff9a3c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "-0.01em" }}>
          {name}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,245,238,0.2)", letterSpacing: "0.15em" }}>
          {new Date().getFullYear()} · EMBER PORTFOLIO
        </span>
      </div>
    </div>
  );
}