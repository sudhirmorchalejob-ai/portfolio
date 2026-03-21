import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParticleField from "../components/ParticleField";
import FloatingGeometry from "../components/FloatingGeometry";

// ─────────────────────────────────────────────
// TEMPLATES DATA — 4 templates
// ─────────────────────────────────────────────
const TEMPLATES = [
  {
    id: "cosmic",
    name: "Cosmic",
    tag: "Dark · Space · Glassmorphism",
    desc: "Deep-space dark theme with neon glows, glassmorphism cards, and gradient typography.",
    geo: "icosahedron",
    accent: "#7b2fff",
    accentAlt: "#00f5d4",
    bg: "#03020a",
    badge: "Most Popular",
  },
  {
    id: "ember",
    name: "Ember",
    tag: "Bold · Warm · Editorial",
    desc: "Volcanic energy with ember tones, strong Syne typography, and cinematic section flow.",
    geo: "dodecahedron",
    accent: "#ff4d00",
    accentAlt: "#ff9a3c",
    bg: "#0a0402",
    badge: "Best for Creatives",
  },
  {
    id: "aurora",
    name: "Aurora",
    tag: "Minimal · Arctic · Clean",
    desc: "Ice-cold minimalism with aurora gradient accents, monospaced precision, and breathable whitespace.",
    geo: "octahedron",
    accent: "#06b6d4",
    accentAlt: "#818cf8",
    bg: "#020b14",
    badge: "New",
  },
  {
    id: "forge",
    name: "Forge",
    tag: "Industrial · Grid · Bold",
    desc: "Raw industrial grid layout with acid-yellow accents, oversized numbers, and brutal section breaks.",
    geo: "torus",
    accent: "#eab308",
    accentAlt: "#f97316",
    bg: "#080701",
    badge: "Dev Favourite",
  },
];

// ─────────────────────────────────────────────
// MINI PREVIEWS
// ─────────────────────────────────────────────
function MiniPreview({ id, accent, accentAlt, bg }) {
  const previews = {
    cosmic: (
      <div style={{ width:"100%", height:"100%", background: bg, padding:"14px", overflow:"hidden" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px" }}>
          <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:`${accent}30`, border:`1px solid ${accent}50` }} />
          <div>
            <div style={{ width:"60px", height:"8px", background:`linear-gradient(90deg,${accent},${accentAlt})`, borderRadius:"2px", marginBottom:"4px" }} />
            <div style={{ width:"40px", height:"5px", background:`${accent}30`, borderRadius:"2px" }} />
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", marginBottom:"8px" }}>
          {[...Array(4)].map((_,i) => (
            <div key={i} style={{ background:`${accent}08`, border:`1px solid ${accent}20`, borderRadius:"5px", padding:"6px 8px" }}>
              <div style={{ width:"30px", height:"5px", background:`${i%2===0?accent:accentAlt}50`, borderRadius:"2px", marginBottom:"4px" }} />
              <div style={{ width:"100%", height:"3px", background:"rgba(255,255,255,0.06)", borderRadius:"1px", marginBottom:"2px" }} />
              <div style={{ width:"70%", height:"3px", background:"rgba(255,255,255,0.06)", borderRadius:"1px" }} />
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:"4px" }}>
          {["React","Go","AWS","k8s"].map((s,i)=>(
            <span key={i} style={{ fontSize:"7px", padding:"2px 5px", border:`1px solid ${accent}40`, borderRadius:"2px", color:`${accent}cc`, fontFamily:"monospace" }}>{s}</span>
          ))}
        </div>
      </div>
    ),
    ember: (
      <div style={{ width:"100%", height:"100%", background: bg, overflow:"hidden" }}>
        <div style={{ height:"2px", background:`linear-gradient(90deg,${accent},${accentAlt})` }} />
        <div style={{ padding:"14px" }}>
          <div style={{ width:"80px", height:"12px", background:`linear-gradient(90deg,${accent},${accentAlt})`, borderRadius:"2px", marginBottom:"5px" }} />
          <div style={{ width:"55px", height:"7px", background:`${accent}25`, borderRadius:"2px", marginBottom:"12px" }} />
          {[...Array(3)].map((_,i)=>(
            <div key={i} style={{ display:"flex", gap:"8px", alignItems:"center", marginBottom:"8px" }}>
              <div style={{ width:"2px", height:"20px", background:`${accent}${Math.floor((0.8-i*0.2)*255).toString(16).padStart(2,"0")}`, borderRadius:"1px", flexShrink:0 }} />
              <div style={{ flex:1 }}>
                <div style={{ width:`${65-i*12}%`, height:"5px", background:`${accentAlt}25`, borderRadius:"2px", marginBottom:"3px" }} />
                <div style={{ width:`${85-i*8}%`, height:"3px", background:"rgba(255,255,255,0.06)", borderRadius:"1px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    aurora: (
      <div style={{ width:"100%", height:"100%", background: bg, padding:"14px", overflow:"hidden" }}>
        <div style={{ borderBottom:`1px solid ${accent}20`, paddingBottom:"10px", marginBottom:"10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ width:"55px", height:"9px", background:`linear-gradient(90deg,${accent},${accentAlt})`, borderRadius:"2px", marginBottom:"4px" }} />
            <div style={{ width:"38px", height:"5px", background:`${accent}25`, borderRadius:"2px" }} />
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"3px", alignItems:"flex-end" }}>
            {[40,28,32].map((w,i)=><div key={i} style={{ width:`${w}px`, height:"3px", background:`${accentAlt}${i===0?"80":"30"}`, borderRadius:"1px" }} />)}
          </div>
        </div>
        <div style={{ display:"flex", gap:"6px", marginBottom:"8px" }}>
          {["TS","Rust","Go"].map((s,i)=>(
            <span key={i} style={{ fontSize:"7px", padding:"3px 6px", background:`${accent}15`, border:`1px solid ${accent}30`, borderRadius:"3px", color:`${accent}cc`, fontFamily:"monospace" }}>{s}</span>
          ))}
        </div>
        {[...Array(3)].map((_,i)=>(
          <div key={i} style={{ height:"4px", background:`${accent}${i===0?"30":"12"}`, borderRadius:"2px", marginBottom:"4px", width:`${100-i*15}%` }} />
        ))}
      </div>
    ),
    forge: (
      <div style={{ width:"100%", height:"100%", background: bg, padding:"14px", overflow:"hidden" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"10px" }}>
          <div style={{ fontFamily:"monospace", fontSize:"28px", fontWeight:"900", color:`${accent}`, lineHeight:1, letterSpacing:"-2px", opacity:0.9 }}>JD</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3px" }}>
            {[...Array(4)].map((_,i)=><div key={i} style={{ width:"10px", height:"10px", background:i%2===0?`${accent}40`:`${accentAlt}20`, border:`1px solid ${accent}30` }} />)}
          </div>
        </div>
        <div style={{ height:"1px", background:`${accent}40`, marginBottom:"8px" }} />
        <div style={{ width:"70px", height:"6px", background:`${accent}`, borderRadius:"1px", marginBottom:"5px" }} />
        {[...Array(3)].map((_,i)=>(
          <div key={i} style={{ display:"flex", gap:"4px", alignItems:"center", marginBottom:"5px" }}>
            <div style={{ width:"4px", height:"4px", background:accent, flexShrink:0 }} />
            <div style={{ width:`${75-i*15}%`, height:"4px", background:`rgba(255,255,255,0.1)`, borderRadius:"1px" }} />
          </div>
        ))}
      </div>
    ),
  };
  return previews[id] || previews.cosmic;
}

// ─────────────────────────────────────────────
// 3D TILT CARD
// ─────────────────────────────────────────────
function TemplateCard({ t, selected, onSelect }) {
  const cardRef = useRef(null);
  const onMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(900px) rotateY(${x*16}deg) rotateX(${-y*12}deg) scale(1.04)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)"; };

  return (
    <div ref={cardRef} onClick={() => onSelect(t.id)} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ cursor:"pointer", transition:"transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s", transformStyle:"preserve-3d", borderRadius:"14px", overflow:"hidden",
        boxShadow: selected ? `0 0 0 2px ${t.accent}, 0 24px 64px ${t.accent}50, 0 0 100px ${t.accent}15` : "0 8px 40px rgba(0,0,0,0.6)",
      }}>
      {/* Preview area */}
      <div style={{ height:"200px", background: t.bg, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:"140px", height:"140px", opacity:0.65 }}>
          <FloatingGeometry type={t.geo} color={t.accent} size={0.8} />
        </div>
        <div style={{ position:"absolute", inset:0, right:"60px" }}>
          <MiniPreview id={t.id} accent={t.accent} accentAlt={t.accentAlt} bg={t.bg} />
        </div>
        <div style={{ position:"absolute", top:0, right:"50px", width:"90px", height:"100%", background:`linear-gradient(90deg, transparent, ${t.bg})` }} />
        {/* Badge */}
        <div style={{ position:"absolute", top:"12px", left:"12px", padding:"3px 10px", background:`${t.accent}22`, border:`1px solid ${t.accent}50`, borderRadius:"20px" }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.1em", color:t.accent }}>{t.badge}</span>
        </div>
      </div>
      {/* Info */}
      <div style={{ background:`linear-gradient(135deg, rgba(8,7,20,0.98), rgba(12,10,28,0.98))`, borderTop:`1px solid ${t.accent}25`, padding:"18px 22px 20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"6px" }}>
          <div>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.2em", color:`${t.accent}80`, textTransform:"uppercase", display:"block", marginBottom:"4px" }}>{t.tag}</span>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"20px", fontWeight:"800", color:"#fffae6", margin:0, letterSpacing:"-0.01em" }}>{t.name}</h3>
          </div>
          <div style={{ width:"22px", height:"22px", borderRadius:"50%", border:`2px solid ${selected?t.accent:"rgba(255,255,255,0.12)"}`, background:selected?t.accent:"transparent", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.3s", flexShrink:0, marginTop:"4px" }}>
            {selected && <span style={{ color:"white", fontSize:"11px" }}>✓</span>}
          </div>
        </div>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"12px", color:"rgba(255,250,230,0.42)", lineHeight:1.65, margin:"0 0 12px" }}>{t.desc}</p>
        <div style={{ height:"1.5px", background:`linear-gradient(90deg,${t.accent},${t.accentAlt})`, borderRadius:"1px", opacity:selected?1:0.25, transition:"opacity 0.3s" }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = target / 60;
        const t = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(start));
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─────────────────────────────────────────────
// FEATURE CARD
// ─────────────────────────────────────────────
function FeatureCard({ icon, title, desc, accent, delay = 0 }) {
  return (
    <div className="fade-up" style={{ animationDelay:`${delay}s`, background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"12px", padding:"28px 24px", position:"relative", overflow:"hidden", transition:"border-color 0.3s, transform 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${accent}40`; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"1px", background:`linear-gradient(90deg, transparent, ${accent}50, transparent)` }} />
      <div style={{ width:"44px", height:"44px", background:`${accent}15`, border:`1px solid ${accent}30`, borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", marginBottom:"16px" }}>{icon}</div>
      <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:"700", fontSize:"16px", color:"#fffae6", marginBottom:"8px" }}>{title}</h3>
      <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.42)", lineHeight:"1.7", margin:0 }}>{desc}</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function TemplatePage({ selectedTemplate, onSelect }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = TEMPLATES
    .filter(t => {
      if (activeTab === "dark") return ["cosmic","forge","aurora"].includes(t.id);
      if (activeTab === "warm") return ["ember"].includes(t.id);
      return true;
    })
    .filter(t => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        t.tag.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q) ||
        t.badge.toLowerCase().includes(q)
      );
    });

  const features = [
    { icon:"⚡", title:"3D Interactive Cards", desc:"Every template features Three.js geometry, mouse-tracked perspective tilt, and particle fields that react to cursor movement.", accent:"#7b2fff" },
    { icon:"🔗", title:"LinkedIn Auto-Import", desc:"One-click OAuth flow imports your name, title, photo, skills, experience, education, and projects directly from LinkedIn.", accent:"#0A66C2" },
    { icon:"📄", title:"Resume Parser", desc:"Upload PDF or DOCX and watch AI extract every field — skills, experience, education, projects — into a structured portfolio instantly.", accent:"#00f5d4" },
    { icon:"🎨", title:"4 Stunning Templates", desc:"Cosmic dark glassmorphism, Ember volcanic editorial, Aurora arctic minimal, and Forge industrial grid — each production-ready.", accent:"#ff4d00" },
    { icon:"📱", title:"Responsive Preview", desc:"Switch between desktop, tablet, and mobile views in real-time. Every template is pixel-perfect across all screen sizes.", accent:"#eab308" },
    { icon:"🖨️", title:"One-Click Export", desc:"Export your portfolio as a print-ready PDF directly from the browser. No third-party tools, no watermarks, no accounts needed.", accent:"#06b6d4" },
  ];

  const stats = [
    { value: 4, suffix: "", label: "Templates" },
    { value: 12, suffix: "+", label: "Fields Auto-Extracted" },
    { value: 3, suffix: "", label: "Import Methods" },
    { value: 100, suffix: "%", label: "Free to Use" },
  ];

  const steps = [
    { n:"01", title:"Pick a Template", desc:"Choose from 4 immersive 3D-designed templates. Each has a unique visual identity.", color:"#7b2fff" },
    { n:"02", title:"Import or Fill", desc:"Connect LinkedIn, upload a resume, or fill the form manually. All fields auto-populate.", color:"#00f5d4" },
    { n:"03", title:"Preview & Export", desc:"See your portfolio live across all devices. Export as PDF with one click.", color:"#ff4d00" },
  ];

  return (
    <div style={{ background:"#03020a", color:"#fffae6", overflowX:"hidden", fontFamily:"'Outfit',sans-serif" }}>

      {/* ── RESPONSIVE CSS ── */}
      <style>{`
        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 0;
        }
        .stat-item {
          text-align: center;
          padding: 12px 8px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stat-item:last-child { border-right: none; }
        .stat-number { font-size: 48px; }
        .stat-label  { font-size: 11px; }

        /* How it works */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 0;
          position: relative;
        }
        .steps-connector {
          position: absolute;
          top: 32px;
          left: calc(16.66% + 20px);
          right: calc(16.66% + 20px);
          height: 1px;
          background: linear-gradient(90deg,#7b2fff,#00f5d4,#ff4d00);
          z-index: 0;
          opacity: 0.3;
        }
        .step-card { padding: 0 24px; position: relative; z-index: 1; }

        /* Import methods */
        .import-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Footer */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        /* Navbar links */
        .nav-links { display: flex; align-items: center; gap: 32px; }

        /* Section padding */
        .section-pad { padding: 100px 48px; }
        .hero-pad { padding: 120px 48px 80px; }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2,1fr);
            gap: 0;
          }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 8px; }
          .stat-item:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,0.06); }
          .stat-item:last-child { border-bottom: none; }
          .stat-item:nth-last-child(2):nth-child(odd) { border-bottom: none; }
          .stat-number { font-size: 40px !important; }
          .stat-label  { font-size: 10px !important; }

          .steps-grid { grid-template-columns: 1fr; gap: 40px; }
          .steps-connector { display: none; }
          .step-card { padding: 0 16px; }

          .import-grid { grid-template-columns: 1fr; gap: 28px; }

          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }

          .nav-links { display: none; }

          .section-pad { padding: 64px 20px; }
          .hero-pad { padding: 100px 20px 60px; }
        }

        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2,1fr); }
          .stat-number { font-size: 36px !important; }
          .footer-grid { grid-template-columns: 1fr; }
          .section-pad { padding: 48px 16px; }
          .hero-pad { padding: 88px 16px 48px; }
        }

        @keyframes ping { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.5);opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      {/* Fixed particles */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }}>
        <ParticleField color="#7b2fff" count={90} speed={0.35} />
      </div>
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,47,255,0.14) 0%, transparent 65%)" }} />
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", background:"radial-gradient(ellipse 50% 40% at 90% 90%, rgba(0,245,212,0.07) 0%, transparent 55%)" }} />

      {/* ── NAVBAR ── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(3,2,10,0.85)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(255,255,255,0.05)", height:"64px", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 clamp(16px, 4vw, 48px)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"32px", height:"32px", background:"linear-gradient(135deg,#7b2fff,#00f5d4)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ color:"white", fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", fontWeight:"700" }}>P3</span>
          </div>
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:"800", fontSize:"17px", letterSpacing:"-0.01em" }}>
            Portfolio<span style={{ color:"#7b2fff" }}>3D</span>
          </span>
        </div>
        <div className="nav-links">
          {["Features","Templates","How It Works"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.45)", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e=>e.target.style.color="#fffae6"} onMouseLeave={e=>e.target.style.color="rgba(255,250,230,0.45)"}>{l}</a>
          ))}
        </div>
        <button onClick={() => selectedTemplate ? navigate("/input") : document.getElementById("templates").scrollIntoView({behavior:"smooth"})}
          style={{ padding:"9px 22px", background:"linear-gradient(135deg,#7b2fff,#5518d4)", border:"none", borderRadius:"6px", color:"white", fontFamily:"'Syne',sans-serif", fontWeight:"700", fontSize:"13px", cursor:"pointer", letterSpacing:"0.03em" }}>
          {selectedTemplate ? "Continue →" : "Get Started"}
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-pad" style={{ position:"relative", zIndex:1, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
        <div style={{ maxWidth:"800px" }}>
          {/* Badge */}
          <div className="fade-up" style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 16px", border:"1px solid rgba(123,47,255,0.35)", borderRadius:"24px", background:"rgba(123,47,255,0.08)", marginBottom:"28px" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#00f5d4", boxShadow:"0 0 8px #00f5d4" }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"#00f5d4", letterSpacing:"0.15em" }}>PORTFOLIO GENERATOR · v2.0</span>
          </div>

          {/* Headline */}
          <h1 className="fade-up" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(48px,8vw,96px)", fontWeight:"800", lineHeight:"0.92", letterSpacing:"-0.04em", marginBottom:"24px", animationDelay:"0.1s" }}>
            <span style={{ display:"block", color:"#fffae6" }}>Your portfolio,</span>
            <span style={{ display:"block", background:"linear-gradient(135deg,#7b2fff 0%,#00f5d4 60%,#a78bfa 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              in another dimension.
            </span>
          </h1>

          <p className="fade-up" style={{ fontFamily:"'Outfit',sans-serif", fontSize:"18px", color:"rgba(255,250,230,0.45)", lineHeight:"1.75", maxWidth:"560px", margin:"0 auto 40px", animationDelay:"0.2s" }}>
            Import from LinkedIn, upload a resume, or fill a form. Get a stunning 3D portfolio in under 2 minutes — no design skills needed.
          </p>

          {/* CTAs */}
          <div className="fade-up" style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap", animationDelay:"0.3s" }}>
            <button onClick={() => document.getElementById("templates").scrollIntoView({behavior:"smooth"})}
              style={{ padding:"15px 36px", background:"linear-gradient(135deg,#7b2fff,#5518d4)", border:"none", borderRadius:"8px", color:"white", fontFamily:"'Syne',sans-serif", fontWeight:"700", fontSize:"15px", cursor:"pointer", boxShadow:"0 8px 32px rgba(123,47,255,0.45)", transition:"all 0.2s", letterSpacing:"0.02em" }}
              onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 12px 40px rgba(123,47,255,0.6)";}}
              onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 8px 32px rgba(123,47,255,0.45)";}}>
              Browse Templates ✦
            </button>
            <button onClick={() => document.getElementById("how-it-works").scrollIntoView({behavior:"smooth"})}
              style={{ padding:"15px 36px", background:"transparent", border:"1px solid rgba(255,255,255,0.12)", borderRadius:"8px", color:"rgba(255,250,230,0.7)", fontFamily:"'Outfit',sans-serif", fontWeight:"500", fontSize:"15px", cursor:"pointer", transition:"all 0.2s" }}
              onMouseEnter={e=>{e.target.style.borderColor="rgba(0,245,212,0.4)";e.target.style.color="#00f5d4";}}
              onMouseLeave={e=>{e.target.style.borderColor="rgba(255,255,255,0.12)";e.target.style.color="rgba(255,250,230,0.7)";}}>
              See How It Works
            </button>
          </div>

          {/* Floating 3D geometry */}
          <div className="fade-up" style={{ width:"220px", height:"220px", margin:"48px auto 0", animationDelay:"0.4s" }}>
            <FloatingGeometry type="icosahedron" color="#7b2fff" size={1.2} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ position:"relative", zIndex:1, borderTop:"1px solid rgba(255,255,255,0.05)", borderBottom:"1px solid rgba(255,255,255,0.05)", padding:"40px 24px" }}>
        <div className="stats-grid" style={{ maxWidth:"1100px", margin:"0 auto" }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number" style={{ fontFamily:"'Syne',sans-serif", fontWeight:"800", background:"linear-gradient(135deg,#7b2fff,#00f5d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1, marginBottom:"8px" }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label" style={{ fontFamily:"'JetBrains Mono',monospace", color:"rgba(255,250,230,0.35)", letterSpacing:"0.15em", textTransform:"uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section-pad" style={{ position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"60px" }}>
            <span className="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", letterSpacing:"0.3em", color:"#00f5d4", textTransform:"uppercase", display:"block", marginBottom:"14px" }}>Why Portfolio3D</span>
            <h2 className="fade-up" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(36px,5vw,56px)", fontWeight:"800", letterSpacing:"-0.03em", margin:"0 0 16px", animationDelay:"0.1s" }}>
              Everything you need.<br /><span style={{ background:"linear-gradient(135deg,#7b2fff,#00f5d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Nothing you don't.</span>
            </h2>
            <p className="fade-up" style={{ fontFamily:"'Outfit',sans-serif", fontSize:"16px", color:"rgba(255,250,230,0.4)", maxWidth:"480px", margin:"0 auto", lineHeight:"1.7", animationDelay:"0.2s" }}>
              Built for developers and designers who want a portfolio that actually stands out.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"20px" }}>
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEMPLATES ── */}
      <section id="templates" style={{ position:"relative", zIndex:1, padding:"clamp(48px,8vw,80px) clamp(16px,4vw,48px) clamp(60px,8vw,100px)", background:"rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"48px" }}>
            <span className="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", letterSpacing:"0.3em", color:"#7b2fff", textTransform:"uppercase", display:"block", marginBottom:"14px" }}>Step 01</span>
            <h2 className="fade-up" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(36px,5vw,56px)", fontWeight:"800", letterSpacing:"-0.03em", margin:"0 0 16px", animationDelay:"0.1s" }}>
              Choose your<br /><span style={{ background:"linear-gradient(135deg,#7b2fff,#ff4d00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>visual universe.</span>
            </h2>
            <p className="fade-up" style={{ fontFamily:"'Outfit',sans-serif", fontSize:"15px", color:"rgba(255,250,230,0.4)", maxWidth:"440px", margin:"0 auto 28px", lineHeight:"1.7", animationDelay:"0.15s" }}>
              4 unique templates. Each 3D-interactive. Each production-ready. Each unforgettable.
            </p>
            {/* Search + Filter */}
            <div className="fade-up" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"14px", animationDelay:"0.2s" }}>
              {/* Search bar */}
              <div style={{ position:"relative", width:"100%", maxWidth:"440px" }}>
                <div style={{ position:"absolute", left:"16px", top:"50%", transform:"translateY(-50%)", color:"rgba(255,250,230,0.3)", fontSize:"15px", pointerEvents:"none" }}>⌕</div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search templates… (e.g. dark, minimal, bold)"
                  style={{
                    width:"100%", padding:"12px 44px 12px 42px",
                    background:"rgba(255,255,255,0.04)",
                    border:"1px solid rgba(255,255,255,0.1)",
                    borderRadius:"10px", color:"#fffae6",
                    fontFamily:"'Outfit',sans-serif", fontSize:"14px",
                    outline:"none", transition:"border-color 0.2s, box-shadow 0.2s",
                    boxSizing:"border-box",
                  }}
                  onFocus={e => { e.target.style.borderColor="rgba(123,47,255,0.6)"; e.target.style.boxShadow="0 0 0 3px rgba(123,47,255,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor="rgba(255,255,255,0.1)"; e.target.style.boxShadow="none"; }}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.1)", border:"none", borderRadius:"50%", width:"20px", height:"20px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"rgba(255,250,230,0.6)", fontSize:"11px", lineHeight:1 }}>
                    ✕
                  </button>
                )}
              </div>
              {/* Filter tabs */}
              <div style={{ display:"inline-flex", gap:"4px", background:"rgba(255,255,255,0.04)", padding:"4px", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.06)" }}>
                {[{id:"all",label:"All"},{id:"dark",label:"Dark"},{id:"warm",label:"Warm"}].map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ padding:"6px 16px", background:activeTab===tab.id?"rgba(123,47,255,0.3)":"transparent", border:`1px solid ${activeTab===tab.id?"rgba(123,47,255,0.5)":"transparent"}`, borderRadius:"5px", color:activeTab===tab.id?"#fffae6":"rgba(255,250,230,0.4)", fontFamily:"'Outfit',sans-serif", fontSize:"13px", cursor:"pointer", transition:"all 0.2s" }}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"22px", marginBottom:"48px", minHeight: filteredTemplates.length === 0 ? "200px" : "auto" }}>
            {filteredTemplates.length > 0 ? filteredTemplates.map((t, i) => (
              <div key={t.id} className="fade-up" style={{ animationDelay:`${i*0.1}s` }}>
                <TemplateCard t={t} selected={selectedTemplate === t.id} onSelect={onSelect} />
              </div>
            )) : (
              <div style={{ gridColumn:"1/-1", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"60px 20px", textAlign:"center" }}>
                <div style={{ fontSize:"48px", marginBottom:"16px", opacity:0.3 }}>◎</div>
                <p style={{ fontFamily:"'Syne',sans-serif", fontSize:"20px", fontWeight:"700", color:"rgba(255,250,230,0.4)", margin:"0 0 8px" }}>
                  No templates found
                </p>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"14px", color:"rgba(255,250,230,0.25)", margin:"0 0 20px" }}>
                  No results for "<span style={{ color:"#7b2fff" }}>{searchQuery}</span>"
                </p>
                <button onClick={() => { setSearchQuery(""); setActiveTab("all"); }} style={{ padding:"9px 24px", background:"rgba(123,47,255,0.15)", border:"1px solid rgba(123,47,255,0.3)", borderRadius:"6px", color:"#a78bfa", fontFamily:"'Outfit',sans-serif", fontSize:"13px", cursor:"pointer" }}>
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <div style={{ textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", gap:"14px" }}>
            <button
              onClick={() => selectedTemplate ? navigate("/input") : null}
              disabled={!selectedTemplate}
              style={{ padding:"16px 48px", background: selectedTemplate ? "linear-gradient(135deg,#7b2fff,#5518d4)" : "rgba(255,255,255,0.05)", border: selectedTemplate ? "none" : "1px solid rgba(255,255,255,0.1)", borderRadius:"8px", color: selectedTemplate ? "white" : "rgba(255,250,230,0.25)", fontFamily:"'Syne',sans-serif", fontWeight:"700", fontSize:"16px", cursor: selectedTemplate ? "pointer" : "not-allowed", transition:"all 0.2s", boxShadow: selectedTemplate ? "0 8px 32px rgba(123,47,255,0.4)" : "none", letterSpacing:"0.02em" }}>
              {selectedTemplate ? `Continue with ${TEMPLATES.find(t=>t.id===selectedTemplate)?.name} →` : "Select a template above to continue"}
            </button>
            {selectedTemplate && (
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"#00f5d4", letterSpacing:"0.1em" }}>
                ✓ {TEMPLATES.find(t=>t.id===selectedTemplate)?.name} — {TEMPLATES.find(t=>t.id===selectedTemplate)?.tag}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="section-pad" style={{ position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:"900px", margin:"0 auto", textAlign:"center" }}>
          <span className="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", letterSpacing:"0.3em", color:"#ff4d00", textTransform:"uppercase", display:"block", marginBottom:"14px" }}>Process</span>
          <h2 className="fade-up" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(36px,5vw,52px)", fontWeight:"800", letterSpacing:"-0.03em", margin:"0 0 60px", animationDelay:"0.1s" }}>
            Three steps to <span style={{ background:"linear-gradient(135deg,#ff4d00,#ff9a3c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>launch.</span>
          </h2>
          <div className="steps-grid">
            <div className="steps-connector" />
            {steps.map((s, i) => (
              <div key={i} className="fade-up step-card" style={{ animationDelay:`${i*0.15}s` }}>
                <div style={{ width:"64px", height:"64px", borderRadius:"50%", background:`${s.color}15`, border:`2px solid ${s.color}50`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", position:"relative" }}>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"18px", fontWeight:"700", color:s.color }}>{s.n}</span>
                  <div style={{ position:"absolute", inset:"-4px", borderRadius:"50%", border:`1px solid ${s.color}20`, animation:"ping 2s ease-out infinite", animationDelay:`${i*0.4}s` }} />
                </div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"18px", fontWeight:"700", color:"#fffae6", marginBottom:"10px" }}>{s.title}</h3>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.4)", lineHeight:"1.7", margin:0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORT METHODS BANNER ── */}
      <section style={{ position:"relative", zIndex:1, padding:"clamp(40px,6vw,64px) clamp(16px,4vw,48px)", background:"linear-gradient(135deg, rgba(123,47,255,0.08) 0%, rgba(0,245,212,0.04) 100%)", borderTop:"1px solid rgba(123,47,255,0.15)", borderBottom:"1px solid rgba(123,47,255,0.15)" }}>
        <div className="import-grid">
          {[
            { icon:"🔗", color:"#0A66C2", title:"LinkedIn Import", desc:"Connect your LinkedIn profile. We auto-import everything in seconds with full OAuth simulation.", label:"One-click" },
            { icon:"📄", color:"#00f5d4", title:"Resume Upload", desc:"Drag and drop your PDF or DOCX. Our parser extracts name, skills, experience, education, and projects.", label:"PDF · DOCX" },
            { icon:"✏️", color:"#7b2fff", title:"Manual Form", desc:"Fill out the sectioned form at your own pace. Skills preview in real-time as you type.", label:"Full Control" },
          ].map((m, i) => (
            <div key={i} className="fade-up" style={{ display:"flex", gap:"16px", alignItems:"flex-start", animationDelay:`${i*0.1}s` }}>
              <div style={{ width:"48px", height:"48px", background:`${m.color}18`, border:`1px solid ${m.color}35`, borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", flexShrink:0 }}>{m.icon}</div>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"15px", fontWeight:"700", color:"#fffae6", margin:0 }}>{m.title}</h3>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", padding:"2px 8px", background:`${m.color}20`, border:`1px solid ${m.color}40`, borderRadius:"10px", color:m.color, letterSpacing:"0.1em" }}>{m.label}</span>
                </div>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.38)", lineHeight:"1.65", margin:0 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad" style={{ position:"relative", zIndex:1, textAlign:"center" }}>
        <div style={{ maxWidth:"640px", margin:"0 auto" }}>
          <h2 className="fade-up" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(40px,6vw,68px)", fontWeight:"800", letterSpacing:"-0.04em", lineHeight:"0.92", marginBottom:"20px" }}>
            <span style={{ color:"#fffae6" }}>Ready to stand</span><br />
            <span style={{ background:"linear-gradient(135deg,#7b2fff,#00f5d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>out from the crowd?</span>
          </h2>
          <p className="fade-up" style={{ fontFamily:"'Outfit',sans-serif", fontSize:"16px", color:"rgba(255,250,230,0.4)", marginBottom:"36px", lineHeight:"1.7", animationDelay:"0.1s" }}>
            Join thousands of developers who launched their career with a Portfolio3D portfolio.
          </p>
          <div className="fade-up" style={{ animationDelay:"0.2s" }}>
            <button onClick={() => document.getElementById("templates").scrollIntoView({behavior:"smooth"})}
              style={{ padding:"18px 52px", background:"linear-gradient(135deg,#7b2fff,#5518d4)", border:"none", borderRadius:"8px", color:"white", fontFamily:"'Syne',sans-serif", fontWeight:"800", fontSize:"17px", cursor:"pointer", boxShadow:"0 12px 48px rgba(123,47,255,0.5)", transition:"all 0.3s", letterSpacing:"0.02em" }}
              onMouseEnter={e=>{e.target.style.transform="translateY(-3px) scale(1.02)";e.target.style.boxShadow="0 20px 60px rgba(123,47,255,0.65)";}}
              onMouseLeave={e=>{e.target.style.transform="translateY(0) scale(1)";e.target.style.boxShadow="0 12px 48px rgba(123,47,255,0.5)";}}>
              Build My Portfolio — Free ✦
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position:"relative", zIndex:1, borderTop:"1px solid rgba(255,255,255,0.06)", background:"rgba(0,0,0,0.4)", padding:"48px 24px 28px" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
                <div style={{ width:"32px", height:"32px", background:"linear-gradient(135deg,#7b2fff,#00f5d4)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }} />
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:"800", fontSize:"18px" }}>Portfolio<span style={{ color:"#7b2fff" }}>3D</span></span>
              </div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.35)", lineHeight:"1.75", maxWidth:"260px", margin:"0 0 20px" }}>
                The most immersive portfolio generator on the web. Built with React, Three.js, and a lot of love for craft.
              </p>
              <div style={{ display:"flex", gap:"10px" }}>
                {[
                  { label:"in", color:"#0A66C2", href:"#" },
                  { label:"gh", color:"#fffae6", href:"#" },
                  { label:"tw", color:"#1DA1F2", href:"#" },
                ].map((s,i)=>(
                  <a key={i} href={s.href} style={{ width:"32px", height:"32px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:s.color, textDecoration:"none", transition:"all 0.2s" }}
                    onMouseEnter={e=>{e.target.style.borderColor=s.color;e.target.style.background=`${s.color}15`;}}
                    onMouseLeave={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.background="rgba(255,255,255,0.05)";}}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Links */}
            {[
              { title:"Templates", links:["Cosmic","Ember","Aurora","Forge"] },
              { title:"Features", links:["LinkedIn Import","Resume Parser","3D Preview","PDF Export"] },
              { title:"Resources", links:["Documentation","GitHub","Changelog","Support"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:"13px", fontWeight:"700", color:"#fffae6", marginBottom:"16px", letterSpacing:"0.05em" }}>{col.title}</h4>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ display:"block", fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"rgba(255,250,230,0.35)", textDecoration:"none", marginBottom:"10px", transition:"color 0.2s" }}
                    onMouseEnter={e=>e.target.style.color="#7b2fff"} onMouseLeave={e=>e.target.style.color="rgba(255,250,230,0.35)"}>{l}</a>
                ))}
              </div>
            ))}
          </div>
          {/* Bottom bar */}
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"24px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"12px" }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(255,250,230,0.2)", letterSpacing:"0.08em" }}>
              © {new Date().getFullYear()} Portfolio3D · Built with React + Three.js
            </span>
            <div style={{ display:"flex", gap:"24px" }}>
              {["Privacy","Terms","MIT License"].map(l=>(
                <a key={l} href="#" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:"rgba(255,250,230,0.2)", textDecoration:"none", letterSpacing:"0.05em", transition:"color 0.2s" }}
                  onMouseEnter={e=>e.target.style.color="#7b2fff"} onMouseLeave={e=>e.target.style.color="rgba(255,250,230,0.2)"}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}