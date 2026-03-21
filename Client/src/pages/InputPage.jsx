import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ParticleField from "../components/ParticleField";
import Navbar from "../components/Navbar";
import LinkedInModal from "../components/LinkedInModal";

export default function InputPage({ userData, setUserData, selectedTemplate }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("form");
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [activeSection, setActiveSection] = useState("basic");
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [linkedInConnected, setLinkedInConnected] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileRef = useRef();

  const accent = selectedTemplate === "ember" ? "#ff4d00" : selectedTemplate === "aurora" ? "#06b6d4" : selectedTemplate === "forge" ? "#eab308" : "#7b2fff";
  const accentAlt = selectedTemplate === "ember" ? "#ff9a3c" : selectedTemplate === "aurora" ? "#818cf8" : selectedTemplate === "forge" ? "#f97316" : "#00f5d4";
  const LI_BLUE = "#0A66C2";

  const [form, setForm] = useState({
    name: userData.name || "",
    title: userData.title || "",
    about: userData.about || "",
    photo: userData.photo || "",
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
    { id: "basic", label: "Identity", icon: "◈" },
    { id: "skills", label: "Skills", icon: "◎" },
    { id: "projects", label: "Projects", icon: "◉" },
    { id: "career", label: "Career", icon: "◐" },
    { id: "contact", label: "Contact", icon: "◑" },
  ];

  const syncFormAndData = (d, goToPreview = true) => {
    const normalized = {
      name: d.name || form.name,
      title: d.title || form.title,
      about: d.about || form.about,
      photo: d.photo || form.photo || "",
      skills: d.skills || form.skills.split(",").map(s => s.trim()).filter(Boolean),
      education: d.education || form.education,
      experience: d.experience || form.experience,
      projects: d.projects?.length ? d.projects : form.projects.filter(p => p.title),
      contact: d.contact || { email: form.email, phone: form.phone, linkedin: form.linkedin, github: form.github, website: form.website },
      _linkedinMeta: d._linkedinMeta || null,
    };
    setUserData(normalized);
    setForm({
      name: normalized.name, title: normalized.title, about: normalized.about, photo: normalized.photo,
      skills: Array.isArray(normalized.skills) ? normalized.skills.join(", ") : normalized.skills,
      education: normalized.education, experience: normalized.experience,
      projects: normalized.projects?.length ? normalized.projects : [{ title: "", description: "" }],
      email: normalized.contact?.email || "", phone: normalized.contact?.phone || "",
      linkedin: normalized.contact?.linkedin || "", github: normalized.contact?.github || "",
      website: normalized.contact?.website || "",
    });
    if (goToPreview) navigate("/preview");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    syncFormAndData({
      name: form.name, title: form.title, about: form.about, photo: form.photo,
      skills: form.skills.split(",").map(s => s.trim()).filter(Boolean),
      education: form.education, experience: form.experience,
      projects: form.projects.filter(p => p.title),
      contact: { email: form.email, phone: form.phone, linkedin: form.linkedin, github: form.github, website: form.website },
    });
  };

  const handleUpload = async (file) => {
    if (!file) return;
    const ext = file.name.split(".").pop().toLowerCase();
    if (!["pdf", "docx"].includes(ext)) { setUploadStatus({ type: "error", msg: "Only PDF or DOCX files." }); return; }
    setUploading(true); setUploadStatus(null);
    const fd = new FormData(); fd.append("resume", file);
    try {
      const res = await axios.post("/api/parse-resume", fd);
      const d = res.data.data;
      syncFormAndData(d, false);
      setUploadStatus({ type: "success", msg: `Parsed! Found ${d.skills?.length || 0} skills, ${d.projects?.length || 0} projects.` });
    } catch (err) {
      setUploadStatus({ type: "error", msg: err.response?.data?.error || "Parse failed." });
    } finally { setUploading(false); }
  };

  const handleLinkedInSuccess = (profileData) => {
    setLinkedInConnected(true);
    syncFormAndData(profileData, false);
    setUploadStatus({ type: "linkedin", msg: `LinkedIn profile imported for ${profileData.name}` });
    setMode("form");
    setActiveSection("basic");
    setSidebarOpen(false);
  };

  const goToSection = (id) => {
    setActiveSection(id);
    setSidebarOpen(false);
  };

  const inp = {
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fffae6",
    padding: "12px 16px", fontFamily: "'Outfit',sans-serif", fontSize: "14px", width: "100%",
    outline: "none", borderRadius: "4px", transition: "border-color 0.2s, box-shadow 0.2s",
  };
  const lbl = {
    fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.2em",
    textTransform: "uppercase", color: `${accentAlt}80`, display: "block", marginBottom: "6px",
  };
  const fi = (e) => { e.target.style.borderColor = `${accentAlt}60`; e.target.style.boxShadow = `0 0 0 3px ${accentAlt}08`; };
  const fo = (e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; };

  const sectionLabel = sections.find(s => s.id === activeSection)?.label || "Identity";

  return (
    <div style={{ minHeight: "100vh", background: "#03020a", position: "relative", paddingTop: "64px" }}>
      <style>{`
        /* ── RESPONSIVE LAYOUT ── */
        .input-layout {
          position: relative; zIndex: 1;
          max-width: 1100px; margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
          padding: 40px 40px 80px;
        }
        .input-sidebar { display: block; }
        .mobile-top-bar { display: none; }
        .mobile-sidebar-drawer {
          display: none;
        }

        @media (max-width: 768px) {
          .input-layout {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 16px 16px 80px;
          }
          .input-sidebar { display: none; }
          .mobile-top-bar {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            padding: 12px 16px;
            background: rgba(0,0,0,0.4);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            position: sticky;
            top: 64px;
            z-index: 50;
            backdrop-filter: blur(12px);
          }
          .mobile-sidebar-drawer {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 200;
          }
          .mobile-drawer-overlay {
            position: absolute; inset: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(4px);
          }
          .mobile-drawer-panel {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            background: #0d0b1a;
            border-top: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px 20px 0 0;
            padding: 24px 20px 40px;
            max-height: 80vh;
            overflow-y: auto;
          }
          .mobile-drawer-handle {
            width: 40px; height: 4px;
            background: rgba(255,255,255,0.15);
            border-radius: 2px;
            margin: 0 auto 20px;
          }
        }

        /* Section progress pills */
        .section-pills {
          display: flex; gap: 6px; flex-wrap: nowrap;
          overflow-x: auto; padding-bottom: 2px;
        }
        .section-pills::-webkit-scrollbar { display: none; }
        .section-pill {
          padding: 5px 12px;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.05em;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.2s;
          background: none;
        }

        /* Form grid */
        .form-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .form-2col { grid-template-columns: 1fr; }
          .form-span2 { grid-column: 1 !important; }
        }
      `}</style>

      <Navbar step={2} />

      {showLinkedIn && (
        <LinkedInModal onClose={() => setShowLinkedIn(false)} onSuccess={handleLinkedInSuccess} accent={accent} accentAlt={accentAlt} />
      )}

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="mobile-sidebar-drawer">
          <div className="mobile-drawer-overlay" onClick={() => setSidebarOpen(false)} />
          <div className="mobile-drawer-panel">
            <div className="mobile-drawer-handle" />

            {/* LinkedIn in drawer */}
            <button onClick={() => { setShowLinkedIn(true); setSidebarOpen(false); }} style={{ width: "100%", padding: "13px 14px", background: linkedInConnected ? "rgba(10,102,194,0.15)" : "rgba(10,102,194,0.1)", border: `1px solid ${linkedInConnected ? "rgba(10,102,194,0.6)" : "rgba(10,102,194,0.25)"}`, borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "28px", height: "28px", background: LI_BLUE, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "white", fontFamily: "'Syne',sans-serif", fontWeight: "800", fontSize: "13px" }}>in</span>
              </div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: "600", fontSize: "13px", color: "#fffae6", margin: 0 }}>{linkedInConnected ? "LinkedIn Connected" : "Import from LinkedIn"}</p>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", color: linkedInConnected ? "#22c55e" : "rgba(255,250,230,0.3)", margin: 0 }}>{linkedInConnected ? "● SYNCED" : "One-click import"}</p>
              </div>
              {linkedInConnected && <span style={{ color: "#22c55e" }}>✓</span>}
            </button>

            {/* Mode toggle in drawer */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,250,230,0.3)", marginBottom: "8px", textTransform: "uppercase" }}>Input Mode</div>
              <div style={{ display: "flex", gap: "8px" }}>
                {[{ id: "form", label: "✏ Manual" }, { id: "upload", label: "⬆ Resume" }].map(m => (
                  <button key={m.id} onClick={() => { setMode(m.id); setSidebarOpen(false); }} style={{ flex: 1, padding: "10px", background: mode === m.id ? `${accent}20` : "transparent", border: `1px solid ${mode === m.id ? accent + "50" : "rgba(255,255,255,0.08)"}`, color: mode === m.id ? "#fffae6" : "rgba(255,250,230,0.4)", fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer", borderRadius: "6px", transition: "all 0.2s" }}>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Section links in drawer */}
            {mode === "form" && (
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,250,230,0.3)", marginBottom: "8px", textTransform: "uppercase" }}>Jump to Section</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {sections.map(s => (
                    <button key={s.id} onClick={() => goToSection(s.id)} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "11px 14px", background: activeSection === s.id ? `${accent}18` : "rgba(255,255,255,0.03)", border: `1px solid ${activeSection === s.id ? accent + "40" : "rgba(255,255,255,0.06)"}`, color: activeSection === s.id ? "#fffae6" : "rgba(255,250,230,0.5)", fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer", borderRadius: "8px", transition: "all 0.2s" }}>
                      <span style={{ color: `${accent}80` }}>{s.icon}</span>{s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Photo preview in drawer */}
            {form.photo && (
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", overflow: "hidden", border: `2px solid ${accentAlt}40` }}>
                  <img src={form.photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", color: "rgba(255,250,230,0.5)", margin: 0 }}>Profile photo loaded</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, opacity: 0.3 }}>
        <ParticleField color={accent} count={60} speed={0.2} />
      </div>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: `radial-gradient(ellipse 70% 50% at 20% 30%, ${accent}10 0%, transparent 60%)` }} />

      {/* ── MOBILE TOP BAR ── */}
      <div className="mobile-top-bar">
        {/* LinkedIn quick button */}
        <button onClick={() => setShowLinkedIn(true)} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 12px", background: linkedInConnected ? "rgba(10,102,194,0.2)" : "rgba(10,102,194,0.1)", border: `1px solid rgba(10,102,194,${linkedInConnected ? "0.6" : "0.3"})`, borderRadius: "6px", cursor: "pointer", flexShrink: 0 }}>
          <div style={{ width: "18px", height: "18px", background: LI_BLUE, borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontFamily: "'Syne',sans-serif", fontWeight: "800", fontSize: "10px" }}>in</span>
          </div>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "11px", color: linkedInConnected ? "#22c55e" : "#fffae6", fontWeight: "600" }}>
            {linkedInConnected ? "✓ Synced" : "LinkedIn"}
          </span>
        </button>

        {/* Section pills */}
        {mode === "form" && (
          <div className="section-pills" style={{ flex: 1 }}>
            {sections.map(s => (
              <button key={s.id} className="section-pill" onClick={() => setActiveSection(s.id)} style={{ borderColor: activeSection === s.id ? accent : "rgba(255,255,255,0.1)", color: activeSection === s.id ? "#fffae6" : "rgba(255,250,230,0.4)", background: activeSection === s.id ? `${accent}20` : "transparent" }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>
        )}

        {/* Mode toggle for mobile */}
        {mode === "upload" && (
          <button onClick={() => setMode("form")} style={{ padding: "7px 12px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", color: "rgba(255,250,230,0.5)", fontFamily: "'Outfit',sans-serif", fontSize: "11px", cursor: "pointer" }}>
            ✏ Form
          </button>
        )}
        {mode === "form" && (
          <button onClick={() => setMode("upload")} style={{ padding: "7px 12px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", color: "rgba(255,250,230,0.5)", fontFamily: "'Outfit',sans-serif", fontSize: "11px", cursor: "pointer", flexShrink: 0 }}>
            ⬆ Resume
          </button>
        )}

        {/* Menu toggle */}
        <button onClick={() => setSidebarOpen(true)} style={{ padding: "7px 10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", color: "rgba(255,250,230,0.6)", cursor: "pointer", fontSize: "14px", flexShrink: 0 }}>
          ☰
        </button>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="input-layout">

        {/* ── DESKTOP SIDEBAR ── */}
        <div className="input-sidebar">
          {/* LinkedIn */}
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => setShowLinkedIn(true)} style={{ width: "100%", padding: "12px 14px", background: linkedInConnected ? "rgba(10,102,194,0.15)" : "rgba(10,102,194,0.08)", border: `1px solid ${linkedInConnected ? "rgba(10,102,194,0.6)" : "rgba(10,102,194,0.25)"}`, borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(10,102,194,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = linkedInConnected ? "rgba(10,102,194,0.15)" : "rgba(10,102,194,0.08)"}>
              <div style={{ width: "28px", height: "28px", background: LI_BLUE, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "white", fontFamily: "'Syne',sans-serif", fontWeight: "800", fontSize: "13px" }}>in</span>
              </div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: "600", fontSize: "12px", color: "#fffae6", margin: 0 }}>{linkedInConnected ? "LinkedIn Connected" : "Import from LinkedIn"}</p>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", color: linkedInConnected ? "#22c55e" : "rgba(255,250,230,0.3)", margin: 0, letterSpacing: "0.08em" }}>{linkedInConnected ? "● SYNCED" : "One-click import"}</p>
              </div>
              {linkedInConnected && <span style={{ color: "#22c55e", fontSize: "15px" }}>✓</span>}
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", color: "rgba(255,250,230,0.2)", letterSpacing: "0.15em" }}>OR</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Mode toggle */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,250,230,0.3)", marginBottom: "10px", textTransform: "uppercase" }}>Input Mode</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[{ id: "form", label: "✏  Manual Form" }, { id: "upload", label: "⬆  Upload Resume" }].map(m => (
                <button key={m.id} onClick={() => setMode(m.id)} style={{ padding: "10px 14px", textAlign: "left", background: mode === m.id ? `${accent}18` : "transparent", border: `1px solid ${mode === m.id ? accent + "50" : "rgba(255,255,255,0.06)"}`, color: mode === m.id ? "#fffae6" : "rgba(255,250,230,0.4)", fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer", borderRadius: "4px", transition: "all 0.2s" }}>
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section nav */}
          {mode === "form" && (
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,250,230,0.3)", marginBottom: "10px", textTransform: "uppercase" }}>Sections</div>
              {sections.map(s => (
                <button key={s.id} onClick={() => setActiveSection(s.id)} style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "10px 14px", background: activeSection === s.id ? `${accent}15` : "transparent", border: `1px solid ${activeSection === s.id ? accent + "40" : "transparent"}`, color: activeSection === s.id ? "#fffae6" : "rgba(255,250,230,0.4)", fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer", borderRadius: "4px", marginBottom: "4px", textAlign: "left", transition: "all 0.2s" }}>
                  <span style={{ color: `${accent}80`, fontFamily: "monospace", fontSize: "14px" }}>{s.icon}</span>{s.label}
                </button>
              ))}
            </div>
          )}

          {/* Photo preview */}
          {form.photo && (
            <div style={{ marginTop: "20px", padding: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", color: "rgba(255,250,230,0.3)", letterSpacing: "0.15em", marginBottom: "8px", textTransform: "uppercase" }}>Profile Photo</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: `2px solid ${accentAlt}40` }}>
                  <img src={form.photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "11px", color: "rgba(255,250,230,0.5)", margin: 0 }}>Photo loaded</p>
                  <button onClick={() => set("photo", "")} style={{ background: "none", border: "none", fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", color: "rgba(255,77,0,0.5)", cursor: "pointer", padding: 0 }}>remove ✕</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── MAIN CONTENT ── */}
        <div>
          {/* Header */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ width: "20px", height: "1px", background: accentAlt }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.3em", color: accentAlt, textTransform: "uppercase" }}>Step 02 of 03</span>
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,5vw,36px)", fontWeight: "800", letterSpacing: "-0.02em", color: "#fffae6" }}>
              {mode === "form" ? `${sectionLabel}` : "Upload & auto-fill"}
            </h1>
          </div>

          {/* Status banner */}
          {uploadStatus && (
            <div style={{ marginBottom: "20px", padding: "12px 16px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", background: uploadStatus.type === "linkedin" ? "rgba(10,102,194,0.1)" : uploadStatus.type === "success" ? "rgba(0,245,212,0.08)" : "rgba(255,77,0,0.08)", border: `1px solid ${uploadStatus.type === "linkedin" ? "rgba(10,102,194,0.4)" : uploadStatus.type === "success" ? "rgba(0,245,212,0.3)" : "rgba(255,77,0,0.3)"}`, color: uploadStatus.type === "linkedin" ? "#60a5fa" : uploadStatus.type === "success" ? "#00f5d4" : "#ff6b3d", fontFamily: "'Outfit',sans-serif", fontSize: "13px" }}>
              {uploadStatus.type === "linkedin" && <div style={{ width: "20px", height: "20px", background: LI_BLUE, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "10px", color: "white", flexShrink: 0 }}>in</div>}
              <span style={{ flex: 1 }}>{uploadStatus.msg}</span>
              {(uploadStatus.type === "linkedin" || uploadStatus.type === "success") && (
                <button onClick={() => navigate("/preview")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "12px", whiteSpace: "nowrap" }}>
                  Preview Portfolio →
                </button>
              )}
            </div>
          )}

          {/* ── UPLOAD MODE ── */}
          {mode === "upload" && (
            <div>
              <div onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleUpload(e.dataTransfer.files[0]); }}
                onClick={() => fileRef.current.click()}
                style={{ border: `2px dashed ${dragOver ? accentAlt : accent + "40"}`, borderRadius: "8px", padding: "clamp(32px,8vw,60px) 24px", textAlign: "center", cursor: "pointer", background: dragOver ? `${accentAlt}08` : `${accent}05`, transition: "all 0.3s" }}>
                {uploading ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "40px", height: "40px", border: `2px solid ${accent}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    <p style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(255,250,230,0.5)", fontSize: "14px", margin: 0 }}>Parsing your resume…</p>
                    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: "36px", marginBottom: "12px", opacity: 0.5 }}>⬆</div>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(16px,4vw,20px)", fontWeight: "700", color: "#fffae6", marginBottom: "8px", margin: "0 0 8px" }}>Drop your resume here</p>
                    <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "13px", color: "rgba(255,250,230,0.3)", margin: 0 }}>PDF or DOCX · max 10MB</p>
                  </>
                )}
              </div>
              <input ref={fileRef} type="file" accept=".pdf,.docx" style={{ display: "none" }} onChange={e => handleUpload(e.target.files[0])} />
              <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
                <button onClick={() => setMode("form")} style={{ padding: "10px 20px", background: "transparent", border: `1px solid rgba(255,255,255,0.1)`, borderRadius: "6px", color: "rgba(255,250,230,0.4)", fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer" }}>
                  ← Manual Form
                </button>
              </div>
            </div>
          )}

          {/* ── FORM MODE ── */}
          {mode === "form" && (
            <form onSubmit={handleFormSubmit}>

              {/* BASIC */}
              {activeSection === "basic" && (
                <div style={{ display: "grid", gap: "16px" }}>
                  {/* Photo row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", border: `2px solid ${form.photo ? accentAlt + "60" : "rgba(255,255,255,0.1)"}`, background: "rgba(255,255,255,0.05)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {form.photo ? <img src={form.photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: "18px", opacity: 0.3 }}>◎</span>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label style={lbl}>Profile Photo URL</label>
                      <input style={inp} value={form.photo} onChange={e => set("photo", e.target.value)} placeholder="Auto-filled from LinkedIn, or paste a URL" onFocus={fi} onBlur={fo} />
                    </div>
                  </div>
                  <div className="form-2col">
                    <div><label style={lbl}>Full Name *</label><input style={inp} value={form.name} onChange={e => set("name", e.target.value)} required placeholder="Jordan Blake" onFocus={fi} onBlur={fo} /></div>
                    <div><label style={lbl}>Job Title *</label><input style={inp} value={form.title} onChange={e => set("title", e.target.value)} required placeholder="Full Stack Developer" onFocus={fi} onBlur={fo} /></div>
                  </div>
                  <div>
                    <label style={lbl}>About / Summary</label>
                    <textarea style={{ ...inp, resize: "none", minHeight: "100px", lineHeight: "1.7" }} value={form.about} onChange={e => set("about", e.target.value)} placeholder="A compelling story about who you are…" onFocus={fi} onBlur={fo} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="button" onClick={() => setActiveSection("skills")} className="btn-3d btn-plasma" style={{ borderRadius: "4px" }}>Next: Skills →</button>
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {activeSection === "skills" && (
                <div style={{ display: "grid", gap: "16px" }}>
                  <div>
                    <label style={lbl}>Skills (comma-separated)</label>
                    <textarea style={{ ...inp, resize: "none", minHeight: "80px", lineHeight: "1.7" }} value={form.skills} onChange={e => set("skills", e.target.value)} placeholder="React, Three.js, Node.js, TypeScript, AWS…" onFocus={fi} onBlur={fo} />
                  </div>
                  {form.skills && (
                    <div>
                      <div style={lbl}>Live Preview</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {form.skills.split(",").map(s => s.trim()).filter(Boolean).map((s, i) => (
                          <span key={i} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", padding: "4px 10px", borderRadius: "3px", border: `1px solid ${accent}40`, color: `${accent}cc`, background: `${accent}10` }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="button" onClick={() => setActiveSection("projects")} className="btn-3d btn-plasma" style={{ borderRadius: "4px" }}>Next: Projects →</button>
                  </div>
                </div>
              )}

              {/* PROJECTS */}
              {activeSection === "projects" && (
                <div style={{ display: "grid", gap: "14px" }}>
                  {form.projects.map((p, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: `${accent}80`, letterSpacing: "0.15em", textTransform: "uppercase" }}>Project {i + 1}</span>
                        {form.projects.length > 1 && <button type="button" onClick={() => setForm(prev => ({ ...prev, projects: prev.projects.filter((_, j) => j !== i) }))} style={{ background: "none", border: "none", color: "rgba(255,77,0,0.5)", cursor: "pointer", fontSize: "12px", fontFamily: "'JetBrains Mono',monospace" }}>remove ✕</button>}
                      </div>
                      <input style={{ ...inp, marginBottom: "10px" }} placeholder="Project title" value={p.title} onChange={e => setProj(i, "title", e.target.value)} onFocus={fi} onBlur={fo} />
                      <textarea style={{ ...inp, resize: "none", minHeight: "56px" }} placeholder="Impact and description" value={p.description} onChange={e => setProj(i, "description", e.target.value)} onFocus={fi} onBlur={fo} />
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                    <button type="button" onClick={() => setForm(prev => ({ ...prev, projects: [...prev.projects, { title: "", description: "" }] }))} className="btn-3d btn-neon" style={{ borderRadius: "4px", padding: "10px 20px", fontSize: "12px" }}>+ Add Project</button>
                    <button type="button" onClick={() => setActiveSection("career")} className="btn-3d btn-plasma" style={{ borderRadius: "4px" }}>Next: Career →</button>
                  </div>
                </div>
              )}

              {/* CAREER */}
              {activeSection === "career" && (
                <div style={{ display: "grid", gap: "16px" }}>
                  <div>
                    <label style={lbl}>Work Experience</label>
                    <textarea style={{ ...inp, resize: "none", minHeight: "120px", lineHeight: "1.8" }} value={form.experience} onChange={e => set("experience", e.target.value)} placeholder={"Staff Engineer @ Vercel (2022–Present)\nSenior Engineer @ Stripe (2020–2022)"} onFocus={fi} onBlur={fo} />
                  </div>
                  <div>
                    <label style={lbl}>Education</label>
                    <textarea style={{ ...inp, resize: "none", minHeight: "80px", lineHeight: "1.8" }} value={form.education} onChange={e => set("education", e.target.value)} placeholder={"M.S. Computer Science — Stanford, 2019"} onFocus={fi} onBlur={fo} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="button" onClick={() => setActiveSection("contact")} className="btn-3d btn-plasma" style={{ borderRadius: "4px" }}>Next: Contact →</button>
                  </div>
                </div>
              )}

              {/* CONTACT */}
              {activeSection === "contact" && (
                <div style={{ display: "grid", gap: "14px" }}>
                  <div className="form-2col">
                    <div><label style={lbl}>Email</label><input style={inp} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@domain.com" onFocus={fi} onBlur={fo} /></div>
                    <div><label style={lbl}>Phone</label><input style={inp} value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+1 (555) 000-0000" onFocus={fi} onBlur={fo} /></div>
                    <div><label style={lbl}>LinkedIn</label><input style={inp} value={form.linkedin} onChange={e => set("linkedin", e.target.value)} placeholder="https://linkedin.com/in/..." onFocus={fi} onBlur={fo} /></div>
                    <div><label style={lbl}>GitHub</label><input style={inp} value={form.github} onChange={e => set("github", e.target.value)} placeholder="https://github.com/..." onFocus={fi} onBlur={fo} /></div>
                    <div style={{ gridColumn: "1 / -1" }}><label style={lbl}>Website</label><input style={inp} value={form.website} onChange={e => set("website", e.target.value)} placeholder="https://yoursite.dev" onFocus={fi} onBlur={fo} /></div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "8px" }}>
                    <button type="submit" className="btn-3d btn-plasma" style={{ borderRadius: "4px", fontSize: "15px", padding: "15px 36px" }}>
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