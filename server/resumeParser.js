const fs = require("fs");
const path = require("path");

async function extractTextFromPDF(filePath) {
  const pdfParse = require("pdf-parse");
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
}

async function extractTextFromDOCX(filePath) {
  const mammoth = require("mammoth");
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
}

function extractName(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  // Heuristic: first non-empty line that looks like a name (2-4 words, no special chars)
  for (const line of lines.slice(0, 6)) {
    const words = line.split(/\s+/);
    if (
      words.length >= 2 &&
      words.length <= 5 &&
      /^[A-Za-z\s\-\.]+$/.test(line) &&
      !/(resume|cv|curriculum|vitae|profile|summary)/i.test(line)
    ) {
      return line;
    }
  }
  return lines[0] || "Unknown";
}

function extractEmail(text) {
  const match = text.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : "";
}

function extractPhone(text) {
  const match = text.match(
    /(\+?\d{1,3}[\s\-]?)?(\(?\d{3}\)?[\s\-]?)(\d{3}[\s\-]?\d{4})/
  );
  return match ? match[0].trim() : "";
}

function extractSkills(text) {
  const skillsSection = extractSection(text, [
    "skills",
    "technical skills",
    "core competencies",
    "technologies",
    "expertise",
  ]);

  if (skillsSection) {
    const skills = skillsSection
      .split(/[,•|\n\t\/]+/)
      .map((s) => s.replace(/[^a-zA-Z0-9\s\+\#\.]/g, "").trim())
      .filter((s) => s.length > 1 && s.length < 40 && !/^\d+$/.test(s));
    return [...new Set(skills)].slice(0, 20);
  }

  // Fallback: look for common tech keywords
  const techKeywords = [
    "JavaScript","TypeScript","Python","Java","C++","C#","Ruby","PHP","Swift","Kotlin","Go","Rust","React","Angular","Vue","Node.js","Express","Django","Flask","Spring","Laravel",
    "SQL","MongoDB","PostgreSQL","MySQL","Redis","GraphQL","REST","AWS","Azure","GCP","Docker","Kubernetes","Git","Linux","HTML","CSS","Tailwind","Bootstrap","Next.js","Figma",
  ];
  return techKeywords.filter((k) => new RegExp(k, "i").test(text)).slice(0, 15);
}

function extractSection(text, headings) {
  const lines = text.split("\n");
  let capturing = false;
  let result = [];
  const headingRegex = new RegExp(`^(${headings.join("|")})\\s*:?\\s*$`, "i");
  const nextSectionRegex =
    /^(education|experience|work|employment|projects|skills|certifications|awards|languages|interests|references|summary|objective|contact|profile)\s*:?\s*$/i;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (headingRegex.test(line)) {
      capturing = true;
      continue;
    }
    if (capturing) {
      if (nextSectionRegex.test(line) && !headingRegex.test(line)) {
        break;
      }
      if (line) result.push(line);
    }
  }
  return result.join("\n");
}

function extractExperience(text) {
  const section = extractSection(text, [
    "experience",
    "work experience",
    "employment",
    "work history",
    "professional experience",
    "career",
  ]);

  if (section) {
    return section.substring(0, 1000);
  }
  return "";
}

function extractEducation(text) {
  const section = extractSection(text, [
    "education",
    "academic background",
    "qualifications",
    "academic qualifications",
  ]);

  if (section) {
    return section.substring(0, 600);
  }
  return "";
}

function extractTitle(text) {
  const titlePatterns = [
    /\b(software engineer|frontend developer|backend developer|full.?stack developer|web developer|mobile developer|data scientist|data engineer|devops engineer|product manager|ux designer|ui designer|graphic designer|project manager|engineering manager|tech lead|senior developer|junior developer|architect)\b/i,
  ];
  for (const p of titlePatterns) {
    const m = text.match(p);
    if (m) return m[0];
  }
  return "Software Developer";
}

function extractAbout(text) {
  const section = extractSection(text, [
    "summary",
    "objective",
    "profile",
    "about",
    "professional summary",
    "career objective",
    "about me",
  ]);
  return section ? section.substring(0, 400) : "";
}

function extractProjects(text) {
  const section = extractSection(text, ["projects", "personal projects", "key projects", "notable projects"]);
  if (!section) return [];

  const lines = section.split("\n").filter((l) => l.trim());
  const projects = [];
  let current = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length > 5 && trimmed.length < 80 && !/^[-•*]/.test(trimmed)) {
      if (current) projects.push(current);
      current = { title: trimmed, description: "" };
    } else if (current && trimmed) {
      current.description += (current.description ? " " : "") + trimmed.replace(/^[-•*]\s*/, "");
    }
  }
  if (current) projects.push(current);

  return projects.slice(0, 4).map((p) => ({
    title: p.title,
    description: p.description.substring(0, 200) || "A notable project.",
  }));
}

function extractContact(text) {
  const linkedin = text.match(/linkedin\.com\/in\/([a-zA-Z0-9\-_]+)/i);
  const github = text.match(/github\.com\/([a-zA-Z0-9\-_]+)/i);
  const website = text.match(/https?:\/\/(?!linkedin|github)[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/i);

  return {
    email: extractEmail(text),
    phone: extractPhone(text),
    linkedin: linkedin ? `https://linkedin.com/in/${linkedin[1]}` : "",
    github: github ? `https://github.com/${github[1]}` : "",
    website: website ? website[0] : "",
  };
}

function structureData(text) {
  return {
    name: extractName(text),
    title: extractTitle(text),
    about: extractAbout(text),
    skills: extractSkills(text),
    experience: extractExperience(text),
    education: extractEducation(text),
    projects: extractProjects(text),
    contact: extractContact(text),
  };
}

async function parseResume(filePath, fileExt) {
  let text = "";

  if (fileExt === ".pdf") {
    text = await extractTextFromPDF(filePath);
  } else if (fileExt === ".docx") {
    text = await extractTextFromDOCX(filePath);
  } else {
    throw new Error("Unsupported file type");
  }

  return structureData(text);
}

module.exports = { parseResume };