import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CosmicTemplate from "../templates/CosmicTemplate";
import EmberTemplate from "../templates/EmberTemplate";
import AuroraTemplate from "../templates/AuroraTemplate";
import ForgeTemplate from "../templates/ForgeTemplate";

export default function PreviewPage({ userData, selectedTemplate }) {
  const navigate = useNavigate();
  const [device, setDevice] = useState("desktop");

  const devices = [
    { id:"desktop", label:"Desktop", width:"100%" },
    { id:"tablet", label:"Tablet", width:"768px" },
    { id:"mobile", label:"Mobile", width:"390px" },
  ];

  const accent = selectedTemplate==="ember"?"#ff4d00":selectedTemplate==="aurora"?"#06b6d4":selectedTemplate==="forge"?"#eab308":"#7b2fff";
  const accentAlt = selectedTemplate==="ember"?"#ff9a3c":selectedTemplate==="aurora"?"#818cf8":selectedTemplate==="forge"?"#f97316":"#00f5d4";

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0f", display:"flex", flexDirection:"column" }}>
      {/* Top Bar */}
      <div style={{
        background:"rgba(3,2,10,0.95)", backdropFilter:"blur(20px)",
        borderBottom:"1px solid rgba(255,255,255,0.06)",
        padding:"0 24px", height:"56px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        position:"sticky", top:0, zIndex:100, flexShrink:0,
      }}>
        {/* Left */}
        <div style={{ display:"flex", alignItems:"center", gap:"16px" }}>
          <button onClick={()=>navigate("/input")} style={{ background:"none", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,250,230,0.5)", padding:"6px 14px", fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", cursor:"pointer", letterSpacing:"0.1em", borderRadius:"4px", transition:"all 0.2s" }}>
            ← Edit
          </button>
          <div style={{ width:"1px", height:"24px", background:"rgba(255,255,255,0.08)" }} />
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(255,250,230,0.3)", letterSpacing:"0.1em" }}>
            LIVE PREVIEW · <span style={{ color:accentAlt }}>{selectedTemplate==="cosmic"?"COSMIC":selectedTemplate==="ember"?"EMBER":selectedTemplate==="aurora"?"AURORA":"FORGE"}</span>
          </span>
        </div>

        {/* Center - Device switcher */}
        <div style={{ display:"flex", gap:"2px", background:"rgba(255,255,255,0.04)", padding:"3px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.06)" }}>
          {devices.map(d => (
            <button key={d.id} onClick={()=>setDevice(d.id)} style={{
              padding:"5px 16px", background: device===d.id ? `${accent}25` : "transparent",
              border:`1px solid ${device===d.id ? accent+"50" : "transparent"}`,
              color: device===d.id ? "#fffae6" : "rgba(255,250,230,0.35)",
              fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em",
              cursor:"pointer", borderRadius:"4px", transition:"all 0.2s", textTransform:"uppercase",
            }}>
              {d.label}
            </button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
          <button onClick={()=>navigate("/")} style={{ background:"none", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,250,230,0.4)", padding:"6px 14px", fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", cursor:"pointer", letterSpacing:"0.08em", borderRadius:"4px" }}>
            New Template
          </button>
          <button onClick={()=>window.print()} style={{ background:`linear-gradient(135deg, ${accent}, ${accentAlt})`, border:"none", color:"white", padding:"7px 20px", fontFamily:"'Syne',sans-serif", fontWeight:"600", fontSize:"12px", cursor:"pointer", letterSpacing:"0.08em", borderRadius:"4px", textTransform:"uppercase" }}>
            Export PDF
          </button>
        </div>
      </div>

      {/* Preview area */}
      <div style={{ flex:1, display:"flex", justifyContent:"center", alignItems:"flex-start", padding:"32px 24px", background:"#0a0a0f", overflowY:"auto" }}>
        {/* Decorative bg */}
        <div style={{ position:"fixed", inset:0, background:`radial-gradient(ellipse 60% 40% at 50% 20%, ${accent}08 0%, transparent 60%)`, pointerEvents:"none" }} />

        <div style={{
          width: devices.find(d=>d.id===device)?.width || "100%",
          maxWidth:"100%",
          background:"white",
          boxShadow:`0 0 0 1px rgba(255,255,255,0.1), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${accent}15`,
          transition:"width 0.4s cubic-bezier(0.23,1,0.32,1)",
          minHeight:"90vh",
          position:"relative",
          zIndex:1,
          borderRadius: device === "desktop" ? "0" : "12px",
          overflow:"hidden",
        }}>
          {selectedTemplate==="cosmic"?<CosmicTemplate data={userData}/>:selectedTemplate==="ember"?<EmberTemplate data={userData}/>:selectedTemplate==="aurora"?<AuroraTemplate data={userData}/>:<ForgeTemplate data={userData}/>}
        </div>
      </div>

      {/* Bottom info bar */}
      <div style={{ background:"rgba(3,2,10,0.9)", borderTop:"1px solid rgba(255,255,255,0.04)", padding:"10px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(255,250,230,0.2)", letterSpacing:"0.1em" }}>
          {userData.name} · {selectedTemplate?.toUpperCase()} TEMPLATE
        </span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(255,250,230,0.2)", letterSpacing:"0.1em" }}>
          {new Date().getFullYear()} · Portfolio3D
        </span>
      </div>
    </div>
  );
}