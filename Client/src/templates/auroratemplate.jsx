import React from "react";

export default function AuroraTemplate({ data }) {
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

  const C = "#06b6d4";
  const C2 = "#818cf8";

  return (
    <div style={{ fontFamily:"'Outfit',sans-serif", background:"#020b14", minHeight:"100vh", color:"#e0f2fe", position:"relative", overflow:"hidden" }}>
      {/* Aurora gradient background */}
      <div style={{ position:"absolute", top:"-20%", left:"-10%", width:"70%", height:"60%", background:`radial-gradient(ellipse, ${C}12 0%, transparent 65%)`, pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-10%", right:"-5%", width:"50%", height:"50%", background:`radial-gradient(ellipse, ${C2}10 0%, transparent 65%)`, pointerEvents:"none" }} />

      {/* Top gradient bar */}
      <div style={{ height:"2px", background:`linear-gradient(90deg, transparent 0%, ${C} 30%, ${C2} 70%, transparent 100%)` }} />

      {/* HERO */}
      <div style={{ padding:"56px 64px 48px", borderBottom:`1px solid rgba(6,182,212,0.1)`, position:"relative" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"40px", flexWrap:"wrap" }}>
          <div style={{ flex:1, minWidth:"300px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"24px" }}>
              {photo && (
                <div style={{ width:"60px", height:"60px", borderRadius:"50%", overflow:"hidden", border:`2px solid ${C}50`, flexShrink:0, boxShadow:`0 0 20px ${C}30` }}>
                  <img src={photo} alt={name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
              )}
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.25em", color:`${C}80`, textTransform:"uppercase", marginBottom:"4px" }}>Portfolio</div>
                <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                  <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:C, boxShadow:`0 0 8px ${C}` }} />
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:`${C}90`, letterSpacing:"0.1em" }}>Available for work</span>
                </div>
              </div>
            </div>
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(44px,6.5vw,80px)", fontWeight:"800", lineHeight:"0.9", letterSpacing:"-0.04em", marginBottom:"16px", color:"#e0f2fe" }}>
              {name}
            </h1>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px" }}>
              <div style={{ height:"1px", width:"28px", background:`linear-gradient(90deg,${C},${C2})` }} />
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"13px", color:C, letterSpacing:"0.06em" }}>{title}</span>
            </div>
            {about && <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"14px", lineHeight:"1.8", color:"rgba(224,242,254,0.45)", maxWidth:"520px", fontWeight:"300" }}>{about}</p>}
          </div>
          {/* Contact */}
          <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
            {[
              { k:"Email", v:contact.email },
              { k:"Phone", v:contact.phone },
              { k:"LinkedIn", v:contact.linkedin?.replace("https://","") },
              { k:"GitHub", v:contact.github?.replace("https://","") },
              { k:"Web", v:contact.website?.replace("https://","") },
            ].filter(c=>c.v).map((c,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", color:`${C}50`, letterSpacing:"0.15em", textTransform:"uppercase", minWidth:"48px" }}>{c.k}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(224,242,254,0.45)" }}>{c.v.length>32?c.v.substring(0,30)+"…":c.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ display:"grid", gridTemplateColumns:"300px 1fr" }}>
        {/* LEFT */}
        <div style={{ borderRight:`1px solid rgba(6,182,212,0.08)`, padding:"40px 36px" }}>
          {skills.length > 0 && (
            <div style={{ marginBottom:"36px" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C}60`, textTransform:"uppercase", marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"12px", height:"1px", background:C }} /> Skills
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                {skills.map((s,i)=>(
                  <span key={i} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", padding:"4px 10px", background:`${C}0d`, border:`1px solid ${C}25`, color:`${C}cc`, borderRadius:"3px" }}>{s}</span>
                ))}
              </div>
            </div>
          )}
          {eduLines.length > 0 && (
            <div style={{ marginBottom:"36px" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C2}60`, textTransform:"uppercase", marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"12px", height:"1px", background:C2 }} /> Education
              </div>
              {eduLines.map((line,i)=>(
                <p key={i} style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", lineHeight:"1.7", color:i===0?"rgba(224,242,254,0.8)":"rgba(224,242,254,0.35)", margin:"0 0 4px", fontWeight:i===0?"500":"400" }}>{line}</p>
              ))}
            </div>
          )}
          {expLines.length > 0 && (
            <div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C}60`, textTransform:"uppercase", marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"12px", height:"1px", background:C }} /> Experience
              </div>
              <div style={{ position:"relative", paddingLeft:"16px" }}>
                <div style={{ position:"absolute", left:0, top:"4px", bottom:"4px", width:"1px", background:`linear-gradient(180deg,${C},${C2},transparent)` }} />
                {expLines.map((line,i)=>{
                  const isRole = line.includes("@");
                  return (
                    <div key={i} style={{ marginBottom:"10px", position:"relative" }}>
                      {isRole && <div style={{ position:"absolute", left:"-19px", top:"6px", width:"6px", height:"6px", borderRadius:"50%", background:C, boxShadow:`0 0 6px ${C}` }} />}
                      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", lineHeight:"1.7", color:isRole?"rgba(224,242,254,0.85)":"rgba(224,242,254,0.35)", margin:0, fontWeight:isRole?"500":"400" }}>{line}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div style={{ padding:"40px 48px" }}>
          {projects.length > 0 && (
            <div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.3em", color:`${C2}60`, textTransform:"uppercase", marginBottom:"20px", display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"12px", height:"1px", background:C2 }} /> Projects
              </div>
              <div style={{ display:"grid", gap:"14px" }}>
                {projects.map((p,i)=>(
                  <div key={i} style={{ background:`rgba(6,182,212,0.04)`, border:`1px solid rgba(6,182,212,0.1)`, borderRadius:"8px", padding:"18px 20px", position:"relative", overflow:"hidden" }}>
                    <div style={{ position:"absolute", top:0, left:0, width:"3px", height:"100%", background:`linear-gradient(180deg,${C},${C2})` }} />
                    <div style={{ paddingLeft:"10px", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                      <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"15px", fontWeight:"700", color:"#e0f2fe", margin:"0 0 6px", letterSpacing:"-0.01em" }}>{p.title}</h3>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:`${C}50`, marginLeft:"12px", flexShrink:0 }}>0{i+1}</span>
                    </div>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", lineHeight:"1.7", color:"rgba(224,242,254,0.4)", margin:"0 0 0 10px" }}>{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Stats */}
          <div style={{ marginTop:"40px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px" }}>
            {[
              { n:projects.length||0, l:"Projects" },
              { n:skills.length||0, l:"Skills" },
              { n:(()=>{const m=experience?.match(/\((\d{4})/);return m?`${new Date().getFullYear()-parseInt(m[1])}+`:"—";})(), l:"Years" },
            ].map((s,i)=>(
              <div key={i} style={{ background:`rgba(6,182,212,0.05)`, border:`1px solid rgba(6,182,212,0.12)`, borderRadius:"8px", padding:"16px", textAlign:"center" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"28px", fontWeight:"800", background:`linear-gradient(135deg,${C},${C2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1, marginBottom:"4px" }}>{s.n}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", color:"rgba(224,242,254,0.25)", letterSpacing:"0.2em", textTransform:"uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop:`1px solid rgba(6,182,212,0.08)`, padding:"20px 64px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(224,242,254,0.18)", letterSpacing:"0.15em" }}>{name} · Aurora</span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:"rgba(224,242,254,0.18)" }}>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}