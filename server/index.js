const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { parseResume } = require("./resumeParser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    [".pdf", ".docx"].includes(ext) ? cb(null, true) : cb(new Error("Only PDF/DOCX allowed"));
  },
});

if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

const MOCK_LINKEDIN_PROFILES = [
  {
    id: "li_001",
    name: "Sarah Chen",
    title: "Senior Frontend Engineer",
    photo: "https://api.dicebear.com/7.x/personas/svg?seed=SarahChen&backgroundColor=b6e3f4",
    about: "I build pixel-perfect, performant interfaces that millions of people use every day. Obsessed with micro-interactions, accessibility, and the 60fps dream.",
    email: "sarah.chen@techcorp.io",
    phone: "+1 (415) 234-5678",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/sarahchen-dev",
    website: "https://sarahchen.dev",
    skills: ["React", "TypeScript", "Next.js", "CSS-in-JS", "Figma", "WebGL", "GraphQL", "Storybook", "Jest", "Webpack", "Node.js", "AWS"],
    experience: [
      { company: "Figma", role: "Senior Frontend Engineer", duration: "2021–Present", desc: "Led the multiplayer canvas rendering team. Optimized real-time collaboration for 3M+ users." },
      { company: "Airbnb", role: "Frontend Engineer", duration: "2019–2021", desc: "Built the new search experience serving 100M+ monthly active users." },
      { company: "Stripe", role: "Junior Engineer", duration: "2018–2019", desc: "Developed merchant dashboard components used by 500K businesses globally." },
    ],
    education: [{ school: "Carnegie Mellon University", degree: "B.S. Computer Science", year: "2018" }],
    projects: [
      { title: "OpenCanvas", description: "Open-source collaborative whiteboard with WebRTC and CRDT sync. 8K GitHub stars." },
      { title: "AnimateKit", description: "React animation library with spring physics. 50K weekly npm downloads." },
      { title: "A11yCheck", description: "Browser extension for real-time accessibility auditing. Featured by Chrome Web Store." },
    ],
  },
  {
    id: "li_002",
    name: "Marcus Okonkwo",
    title: "Staff Backend Engineer & Distributed Systems",
    photo: "https://api.dicebear.com/7.x/personas/svg?seed=MarcusOkonkwo&backgroundColor=c0aede",
    about: "I architect systems that stay up when everything else goes down. 8 years building infra that handles millions of requests per second without breaking a sweat.",
    email: "m.okonkwo@infra.dev",
    phone: "+1 (212) 876-5432",
    location: "New York, NY",
    linkedin: "https://linkedin.com/in/marcokonkwo",
    website: "https://okonkwo.dev",
    skills: ["Go", "Rust", "Kubernetes", "Kafka", "PostgreSQL", "Redis", "gRPC", "Terraform", "AWS", "eBPF", "Prometheus", "Python"],
    experience: [
      { company: "Cloudflare", role: "Staff Engineer", duration: "2022–Present", desc: "Built edge compute routing handling 1B+ requests/day. Reduced p99 latency by 40%." },
      { company: "Uber", role: "Senior Backend Engineer", duration: "2019–2022", desc: "Designed the real-time surge pricing engine serving 25M daily trips." },
      { company: "MongoDB", role: "Software Engineer", duration: "2017–2019", desc: "Contributed to the aggregation pipeline and sharding improvements in MongoDB 4.x." },
    ],
    education: [
      { school: "MIT", degree: "M.S. Computer Science — Distributed Systems", year: "2017" },
      { school: "University of Lagos", degree: "B.S. Computer Engineering", year: "2015" },
    ],
    projects: [
      { title: "FluxDB", description: "Experimental time-series database written in Rust with 10M inserts/sec benchmark." },
      { title: "K8s Cost Analyzer", description: "Open-source Kubernetes cost attribution tool. Adopted by 300+ companies." },
      { title: "EdgeRouter", description: "Low-latency request routing library used in production at 3 Fortune 500 companies." },
    ],
  },
  {
    id: "li_003",
    name: "Priya Nambiar",
    title: "ML Engineer & AI Product Builder",
    photo: "https://api.dicebear.com/7.x/personas/svg?seed=PriyaNambiar&backgroundColor=ffd5dc",
    about: "I sit at the intersection of research and product. I take models from notebook to production and make sure they actually help people — not just score well on benchmarks.",
    email: "priya@ai-lab.dev",
    phone: "+1 (650) 345-9012",
    location: "Seattle, WA",
    linkedin: "https://linkedin.com/in/priyanambiar-ml",
    website: "https://priyanambiar.com",
    skills: ["Python", "PyTorch", "TensorFlow", "MLflow", "LangChain", "FastAPI", "Spark", "Databricks", "SQL", "dbt", "React", "Docker"],
    experience: [
      { company: "Anthropic", role: "ML Engineer", duration: "2023–Present", desc: "Fine-tuning and RLHF pipelines for large language models. Focus on safety and alignment." },
      { company: "Google DeepMind", role: "Research Engineer", duration: "2021–2023", desc: "Developed reward modeling infrastructure for Gemini pre-training runs." },
      { company: "Databricks", role: "Data Scientist", duration: "2019–2021", desc: "Built AutoML pipelines reducing model development time by 70% for enterprise clients." },
    ],
    education: [
      { school: "Stanford University", degree: "M.S. Artificial Intelligence", year: "2019" },
      { school: "IIT Bombay", degree: "B.Tech Computer Science", year: "2017" },
    ],
    projects: [
      { title: "NeuralSearch", description: "Semantic search engine using custom embeddings. Processes 500K queries/day in production." },
      { title: "SafeGuard", description: "Open-source LLM safety evaluation framework. Used by 50+ AI teams worldwide." },
      { title: "DataLens", description: "Natural language interface for SQL databases. YC W23 backed startup." },
    ],
  },
];

function profileToPortfolioData(profile) {
  const expLines = profile.experience.map(e => `${e.role} @ ${e.company} (${e.duration})\n${e.desc}`).join("\n");
  const eduLines = profile.education.map(e => `${e.degree} — ${e.school}, ${e.year}`).join("\n");
  return {
    name: profile.name,
    title: profile.title,
    about: profile.about,
    photo: profile.photo,
    skills: profile.skills,
    experience: expLines,
    education: eduLines,
    projects: profile.projects,
    contact: {
      email: profile.email,
      phone: profile.phone,
      linkedin: profile.linkedin,
      website: profile.website,
      github: "",
    },
    _linkedinMeta: {
      location: profile.location,
      connectedAt: new Date().toISOString(),
      profileId: profile.id,
    },
  };
}

app.get("/", (req, res) => res.json({ status: "Portfolio3D API running" }));

app.get("/auth/linkedin", (req, res) => {
  const state = Math.random().toString(36).substring(2, 15);
  res.json({
    authUrl: `http://localhost:5000/auth/linkedin/callback?code=mock_code_${Date.now()}&state=${state}`,
    state,
  });
});

app.get("/auth/linkedin/callback", (req, res) => {
  const { code } = req.query;
  if (!code || !code.startsWith("mock_code_")) {
    return res.status(400).json({ error: "Invalid authorization code" });
  }
  setTimeout(() => {
    res.json({
      success: true,
      profiles: MOCK_LINKEDIN_PROFILES.map(p => ({
        id: p.id, name: p.name, title: p.title, photo: p.photo, location: p.location,
      })),
    });
  }, 800);
});

app.get("/auth/linkedin/profile/:id", (req, res) => {
  const profile = MOCK_LINKEDIN_PROFILES.find(p => p.id === req.params.id);
  if (!profile) return res.status(404).json({ error: "Profile not found" });
  setTimeout(() => {
    res.json({ success: true, data: profileToPortfolioData(profile), raw: profile });
  }, 600);
});

app.post("/api/parse-resume", upload.single("resume"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  try {
    const ext = path.extname(req.file.originalname).toLowerCase();
    const parsed = await parseResume(req.file.path, ext);
    fs.unlinkSync(req.file.path);
    res.json({ success: true, data: parsed });
  } catch (err) {
    if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server on http://localhost:${PORT}`);
  console.log(`🔗 LinkedIn Mock: GET /auth/linkedin`);
});