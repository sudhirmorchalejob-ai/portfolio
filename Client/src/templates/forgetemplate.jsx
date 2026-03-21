import React from "react";

export default function ForgeTemplate({ data }) {
  const {
    name = "Your Name",
    title = "Your Title",
    about = "",
    photo = "",
    skills = [],
    projects = [],
    education = "",
    experience = "",
    contact = {},
  } = data || {};

  const expLines = experience ? experience.split("\n").filter(Boolean) : [];
  const eduLines = education ? education.split("\n").filter(Boolean) : [];
  const C = "#eab308";
  const C2 = "#f97316";

  const [first, ...rest] = name.split(" ");

  return (
    <div style={{ fontFamily:"'Outfit',sans-serif", background:"#080701", minHeight:"100vh", color:"#fafaf0" }}>

      {/* TOP ACCENT BAR */}
      <div style={{ height:"4px", background:`repeating-linear-gradient(90deg,${C} 0px,${C} 20px,transparent 20px,transparent 24px)` }} />

      {/* HERO — full dark with grid overlay */}
      <div style={{ padding:"52px 64px 44px", borderBottom:`1px solid rgba(234,179,8,0.15)`, position:"relative", overflow:"hidden" }}>
        {/* Grid watermark */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(rgba(234,179,8,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.03) 1px, transparent 1px)`, backgroundSize:"40px 40px", pointerEvents:"none" }} />

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"40px", flexWrap:"wrap", position:"relative", zIndex:1 }}>
          <div style={{ flex:1, minWidth:"280px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"20px" }}>
              {photo && (
                <div style={{ width:"64px", height:"64px", overflow:"hidden", border:`3px solid ${C}`, flexShrink:0 }}>
                  <img src={photo} alt={name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
              )}
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.25em", color:`${C}70`, textTransform:"uppercase" }}>
                [ PORTFOLIO · {new Date().getFullYear()} ]
              </div>
            </div>

            {/* Oversized name */}
            <div style={{ marginBottom:"14px" }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(56px,9vw,104px)", fontWeight:"800", lineHeight:"0.85", letterSpacing:"-0.05em", color:"#fafaf0", display:"inline" }}>{first}</div>
              {rest.length > 0 && (
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(56px,9vw,104px)", fontWeight:"800", lineHeight:"0.85", letterSpacing:"-0.05em", background:`linear-gradient(135deg,${C},${C2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  {rest.join(" ")}
                </div>
              )}
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
              <div style={{ height:"3px", width:"40px", background:`linear-gradient(90deg,${C},${C2})` }} />
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"13px", color:`${C}cc`, letterSpacing:"0.08em", textTransform:"uppercase" }}>{title}</span>
            </div>
            {about && <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"14px", lineHeight:"1.8", color:"rgba(250,250,240,0.45)", maxWidth:"540px", fontWeight:"300" }}>{about}</p>}
          </div>

          {/* Contact grid */}
          <div style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:"6px 14px", alignContent:"start" }}>
            {[
              { k:"EMAIL", v:contact.email },
              { k:"PHONE", v:contact.phone },
              { k:"GITHUB", v:contact.github?.replace("https://","") },
              { k:"WEB", v:contact.website?.replace("https://","") },
            ].filter(c=>c.v).map((c,i)=>(
              <React.Fragment key={i}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", color:`${C}60`, letterSpacing:"0.2em" }}>{c.k}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(250,250,240,0.45)" }}>{c.v.length>28?c.v.substring(0,26)+"…":c.v}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* BODY — 3-column grid */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1px 1.4fr 1px 1.4fr" }}>

        {/* COL 1 — Skills + Education */}
        <div style={{ padding:"36px 32px" }}>
          {skills.length > 0 && (
            <div style={{ marginBottom:"32px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}>
                <div style={{ width:"16px", height:"3px", background:C }} />
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C}80`, textTransform:"uppercase" }}>Skills</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
                {skills.map((s,i)=>(
                  <span key={i} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", padding:"3px 9px", background:`${C}10`, border:`1px solid ${C}30`, color:`${C}cc` }}>{s}</span>
                ))}
              </div>
            </div>
          )}
          {eduLines.length > 0 && (
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}>
                <div style={{ width:"16px", height:"3px", background:C2 }} />
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C2}80`, textTransform:"uppercase" }}>Education</span>
              </div>
              {eduLines.map((line,i)=>(
                <div key={i} style={{ display:"flex", gap:"8px", marginBottom:"8px" }}>
                  <div style={{ width:"3px", background:`${C}${i===0?"cc":"40"}`, flexShrink:0, borderRadius:"1px" }} />
                  <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"12px", lineHeight:"1.7", color:i===0?"rgba(250,250,240,0.8)":"rgba(250,250,240,0.35)", margin:0, fontWeight:i===0?"500":"400" }}>{line}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider 1 */}
        <div style={{ background:`repeating-linear-gradient(180deg,${C}30 0px,${C}30 4px,transparent 4px,transparent 8px)` }} />

        {/* COL 2 — Experience */}
        <div style={{ padding:"36px 32px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"20px" }}>
            <div style={{ width:"16px", height:"3px", background:C }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C}80`, textTransform:"uppercase" }}>Experience</span>
          </div>
          {expLines.map((line,i)=>{
            const isRole = line.includes("@");
            return (
              <div key={i} style={{ display:"flex", gap:"12px", marginBottom:"10px", alignItems:"flex-start" }}>
                <div style={{ width:"8px", height:"8px", background:isRole?C:"transparent", border:`1px solid ${isRole?C:`${C}40`}`, flexShrink:0, marginTop:"5px" }} />
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", lineHeight:"1.7", color:isRole?"rgba(250,250,240,0.85)":"rgba(250,250,240,0.35)", margin:0, fontWeight:isRole?"600":"400" }}>{line}</p>
              </div>
            );
          })}
        </div>

        {/* Divider 2 */}
        <div style={{ background:`repeating-linear-gradient(180deg,${C}30 0px,${C}30 4px,transparent 4px,transparent 8px)` }} />

        {/* COL 3 — Projects */}
        <div style={{ padding:"36px 32px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"20px" }}>
            <div style={{ width:"16px", height:"3px", background:C2 }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C2}80`, textTransform:"uppercase" }}>Projects</span>
          </div>
          {projects.map((p,i)=>(
            <div key={i} style={{ marginBottom:"16px", paddingBottom:"16px", borderBottom:`1px solid rgba(234,179,8,0.08)` }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"6px" }}>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"14px", fontWeight:"700", color:"#fafaf0", margin:0 }}>{p.title}</h3>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"18px", fontWeight:"900", color:`${C}15`, lineHeight:1 }}>0{i+1}</span>
              </div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"12px", lineHeight:"1.7", color:"rgba(250,250,240,0.38)", margin:0 }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop:`3px solid`, borderImage:`linear-gradient(90deg,${C},${C2}) 1`, padding:"16px 64px", display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(0,0,0,0.3)" }}>
        <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"16px", fontWeight:"800", background:`linear-gradient(90deg,${C},${C2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", letterSpacing:"-0.02em" }}>{name}</span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:`${C}40`, letterSpacing:"0.2em" }}>FORGE · {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}