import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";
import InputPage from "./pages/InputPage";
import PreviewPage from "./pages/PreviewPage";

const defaultData = {
  name: "Jordan Blake",
  title: "Creative Full Stack Developer",
  about: "I architect digital experiences that live at the intersection of engineering and art. 6 years turning complex problems into elegant, performant solutions.",
  skills: ["React","Three.js","TypeScript","Node.js","Python","WebGL","GraphQL","AWS","Docker","PostgreSQL","Redis","Figma"],
  projects: [
    { title: "Neural Canvas", description: "Real-time AI art generation platform processing 50K+ images/day with custom diffusion pipeline." },
    { title: "Velocity OS", description: "Cloud-native developer toolkit reducing deployment times by 80% for 200+ engineering teams." },
    { title: "Quantum Chat", description: "End-to-end encrypted messaging with sub-50ms latency serving 1M+ active users globally." },
    { title: "DataForge", description: "Visual data pipeline builder with drag-and-drop interface handling petabyte-scale ETL jobs." },
  ],
  education: "M.S. Computer Science — Stanford University, 2019\nB.S. Software Engineering — UC Berkeley, 2017",
  experience: "Staff Engineer @ Vercel (2022–Present)\nSenior Engineer @ Stripe (2020–2022)\nFull Stack Developer @ Airbnb (2019–2020)",
  contact: {
    email: "jordan@blake.dev",
    phone: "+1 (415) 555-0199",
    linkedin: "https://linkedin.com/in/jordanblake",
    github: "https://github.com/jordanblake",
    website: "https://blake.dev",
  },
};

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      if (ringRef.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top = ringPos.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userData, setUserData] = useState(defaultData);

  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<TemplatePage selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />} />
        <Route path="/input" element={selectedTemplate ? <InputPage userData={userData} setUserData={setUserData} selectedTemplate={selectedTemplate} /> : <Navigate to="/" replace />} />
        <Route path="/preview" element={selectedTemplate ? <PreviewPage userData={userData} selectedTemplate={selectedTemplate} /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}