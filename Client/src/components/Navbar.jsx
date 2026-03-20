import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ step = 1 }) {
  const navigate = useNavigate();
  const steps = [
    { n: 1, label: "Template", path: "/" },
    { n: 2, label: "Details", path: "/input" },
    { n: 3, label: "Preview", path: "/preview" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(3,2,10,0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 32px",
      height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <button onClick={() => navigate("/")} style={{ display:"flex", alignItems:"center", gap:"10px", background:"none", border:"none", cursor:"pointer" }}>
        <div style={{
          width: "32px", height: "32px",
          background: "linear-gradient(135deg, #7b2fff, #00f5d4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}>
          <span style={{ color:"white", fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", fontWeight:"700" }}>P3</span>
        </div>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:"700", fontSize:"16px", color:"#fffae6", letterSpacing:"0.02em" }}>
          Portfolio<span style={{ color:"#7b2fff" }}>3D</span>
        </span>
      </button>

      {/* Steps */}
      <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <button
              onClick={() => s.n < step && navigate(s.path)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "none", border: "none", cursor: s.n <= step ? "pointer" : "default",
                padding: "6px 12px",
                opacity: s.n > step ? 0.35 : 1,
                transition: "opacity 0.2s",
              }}
            >
              <div style={{
                width: "20px", height: "20px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", fontWeight: "500",
                background: s.n < step ? "rgba(0,245,212,0.15)" : s.n === step ? "rgba(123,47,255,0.3)" : "rgba(255,255,255,0.06)",
                border: s.n < step ? "1px solid rgba(0,245,212,0.4)" : s.n === step ? "1px solid rgba(123,47,255,0.6)" : "1px solid rgba(255,255,255,0.1)",
                color: s.n < step ? "#00f5d4" : s.n === step ? "#c59fff" : "#fffae680",
              }}>
                {s.n < step ? "✓" : s.n}
              </div>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "13px",
                color: s.n === step ? "#fffae6" : "rgba(255,250,230,0.5)",
                fontWeight: s.n === step ? "500" : "400",
              }}>
                {s.label}
              </span>
            </button>
            {i < steps.length - 1 && (
              <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.1)" }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ width: "140px" }} />
    </nav>
  );
}