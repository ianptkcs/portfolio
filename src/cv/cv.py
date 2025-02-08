"""
CV Generator Script

Generates LaTeX CV and PDF with proper file organization:
- Source files in src/cv/
- Generated files in src/cv/mock/
- Final PDF in public/
"""

from jinja2 import Template
import json
import subprocess
import shutil
from pathlib import Path
from datetime import datetime
from typing import Any, Dict, List, Optional, Set

# --------------------------
# Configuration
# --------------------------
BASE_DIR = Path("/home/ianptkcs/vscode/pessoal/portfolio")
DATA_DIR = BASE_DIR / "src/data"
TEMPLATE_PATH = BASE_DIR / "src/cv/template.tex"  # Template in src/cv/
OUTPUT_DIR = BASE_DIR / "src/cv/mock"            # Auxiliary files directory
TEX_OUTPUT = BASE_DIR / "src/cv/cv.tex"          # Main LaTeX output
PDF_OUTPUT = BASE_DIR / "public/cv.pdf"          # Final PDF destination

# Create necessary directories
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
PDF_OUTPUT.parent.mkdir(parents=True, exist_ok=True)

# --------------------------
# Helper Functions
# --------------------------

def get_downloads_path() -> Path:
    """Get platform-specific Downloads directory"""
    home = Path.home()
    system = platform.system()
    
    if system == "Windows":
        return home / "Downloads"
    elif system == "Darwin":
        return home / "Downloads"
    else:  # Linux/Unix
        return home / "Downloads"

# --------------------------
# Data Loading Functions
# --------------------------

def load_json_data(filename: str) -> List[Dict[str, Any]]:
    """Load JSON data from data directory"""
    with open(DATA_DIR / filename, "r", encoding="utf-8") as f:
        return json.load(f)

def process_dated_data(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Sort data by date in reverse chronological order."""
    def parse_date(date_str: Optional[str]) -> Optional[datetime]:
        """Parse date string into datetime object."""
        if not date_str:
            return None
        try:
            if " " in date_str:
                try:
                    return datetime.strptime(f"1 {date_str}", "%d %b %Y")
                except ValueError:
                    return datetime.strptime(f"1 {date_str}", "%d %B %Y")
            return datetime.strptime(date_str, "%Y")
        except ValueError:
            return None

    return sorted(
        data,
        key=lambda x: (
            parse_date(x.get("date", {}).get("start")) or 
            parse_date(x.get("date", {}).get("end")) or 
            datetime.min
        ),
        reverse=True
    )

# --------------------------
# Skill Processing Functions
# --------------------------

def categorize_skills(
    datasets: List[List[Dict[str, Any]]],
    skills_categories: Dict[str, List[str]]
) -> Dict[str, List[str]]:
    """Categorize skills into predefined groups with 'Others' category."""
    # Collect all unique skills
    all_skills: Set[str] = set()
    for data in datasets:
        for item in data:
            all_skills.update(item.get("skills", []))
    
    # Initialize categories
    categories = {k: [] for k in skills_categories}
    categories["Others"] = []

    # Categorize skills
    for skill in all_skills:
        for category, skills in skills_categories.items():
            if skill in skills:
                categories[category].append(skill)
                break
        else:
            categories["Others"].append(skill)
    
    return categories

# --------------------------
# Main Processing
# --------------------------

def main():
    """Main execution flow"""
    # Data loading and processing
    contacts = load_json_data("Contacts.json")
    skills_categories = load_json_data("Skills.json")
    
    datasets = [
        process_dated_data(load_json_data(fname))
        for fname in ["Education.json", "Programming.json", 
                     "Tutoring.json", "Projects.json"]
    ]
    education, programming, tutoring, projects = datasets

    # Fix contact icons
    for contact in contacts:
        if contact["icon"] == "Mail":
            contact["icon"] = "Envelope"

    # Process skills
    grouped_skills = categorize_skills(datasets, skills_categories)

    # Render template
    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        template = Template(f.read())
    
    rendered = template.render(
        contacts=contacts,
        education=education,
        programming=programming,
        tutoring=tutoring,
        projects=projects,
        skills=grouped_skills
    )

    # Save LaTeX file
    with open(TEX_OUTPUT, "w", encoding="utf-8") as f:
        f.write(rendered)
    print(f"Generated LaTeX file: {TEX_OUTPUT}")

    # Compile to PDF
    try:
        # Run pdflatex from the cv directory
        subprocess.run(
            [
                "pdflatex",
                "-interaction=nonstopmode",
                f"-output-directory={OUTPUT_DIR.name}",  # Output to mock/
                TEX_OUTPUT.name                          # Input cv.tex
            ],
            cwd=TEX_OUTPUT.parent,  # Run in src/cv/ directory
            check=True
        )
        
        # Move generated PDF to final location
        generated_pdf = OUTPUT_DIR / "cv.pdf"
        if generated_pdf.exists():
            shutil.move(str(generated_pdf), str(PDF_OUTPUT))
            print(f"PDF successfully moved to: {PDF_OUTPUT}")
        else:
            print("Error: PDF generation failed - no output file found")

    except subprocess.CalledProcessError as e:
        print(f"PDF compilation failed: {e}")
    except FileNotFoundError:
        print("Error: pdflatex not found. Install LaTeX distribution.")
        
    try:
        downloads_dir = get_downloads_path()
        if downloads_dir.exists():
            download_path = downloads_dir / "cv.pdf"
            shutil.copy2(PDF_OUTPUT, download_path)
            print(f"PDF copiado para Downloads: {download_path}")
        else:
            print(f"Diretório de Downloads não encontrado: {downloads_dir}")

    except Exception as e:
        print(f"Erro ao copiar para Downloads: {str(e)}")

if __name__ == "__main__":
    main()