import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ParticleField from "../components/ParticleField";
import Navbar from "../components/Navbar";

export default function InputPage({ userData, setUserData, selectedTemplate }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("form");
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [activeSection, setActiveSection] = useState("basic");
  const fileRef = useRef();

  const accent = selectedTemplate === "ember" ? "#ff4d00" : "#7b2fff";
  const accentAlt = selectedTemplate === "ember" ? "#ff9a3c" : "#00f5d4";

  const [form, setForm] = useState({
    name: userData.name || "",
    title: userData.title || "",
    about: userData.about || "",
    skills: (userData.skills || []).join(", "),
    education: userData.education || "",
    experience: userData.experience || "",
    projects: userData.projects?.length ? userData.projects : [{ title: "", description: "" }],
    email: userData.contact?.email || "",
    phone: userData.contact?.phone || "",
    linkedin: userData.contact?.linkedin || "",
    github: userData.contact?.github || "",
    website: userData.contact?.website || "",
  });

  const set = (f, v) => setForm(p => ({ ...p, [f]: v }));
  const setProj = (i, f, v) => {
    const p = [...form.projects];
    p[i] = { ...p[i], [f]: v };
    setForm(prev => ({ ...prev, projects: p }));
  };

  const sections = [
    { id:"basic", label:"Identity", icon:"◈" },
    { id:"skills", label:"Skills", icon:"◎" },
    { id:"projects", label:"Projects", icon:"◉" },
    { id:"career", label:"Career", icon:"◐" },
    { id:"contact", label:"Contact", icon:"◑" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      name: form.name, title: form.title, about: form.about,
      skills: form.skills.split(",").map(s => s.trim()).filter(Boolean),
      education: form.education, experience: form.experience,
      projects: form.projects.filter(p => p.title),
      contact: { email:form.email, phone:form.phone, linkedin:form.linkedin, github:form.github, website:form.website },
    });
    navigate("/preview");
  };

  const handleUpload = async (file) => {
    if (!file) return;
    const ext = file.name.split(".").pop().toLowerCase();
    if (!["pdf","docx"].includes(ext)) { setUploadStatus({ type:"error", msg:"Only PDF or DOCX files." }); return; }
    setUploading(true); setUploadStatus(null);
    const fd = new FormData(); fd.append("resume", file);
    try {
      const res = await axios.post("/api/parse-resume", fd);
      const d = res.data.data;
      setUserData(d);
      setForm({ name:d.name||"", title:d.title||"", about:d.about||"", skills:(d.skills||[]).join(", "),
        education:d.education||"", experience:d.experience||"",
        projects:d.projects?.length?d.projects:[{title:"",description:""}],
        email:d.contact?.email||"", phone:d.contact?.phone||"", linkedin:d.contact?.linkedin||"", github:d.contact?.github||"", website:d.contact?.website||"",
      });
      setUploadStatus({ type:"success", msg:`Parsed! Found ${d.skills?.length||0} skills, ${d.projects?.length||0} projects.` });
    } catch(err) {
      setUploadStatus({ type:"error", msg:err.response?.data?.error||"Parse failed. Try the manual form." });
    } finally { setUploading(false); }
  };

  const inputStyle = {
    background:"rgba(255,255,255,0.03)", border:`1px solid rgba(255,255,255,0.08)`, color:"#fffae6",
    padding:"12px 16px", fontFamily:"'Outfit',sans-serif", fontSize:"14px", width:"100%",
    outline:"none", borderRadius:"4px", transition:"border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle = { fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:`${accentAlt}80`, display:"block", marginBottom:"6px" };

  return (
    <div style={{ minHeight:"100vh", background:"#03020a", position:"relative", paddingTop:"64px" }}>
      <Navbar step={2} />
      <div style={{ position:"fixed", inset:0, zIndex:0, opacity:0.3 }}>
        <ParticleField color={accent} count={60} speed={0.2} />
      </div>
      <div style={{ position:"fixed", inset:0, zIndex:0, background:`radial-gradient(ellipse 70% 50% at 20% 30%, ${accent}10 0%, transparent 60%)` }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:"1100px", margin:"0 auto", padding:"40px 40px 80px", display:"grid", gridTemplateColumns:"220px 1fr", gap:"40px" }}>

        {/* Left sidebar */}
        <div>
          {/* Mode toggle */}
          <div style={{ marginBottom:"32px" }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.2em", color:"rgba(255,250,230,0.3)", marginBottom:"12px", textTransform:"uppercase" }}>Input Mode</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
              {[{id:"form",label:"✏  Manual Form"},{id:"upload",label:"⬆  Upload Resume"}].map(m => (
                <button key={m.id} onClick={() => setMode(m.id)} style={{
                  padding:"10px 14px", textAlign:"left", background: mode===m.id ? `${accent}18` : "transparent",
                  border:`1px solid ${mode===m.id ? accent+"50" : "rgba(255,255,255,0.06)"}`,
                  color: mode===m.id ? "#fffae6" : "rgba(255,250,230,0.4)",
                  fontFamily:"'Outfit',sans-serif", fontSize:"13px", cursor:"pointer", borderRadius:"4px",
                  transition:"all 0.2s",
                }}>
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section nav (form only) */}
          {mode === "form" && (
            <div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.2em", color:"rgba(255,250,230,0.3)", marginBottom:"12px", textTransform:"uppercase" }}>Sections</div>
              {sections.map(s => (
                <button key={s.id} onClick={() => setActiveSection(s.id)} style={{
                  display:"flex", alignItems:"center", gap:"10px", width:"100%", padding:"10px 14px",
                  background: activeSection===s.id ? `${accent}15` : "transparent",
                  border:`1px solid ${activeSection===s.id ? accent+"40" : "transparent"}`,
                  color: activeSection===s.id ? "#fffae6" : "rgba(255,250,230,0.4)",
                  fontFamily:"'Outfit',sans-serif", fontSize:"13px", cursor:"pointer", borderRadius:"4px",
                  marginBottom:"4px", textAlign:"left", transition:"all 0.2s",
                }}>
                  <span style={{ color:`${accent}80`, fontFamily:"monospace", fontSize:"14px" }}>{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right content */}
        <div>
          <div style={{ marginBottom:"32px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px" }}>
              <div style={{ width:"20px", height:"1px", background:accentAlt }} />
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.3em", color:accentAlt, textTransform:"uppercase" }}>Step 02 of 03</span>
            </div>
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"40px", fontWeight:"800", letterSpacing:"-0.02em", color:"#fffae6" }}>
              {mode === "form" ? "Build your profile" : "Upload & auto-fill"}
            </h1>
          </div>

          {/* Upload mode */}
          {mode === "upload" && (
            <div>
              <div
                onDragOver={e=>{e.preventDefault();setDragOver(true)}}
                onDragLeave={()=>setDragOver(false)}
                onDrop={e=>{e.preventDefault();setDragOver(false);handleUpload(e.dataTransfer.files[0])}}
                onClick={()=>fileRef.current.click()}
                style={{
                  border:`2px dashed ${dragOver ? accentAlt : accent+"40"}`,
                  borderRadius:"8px", padding:"60px 40px", textAlign:"center", cursor:"pointer",
                  background: dragOver ? `${accentAlt}08` : `${accent}05`,
                  transition:"all 0.3s",
                  position:"relative", overflow:"hidden",
                }}
              >
                {uploading ? (
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"16px" }}>
                    <div style={{ width:"40px", height:"40px", border:`2px solid ${accent}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
                    <p style={{ fontFamily:"'Outfit',sans-serif", color:"rgba(255,250,230,0.5)", fontSize:"14px" }}>Parsing your resume with AI…</p>
                    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize:"40px", marginBottom:"16px", opacity:0.5 }}>⬆</div>
                    <p style={{ fontFamily:"'Syne',sans-serif", fontSize:"20px", fontWeight:"700", color:"#fffae6", marginBottom:"8px" }}>Drop your resume here</p>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.3)" }}>PDF or DOCX · max 10MB · auto-extracts all fields</p>
                  </>
                )}
              </div>
              <input ref={fileRef} type="file" accept=".pdf,.docx" style={{display:"none"}} onChange={e=>handleUpload(e.target.files[0])} />

              {uploadStatus && (
                <div style={{
                  marginTop:"16px", padding:"14px 20px", borderRadius:"6px", fontSize:"13px",
                  background: uploadStatus.type==="success" ? "rgba(0,245,212,0.08)" : "rgba(255,77,0,0.08)",
                  border:`1px solid ${uploadStatus.type==="success" ? "rgba(0,245,212,0.3)" : "rgba(255,77,0,0.3)"}`,
                  color: uploadStatus.type==="success" ? "#00f5d4" : "#ff6b3d",
                  fontFamily:"'Outfit',sans-serif",
                }}>
                  {uploadStatus.type==="success" ? "✓ " : "✕ "}{uploadStatus.msg}
                </div>
              )}
              {uploadStatus?.type==="success" && (
                <div style={{ display:"flex", gap:"12px", marginTop:"20px" }}>
                  <button onClick={()=>setMode("form")} className="btn-3d btn-neon" style={{ borderRadius:"4px", padding:"12px 24px", fontSize:"13px" }}>Review Data</button>
                  <button onClick={()=>navigate("/preview")} className="btn-3d btn-plasma" style={{ borderRadius:"4px", padding:"12px 24px", fontSize:"13px" }}>Preview Portfolio →</button>
                </div>
              )}
            </div>
          )}

          {/* Form mode */}
          {mode === "form" && (
            <form onSubmit={handleSubmit}>
              {/* Basic */}
              {activeSection === "basic" && (
                <div style={{ display:"grid", gap:"20px" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
                    <div><label style={labelStyle}>Full Name *</label><input style={inputStyle} value={form.name} onChange={e=>set("name",e.target.value)} required placeholder="Jordan Blake" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`;e.target.style.boxShadow=`0 0 0 3px ${accentAlt}10`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)";e.target.style.boxShadow="none"}} /></div>
                    <div><label style={labelStyle}>Job Title *</label><input style={inputStyle} value={form.title} onChange={e=>set("title",e.target.value)} required placeholder="Full Stack Developer" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`;e.target.style.boxShadow=`0 0 0 3px ${accentAlt}10`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)";e.target.style.boxShadow="none"}} /></div>
                  </div>
                  <div><label style={labelStyle}>About / Summary</label><textarea style={{...inputStyle,resize:"none",minHeight:"100px",lineHeight:"1.7"}} value={form.about} onChange={e=>set("about",e.target.value)} placeholder="A compelling story about who you are and what you build…" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} /></div>
                  <div style={{ display:"flex", justifyContent:"flex-end" }}>
                    <button type="button" onClick={()=>setActiveSection("skills")} className="btn-3d btn-plasma" style={{ borderRadius:"4px" }}>Next: Skills →</button>
                  </div>
                </div>
              )}

              {/* Skills */}
              {activeSection === "skills" && (
                <div style={{ display:"grid", gap:"20px" }}>
                  <div>
                    <label style={labelStyle}>Skills (comma-separated)</label>
                    <textarea style={{...inputStyle,resize:"none",minHeight:"80px",lineHeight:"1.7"}} value={form.skills} onChange={e=>set("skills",e.target.value)} placeholder="React, Three.js, Node.js, TypeScript, AWS…" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} />
                  </div>
                  {/* Live skill preview */}
                  {form.skills && (
                    <div>
                      <div style={labelStyle}>Preview</div>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                        {form.skills.split(",").map(s=>s.trim()).filter(Boolean).map((s,i)=>(
                          <span key={i} className="skill-pill" style={{ borderColor:`${accent}40`, color:`${accent}cc`, background:`${accent}10` }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div style={{ display:"flex", justifyContent:"flex-end" }}>
                    <button type="button" onClick={()=>setActiveSection("projects")} className="btn-3d btn-plasma" style={{ borderRadius:"4px" }}>Next: Projects →</button>
                  </div>
                </div>
              )}

              {/* Projects */}
              {activeSection === "projects" && (
                <div style={{ display:"grid", gap:"16px" }}>
                  {form.projects.map((p,i) => (
                    <div key={i} style={{ background:"rgba(255,255,255,0.02)", border:`1px solid rgba(255,255,255,0.06)`, borderRadius:"8px", padding:"20px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px" }}>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:`${accent}80`, letterSpacing:"0.15em", textTransform:"uppercase" }}>Project {i+1}</span>
                        {form.projects.length > 1 && <button type="button" onClick={()=>setForm(prev=>({...prev,projects:prev.projects.filter((_,j)=>j!==i)}))} style={{background:"none",border:"none",color:"rgba(255,77,0,0.5)",cursor:"pointer",fontSize:"12px",fontFamily:"'JetBrains Mono',monospace"}}>remove ✕</button>}
                      </div>
                      <input style={{...inputStyle,marginBottom:"10px"}} placeholder="Project title" value={p.title} onChange={e=>setProj(i,"title",e.target.value)} onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} />
                      <textarea style={{...inputStyle,resize:"none",minHeight:"60px"}} placeholder="What did you build and what impact did it have?" value={p.description} onChange={e=>setProj(i,"description",e.target.value)} onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} />
                    </div>
                  ))}
                  <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <button type="button" onClick={()=>setForm(prev=>({...prev,projects:[...prev.projects,{title:"",description:""}]}))} className="btn-3d btn-neon" style={{ borderRadius:"4px", padding:"10px 20px", fontSize:"12px" }}>+ Add Project</button>
                    <button type="button" onClick={()=>setActiveSection("career")} className="btn-3d btn-plasma" style={{ borderRadius:"4px" }}>Next: Career →</button>
                  </div>
                </div>
              )}

              {/* Career */}
              {activeSection === "career" && (
                <div style={{ display:"grid", gap:"20px" }}>
                  <div>
                    <label style={labelStyle}>Work Experience</label>
                    <textarea style={{...inputStyle,resize:"none",minHeight:"120px",lineHeight:"1.8"}} value={form.experience} onChange={e=>set("experience",e.target.value)} placeholder={"Staff Engineer @ Vercel (2022–Present)\nSenior Engineer @ Stripe (2020–2022)"} onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} />
                  </div>
                  <div>
                    <label style={labelStyle}>Education</label>
                    <textarea style={{...inputStyle,resize:"none",minHeight:"80px",lineHeight:"1.8"}} value={form.education} onChange={e=>set("education",e.target.value)} placeholder={"M.S. Computer Science — Stanford, 2019\nB.S. Software Engineering — UC Berkeley, 2017"} onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} />
                  </div>
                  <div style={{ display:"flex", justifyContent:"flex-end" }}>
                    <button type="button" onClick={()=>setActiveSection("contact")} className="btn-3d btn-plasma" style={{ borderRadius:"4px" }}>Next: Contact →</button>
                  </div>
                </div>
              )}

              {/* Contact */}
              {activeSection === "contact" && (
                <div style={{ display:"grid", gap:"16px" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
                    <div><label style={labelStyle}>Email</label><input style={inputStyle} type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@domain.com" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} /></div>
                    <div><label style={labelStyle}>Phone</label><input style={inputStyle} value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="+1 (555) 000-0000" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} /></div>
                    <div><label style={labelStyle}>LinkedIn</label><input style={inputStyle} value={form.linkedin} onChange={e=>set("linkedin",e.target.value)} placeholder="https://linkedin.com/in/..." onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} /></div>
                    <div><label style={labelStyle}>GitHub</label><input style={inputStyle} value={form.github} onChange={e=>set("github",e.target.value)} placeholder="https://github.com/..." onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} /></div>
                    <div style={{ gridColumn:"1/-1" }}><label style={labelStyle}>Website</label><input style={inputStyle} value={form.website} onChange={e=>set("website",e.target.value)} placeholder="https://yoursite.dev" onFocus={e=>{e.target.style.borderColor=`${accentAlt}60`}} onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.08)"}} /></div>
                  </div>
                  <div style={{ display:"flex", justifyContent:"flex-end", paddingTop:"8px" }}>
                    <button type="submit" className="btn-3d btn-plasma" style={{ borderRadius:"4px", fontSize:"15px", padding:"16px 40px" }}>
                      Generate Portfolio ✦
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}