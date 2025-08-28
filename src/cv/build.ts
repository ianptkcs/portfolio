import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  copyFileSync,
} from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { experiences } from "~/db/data/experiences";
import { ExperienceType } from "~/enums/experience-type";
import { CVType } from "~/enums/cv-type";
import type { Experience } from "~/db/schema";

//
// 1) Define key paths
//
const rootDir = process.cwd();
const cvDir = join(rootDir, "src", "cv");
const publicDir = join(rootDir, "public", "cv");
const myCvFilesDir = "/home/ianptkcs/meustrem/docs/profissionais/";

// Ensure output directories exist
for (const dir of [cvDir, publicDir]) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

//
// 2) Load the LaTeX template with placeholders
//
const template = readFileSync(join(cvDir, "template.tex"), "utf8");

//
// 3) Helper to parse "MM/YYYY" into a numeric YYYYMM key
//
function parseStart(s: string): number {
  const [m, y] = s.split("/");
  const year = parseInt(y, 10);
  const month = parseInt(m, 10);
  return year * 100 + month;
}

//
// 4) Helper to build each LaTeX section, sorted by most‐recent start
//
function makeSection(
  items: Experience[],
  type: ExperienceType,
  titleField: (e: Experience) => string,
  subtitleField: (e: Experience) => string,
): string {
  // filter by type, then sort descending by start date
  const list = items
    .filter((e) => e.type === type)
    .sort((a, b) => parseStart(b.start) - parseStart(a.start));

  return list
    .map((e) => {
      const period = e.end ? `${e.start} -- ${e.end}` : `${e.start} -- Today`;
      return `
\\cvsubsection{${titleField(e)}}{${subtitleField(e)}}{${period}}
\\begin{itemize}
${e.description.map((d) => `  \\item ${d}`).join("\n")}
\\end{itemize}
`;
    })
    .join("\n");
}

//
// 5) Generate the full .tex content for a given profile
//
function generateCV(profile: "dev" | "tutor"): string {
  // decide which CVType to include
  const profileCvType = profile === "dev" ? CVType.dev : CVType.tutor;

  // filter for this CV (both or matching)
  const filtered = experiences.filter(
    (e) => e.cv === CVType.both || e.cv === profileCvType,
  );

  // build Education block
  const educationBlock = makeSection(
    filtered,
    ExperienceType.edu,
    (e) => e.institution,
    (e) => e.title,
  );

  // build Experience block (dev vs tutor)
  const expType = profile === "dev" ? ExperienceType.dev : ExperienceType.tutor;

  const experienceBlock = makeSection(
    filtered,
    expType,
    (e) => e.institution,
    (e) => e.title,
  );

  // build Projects block (empty for tutor if none tagged)
  const projectsBlock =
    profile === "dev"
      ? makeSection(
          filtered,
          ExperienceType.proj,
          (e) => e.title,
          (e) => e.institution,
        )
      : "";

  // inject into template
  return template
    .replace("%%EDUCATION%%", educationBlock)
    .replace("%%EXPERIENCE%%", experienceBlock)
    .replace("%%PROJECTS%%", projectsBlock);
}

//
// 6) Write out the .tex files into src/cv/
//
for (const profile of ["dev", "tutor"] as const) {
  const tex = generateCV(profile);
  const outPath = join(cvDir, `cv-${profile}.tex`);
  writeFileSync(outPath, tex, "utf8");
  console.log(`✍️  Generated: ${outPath}`);
}

//
// 7) Compile both with latexmk (PDF only)
//
console.log("\n📄 Compiling PDFs using latexmk…");
execSync("latexmk -pdf cv-dev.tex cv-tutor.tex", {
  cwd: cvDir,
  stdio: "inherit",
});

//
// 8) Clean up auxiliary files
//
console.log("\n🧹 Cleaning auxiliary files…");
execSync("latexmk -c", { cwd: cvDir, stdio: "inherit" });

//
// 9) Copy the resulting PDFs into /public/cv/
//
for (const profile of ["dev", "tutor"] as const) {
  const pdfSrc = join(cvDir, `cv-${profile}.pdf`);

  const pdfPublicDest = join(publicDir, `cv-${profile}.pdf`);
  copyFileSync(pdfSrc, pdfPublicDest);
  console.log(`✔️  Copied: ${pdfSrc} → ${pdfPublicDest}`);

  const pdfProfDest = join(myCvFilesDir, `cv-${profile}.pdf`);
  copyFileSync(pdfSrc, pdfProfDest);
  console.log(`✔️  Copied: ${pdfSrc} → ${pdfProfDest}`);
}

console.log("\n✅ Build complete! CVs are available in /public/cv/");
