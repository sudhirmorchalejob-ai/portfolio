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
    const allowed = [".pdf", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and DOCX files are allowed"));
    }
  },
});

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.get("/", (req, res) => {
  res.json({ message: "Portfolio Generator API is running" });
});

app.post("/api/parse-resume", upload.single("resume"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const filePath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLowerCase();
    const parsed = await parseResume(filePath, fileExt);

    fs.unlinkSync(filePath);

    res.json({ success: true, data: parsed });
  } catch (err) {
    console.error("Parse error:", err);
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: "Failed to parse resume: " + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});