import React, { useState, useEffect } from "react";
import axios from "axios";

// Step states: idle → connecting → picking → fetching → done → error
export default function LinkedInModal({ onClose, onSuccess, accent = "#7b2fff", accentAlt = "#00f5d4" }) {
  const [step, setStep] = useState("idle"); // idle | connecting | picking | fetching | done | error
  const [profiles, setProfiles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [fetchedProfile, setFetchedProfile] = useState(null);

  // Trap Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Step 1: Initiate mock OAuth
  const initiateOAuth = async () => {
    setStep("connecting");
    try {
      const res = await axios.get("/auth/linkedin");
      const { authUrl } = res.data;
      // Extract mock code from URL (in real OAuth this would open a popup/redirect)
      const url = new URL(authUrl);
      const code = url.searchParams.get("code");
      await fetchProfiles(code);
    } catch (err) {
      setStep("error");
      setErrorMsg("Could not connect to LinkedIn. Make sure the server is running.");
    }
  };

  // Step 2: Exchange code for profile list
  const fetchProfiles = async (code) => {
    try {
      const res = await axios.get(`/auth/linkedin/callback?code=${code}`);
      setProfiles(res.data.profiles);
      setStep("picking");
    } catch (err) {
      setStep("error");
      setErrorMsg("Failed to fetch LinkedIn profiles.");
    }
  };

  // Step 3: Fetch full data for selected profile
  const fetchFullProfile = async (id) => {
    setSelectedId(id);
    setStep("fetching");
    try {
      const res = await axios.get(`/auth/linkedin/profile/${id}`);
      setFetchedProfile(res.data.data);
      setStep("done");
    } catch (err) {
      setStep("error");
      setErrorMsg("Failed to load profile data.");
    }
  };

  // Step 4: Apply to portfolio
  const applyProfile = () => {
    onSuccess(fetchedProfile);
    onClose();
  };

  const overlayStyle = {
    position: "fixed", inset: 0, zIndex: 1000,
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(12px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "20px",
  };

  const modalStyle = {
    background: "linear-gradient(135deg, #0d0b1a 0%, #0a0814 100%)",
    border: `1px solid ${accent}30`,
    borderRadius: "16px",
    width: "100%",
    maxWidth: "520px",
    boxShadow: `0 0 0 1px ${accent}15, 0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${accent}20`,
    overflow: "hidden",
    position: "relative",
  };

  const LI_BLUE = "#0A66C2";

  return (
    <div style={overlayStyle} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalStyle}>

        {/* Top glow line */}
        <div style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${LI_BLUE}, ${accentAlt}, transparent)` }} />

        {/* Header */}
        <div style={{ padding: "24px 28px 20px", borderBottom: `1px solid rgba(255,255,255,0.05)`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* LinkedIn logo */}
            <div style={{ width: "36px", height: "36px", background: LI_BLUE, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontFamily: "'Syne',sans-serif", fontWeight: "800", fontSize: "16px", lineHeight: 1 }}>in</span>
            </div>
            <div>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "15px", color: "#fffae6", margin: 0 }}>Connect LinkedIn</p>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: "rgba(255,250,230,0.3)", margin: 0, letterSpacing: "0.1em" }}>
                {step === "idle" && "Authorize to import your profile"}
                {step === "connecting" && "Authenticating…"}
                {step === "picking" && `${profiles.length} profiles found`}
                {step === "fetching" && "Loading full profile…"}
                {step === "done" && "Profile ready to apply"}
                {step === "error" && "Connection failed"}
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", color: "rgba(255,250,230,0.4)", width: "30px", height: "30px", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px" }}>

          {/* IDLE */}
          {step === "idle" && (
            <div>
              {/* What gets imported */}
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "13px", color: "rgba(255,250,230,0.4)", marginBottom: "20px", lineHeight: "1.7" }}>
                We'll import your profile data directly into your portfolio. No passwords stored.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
                {[
                  { icon: "◈", label: "Name & Title" },
                  { icon: "◎", label: "Profile Photo" },
                  { icon: "◉", label: "Work Experience" },
                  { icon: "◐", label: "Education" },
                  { icon: "◑", label: "Skills & Tools" },
                  { icon: "→", label: "Contact Info" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px" }}>
                    <span style={{ color: accentAlt, fontSize: "12px", fontFamily: "monospace" }}>{item.icon}</span>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", color: "rgba(255,250,230,0.55)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={initiateOAuth} style={{
                width: "100%", padding: "14px", background: LI_BLUE, border: "none", borderRadius: "8px",
                color: "white", fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "14px",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                transition: "all 0.2s", letterSpacing: "0.02em",
              }}>
                <div style={{ width: "18px", height: "18px", background: "rgba(255,255,255,0.2)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontWeight: "900", fontSize: "11px" }}>in</span>
                </div>
                Sign in with LinkedIn
              </button>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: "rgba(255,250,230,0.2)", textAlign: "center", marginTop: "12px", letterSpacing: "0.05em" }}>
                DEMO MODE · No real OAuth credentials required
              </p>
            </div>
          )}

          {/* CONNECTING */}
          {step === "connecting" && (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ position: "relative", width: "60px", height: "60px", margin: "0 auto 20px" }}>
                <div style={{ position: "absolute", inset: 0, border: `2px solid ${LI_BLUE}30`, borderRadius: "50%" }} />
                <div style={{ position: "absolute", inset: 0, border: `2px solid transparent`, borderTopColor: LI_BLUE, borderRadius: "50%", animation: "spin 0.9s linear infinite" }} />
                <div style={{ position: "absolute", inset: "12px", background: LI_BLUE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontWeight: "800", fontSize: "13px" }}>in</span>
                </div>
              </div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "14px", color: "rgba(255,250,230,0.6)" }}>Connecting to LinkedIn…</p>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "rgba(255,250,230,0.2)", marginTop: "6px" }}>Authenticating your account</p>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}

          {/* PICKING */}
          {step === "picking" && (
            <div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "13px", color: "rgba(255,250,230,0.4)", marginBottom: "16px" }}>
                Select which LinkedIn profile to import:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {profiles.map((p) => (
                  <button key={p.id} onClick={() => fetchFullProfile(p.id)} style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    padding: "14px 16px", background: "rgba(255,255,255,0.02)",
                    border: `1px solid rgba(255,255,255,0.07)`, borderRadius: "10px",
                    cursor: "pointer", textAlign: "left", transition: "all 0.2s", width: "100%",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${LI_BLUE}60`; e.currentTarget.style.background = `${LI_BLUE}10`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                  >
                    {/* Avatar */}
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", border: `2px solid ${LI_BLUE}40`, flexShrink: 0, background: "#1a1a2e" }}>
                      <img src={p.photo} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "14px", color: "#fffae6", margin: "0 0 2px" }}>{p.name}</p>
                      <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", color: "rgba(255,250,230,0.4)", margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.title}</p>
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: `${accentAlt}60`, margin: 0, letterSpacing: "0.05em" }}>{p.location}</p>
                    </div>
                    <span style={{ color: "rgba(255,250,230,0.2)", fontSize: "16px" }}>→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FETCHING */}
          {step === "fetching" && (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: i % 2 === 0 ? accent : accentAlt,
                    margin: "0 4px",
                    animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                  }} />
                ))}
              </div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "14px", color: "rgba(255,250,230,0.6)" }}>Fetching profile data…</p>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "rgba(255,250,230,0.2)", marginTop: "6px" }}>
                Experience · Skills · Projects · Education
              </p>
              <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
            </div>
          )}

          {/* DONE — preview before applying */}
          {step === "done" && fetchedProfile && (
            <div>
              {/* Profile summary card */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", background: "rgba(255,255,255,0.03)", border: `1px solid ${accentAlt}20`, borderRadius: "10px", marginBottom: "20px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", border: `2px solid ${accentAlt}50`, flexShrink: 0 }}>
                  <img src={fetchedProfile.photo} alt={fetchedProfile.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "15px", color: "#fffae6", margin: "0 0 2px" }}>{fetchedProfile.name}</p>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", color: "rgba(255,250,230,0.4)", margin: 0 }}>{fetchedProfile.title}</p>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", color: "#22c55e", letterSpacing: "0.1em" }}>CONNECTED</span>
                </div>
              </div>

              {/* What will be imported */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
                {[
                  { label: "Skills", value: `${fetchedProfile.skills?.length} items` },
                  { label: "Projects", value: `${fetchedProfile.projects?.length} listed` },
                  { label: "Experience", value: `${fetchedProfile.experience?.split("@").length - 1} roles` },
                  { label: "Education", value: "Imported" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "10px 12px", background: "rgba(0,245,212,0.05)", border: "1px solid rgba(0,245,212,0.1)", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", color: "rgba(255,250,230,0.4)" }}>{item.label}</span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: accentAlt }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setStep("picking")} style={{ flex: 1, padding: "12px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "rgba(255,250,230,0.4)", fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer", transition: "all 0.2s" }}>
                  ← Pick Different
                </button>
                <button onClick={applyProfile} style={{ flex: 2, padding: "12px", background: `linear-gradient(135deg, ${accent}, ${accentAlt})`, border: "none", borderRadius: "8px", color: "white", fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "14px", cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.02em" }}>
                  Apply to Portfolio ✦
                </button>
              </div>
            </div>
          )}

          {/* ERROR */}
          {step === "error" && (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>⚠</div>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: "700", fontSize: "15px", color: "#ff4d00", marginBottom: "8px" }}>Connection Failed</p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "13px", color: "rgba(255,250,230,0.4)", marginBottom: "20px" }}>{errorMsg}</p>
              <button onClick={() => setStep("idle")} style={{ padding: "10px 24px", background: "transparent", border: `1px solid ${accent}50`, borderRadius: "6px", color: accent, fontFamily: "'Outfit',sans-serif", fontSize: "13px", cursor: "pointer" }}>
                Try Again
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}