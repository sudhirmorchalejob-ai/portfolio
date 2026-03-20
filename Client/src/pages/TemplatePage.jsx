import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParticleField from "../components/ParticleField";
import FloatingGeometry from "../components/FloatingGeometry";
import Navbar from "../components/Navbar";

const TEMPLATES = [
  {
    id: "cosmic",
    name: "Cosmic",
    tag: "Dark · Immersive · 3D",
    desc: "Deep-space aesthetic with floating elements, neon accents, and glassmorphism panels.",
    geo: "icosahedron",
    accent: "#7b2fff",
    accentAlt: "#00f5d4",
    preview: "cosmic",
  },
  {
    id: "ember",
    name: "Ember",
    tag: "Bold · Warm · Editorial",
    desc: "Volcanic energy with ember tones, strong typography, and kinetic section reveals.",
    geo: "dodecahedron",
    accent: "#ff4d00",
    accentAlt: "#ff9a3c",
    preview: "ember",
  },
];

function CosmicPreviewCard() {
  return (
    <div style={{ width:"100%", height:"100%", background:"#03020a", position:"relative", overflow:"hidden", padding:"20px" }}>
      {/* Header bar */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
        <div>
          <div style={{ width:"80px", height:"12px", background:"linear-gradient(90deg,#7b2fff,#00f5d4)", borderRadius:"2px", marginBottom:"6px" }} />
          <div style={{ width:"50px", height:"8px", background:"rgba(123,47,255,0.3)", borderRadius:"2px" }} />
        </div>
        <div style={{ display:"flex", gap:"6px" }}>
          {["#7b2fff","#00f5d4","rgba(255,255,255,0.1)"].map((c,i) => (
            <div key={i} style={{ width:"6px", height:"6px", borderRadius:"50%", background:c }} />
          ))}
        </div>
      </div>
      {/* Grid cards */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", marginBottom:"10px" }}>
        {[...Array(4)].map((_,i) => (
          <div key={i} style={{ background:"rgba(123,47,255,0.07)", border:"1px solid rgba(123,47,255,0.2)", borderRadius:"6px", padding:"8px 10px" }}>
            <div style={{ width:"40px", height:"7px", background:`rgba(${i%2===0?"123,47,255":"0,245,212"},0.4)`, borderRadius:"2px", marginBottom:"5px" }} />
            <div style={{ width:"100%", height:"5px", background:"rgba(255,255,255,0.06)", borderRadius:"1px", marginBottom:"3px" }} />
            <div style={{ width:"70%", height:"5px", background:"rgba(255,255,255,0.06)", borderRadius:"1px" }} />
          </div>
        ))}
      </div>
      {/* Skill pills */}
      <div style={{ display:"flex", gap:"4px", flexWrap:"wrap" }}>
        {["React","Three.js","Node","AWS"].map((s,i) => (
          <span key={i} style={{ fontSize:"8px", padding:"2px 6px", border:"1px solid rgba(123,47,255,0.35)", borderRadius:"2px", color:"rgba(123,47,255,0.8)", fontFamily:"monospace" }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function EmberPreviewCard() {
  return (
    <div style={{ width:"100%", height:"100%", background:"#0a0402", position:"relative", overflow:"hidden", padding:"20px" }}>
      {/* Gradient top bar */}
      <div style={{ height:"3px", background:"linear-gradient(90deg,#ff4d00,#ff9a3c)", marginBottom:"16px", borderRadius:"2px" }} />
      <div style={{ marginBottom:"14px" }}>
        <div style={{ width:"90px", height:"14px", background:"linear-gradient(90deg,#ff4d00,#ff9a3c)", borderRadius:"2px", marginBottom:"6px" }} />
        <div style={{ width:"60px", height:"9px", background:"rgba(255,77,0,0.25)", borderRadius:"2px", marginBottom:"4px" }} />
        <div style={{ width:"100%", height:"5px", background:"rgba(255,255,255,0.05)", borderRadius:"1px", marginBottom:"3px" }} />
        <div style={{ width:"80%", height:"5px", background:"rgba(255,255,255,0.05)", borderRadius:"1px" }} />
      </div>
      {/* Horizontal bars */}
      {[...Array(3)].map((_,i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"8px" }}>
          <div style={{ width:"3px", height:"24px", background:`rgba(255,77,0,${0.8-i*0.2})`, borderRadius:"2px" }} />
          <div style={{ flex:1 }}>
            <div style={{ width:`${70-i*15}%`, height:"6px", background:"rgba(255,154,60,0.25)", borderRadius:"2px", marginBottom:"3px" }} />
            <div style={{ width:`${90-i*10}%`, height:"4px", background:"rgba(255,255,255,0.06)", borderRadius:"1px" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Template3DCard({ t, selected, onSelect }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(t.id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s",
        transformStyle: "preserve-3d",
        boxShadow: selected
          ? `0 0 0 2px ${t.accent}, 0 20px 60px ${t.accent}40, 0 0 80px ${t.accent}20`
          : "0 8px 40px rgba(0,0,0,0.5)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* 3D Geometry + Preview */}
      <div style={{ height: "240px", background: t.preview === "cosmic" ? "#03020a" : "#0a0402", position: "relative" }}>
        {/* Geometry (top right) */}
        <div style={{ position:"absolute", top:0, right:0, width:"160px", height:"160px", opacity: 0.7 }}>
          <FloatingGeometry type={t.geo} color={t.accent} size={0.9} />
        </div>
        {/* Preview (left) */}
        <div style={{ position:"absolute", inset:0, right:"80px" }}>
          {t.preview === "cosmic" ? <CosmicPreviewCard /> : <EmberPreviewCard />}
        </div>
        {/* Gradient edge blend */}
        <div style={{ position:"absolute", top:0, right:"60px", width:"100px", height:"100%", background:`linear-gradient(90deg, transparent, ${t.preview === "cosmic" ? "#03020a" : "#0a0402"})` }} />
      </div>

      {/* Info */}
      <div style={{
        background: `linear-gradient(135deg, rgba(${t.preview==="cosmic"?"3,2,10":"10,4,2"},0.95) 0%, rgba(${t.preview==="cosmic"?"10,5,20":"20,8,4"},0.95) 100%)`,
        borderTop: `1px solid ${t.accent}30`,
        padding: "20px 24px 22px",
      }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"8px" }}>
          <div>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.2em", color:`${t.accent}99`, textTransform:"uppercase" }}>{t.tag}</span>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"22px", fontWeight:"800", color:"#fffae6", margin:"4px 0 0", letterSpacing:"-0.01em" }}>{t.name}</h3>
          </div>
          {/* Selected indicator */}
          <div style={{
            width:"24px", height:"24px", borderRadius:"50%",
            border: `2px solid ${selected ? t.accent : "rgba(255,255,255,0.15)"}`,
            background: selected ? t.accent : "transparent",
            display:"flex", alignItems:"center", justifyContent:"center",
            transition: "all 0.3s",
            flexShrink: 0,
          }}>
            {selected && <span style={{ color:"white", fontSize:"12px", lineHeight:1 }}>✓</span>}
          </div>
        </div>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.5)", lineHeight:1.7, margin:0 }}>{t.desc}</p>
        {/* Accent bar */}
        <div style={{ height:"2px", background:`linear-gradient(90deg, ${t.accent}, ${t.accentAlt})`, marginTop:"16px", borderRadius:"1px", opacity: selected ? 1 : 0.3, transition:"opacity 0.3s" }} />
      </div>
    </div>
  );
}

export default function TemplatePage({ selectedTemplate, onSelect }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight:"100vh", background:"#03020a", position:"relative", overflow:"hidden" }}>
      <Navbar step={1} />

      {/* Particle background */}
      <div style={{ position:"fixed", inset:0, zIndex:0 }}>
        <ParticleField color="#7b2fff" count={80} speed={0.4} />
      </div>

      {/* Radial gradient bg */}
      <div style={{ position:"fixed", inset:0, zIndex:0, background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,47,255,0.12) 0%, transparent 70%)" }} />
      <div style={{ position:"fixed", inset:0, zIndex:0, background:"radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,245,212,0.06) 0%, transparent 60%)" }} />

      {/* Content */}
      <div style={{ position:"relative", zIndex:1, paddingTop:"120px", paddingBottom:"80px", maxWidth:"1000px", margin:"0 auto", padding:"120px 40px 80px" }}>
        
        {/* Hero text */}
        <div className="fade-up" style={{ marginBottom:"60px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
            <div style={{ width:"24px", height:"1px", background:"#00f5d4" }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", letterSpacing:"0.3em", color:"#00f5d4", textTransform:"uppercase" }}>Step 01 of 03</span>
          </div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(42px,6vw,72px)", fontWeight:"800", lineHeight:"0.95", letterSpacing:"-0.03em", marginBottom:"20px" }}>
            <span style={{ display:"block", color:"#fffae6" }}>Choose your</span>
            <span className="grad-plasma" style={{ display:"block" }}>visual universe.</span>
          </h1>
          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"16px", color:"rgba(255,250,230,0.45)", maxWidth:"420px", lineHeight:1.7 }}>
            Each template is a fully 3D-rendered experience. Drag the cards to interact — your portfolio will feel this alive.
          </p>
        </div>

        {/* Template Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(380px,1fr))", gap:"24px", marginBottom:"48px" }}>
          {TEMPLATES.map((t, i) => (
            <div key={t.id} className="fade-up" style={{ animationDelay:`${i * 0.15}s` }}>
              <Template3DCard t={t} selected={selectedTemplate === t.id} onSelect={onSelect} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up" style={{ animationDelay:"0.4s", display:"flex", alignItems:"center", gap:"20px" }}>
          <button
            onClick={() => selectedTemplate && navigate("/input")}
            disabled={!selectedTemplate}
            className="btn-3d btn-plasma"
            style={{ opacity: selectedTemplate ? 1 : 0.4, cursor: selectedTemplate ? "pointer" : "not-allowed", borderRadius:"6px" }}
          >
            <span>Continue</span>
            <span style={{ fontSize:"16px" }}>→</span>
          </button>
          {!selectedTemplate && (
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(255,250,230,0.3)", letterSpacing:"0.1em" }}>
              ↑ select a template first
            </span>
          )}
          {selectedTemplate && (
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"#00f5d4", letterSpacing:"0.05em" }}>
              ✓ {TEMPLATES.find(t=>t.id===selectedTemplate)?.name} selected
            </span>
          )}
        </div>
      </div>
    </div>
  );
}