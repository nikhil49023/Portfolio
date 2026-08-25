import os
import sys

# Ensure reportlab is installed
try:
    import reportlab
except ImportError:
    print("ReportLab not found. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "reportlab"])
    import reportlab

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_pdf():
    # Setup document
    pdf_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "resume.pdf")
    
    # 0.4 in (28.8 pt) margins to fit everything on a single page perfectly
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=28.8,
        rightMargin=28.8,
        topMargin=28.8,
        bottomMargin=28.8
    )
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#0f1319')
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#4b5563'),
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151'),
        spaceAfter=6
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#0f1319'),
        spaceBefore=6,
        spaceAfter=4
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=colors.HexColor('#374151')
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=colors.HexColor('#374151'),
        leftIndent=12,
        firstLineIndent=-8
    )
    
    # Header Elements
    story.append(Paragraph("KILANI SAI NIKHIL", title_style))
    story.append(Paragraph("Computer Science Student &bull; AI-Augmented Systems Builder", subtitle_style))
    
    # Contact Links with real embedded <a> tags
    contact_html = (
        "Hyderabad, India &nbsp;|&nbsp; "
        '<a href="mailto:kilanisainikhil@gmail.com" color="#0969da">kilanisainikhil@gmail.com</a> &nbsp;|&nbsp; '
        '<a href="https://github.com/nikhil49023" color="#0969da">github.com/nikhil49023</a> &nbsp;|&nbsp; '
        '<a href="https://linkedin.com/in/kilanisainikhil" color="#0969da">linkedin.com/in/kilanisainikhil</a><br/>'
        'HF: <a href="https://huggingface.co/kilanisainikhil" color="#0969da">huggingface.co/kilanisainikhil</a> &nbsp;|&nbsp; '
        'PyPI: <a href="https://pypi.org/user/SaiNikhil" color="#0969da">pypi.org/user/SaiNikhil</a> &nbsp;|&nbsp; '
        'NPM: <a href="https://www.npmjs.com/~kilani-sai-nikhil" color="#0969da">npmjs.com/~kilani-sai-nikhil</a>'
    )
    story.append(Paragraph(contact_html, contact_style))
    
    # Helper for horizontal dividers
    def add_section(title):
        div_table = Table([[""]], colWidths=[554.4])
        div_table.setStyle(TableStyle([
            ('LINEABOVE', (0,0), (-1,-1), 1.2, colors.HexColor('#0f1319')),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(Paragraph(title.upper(), section_title_style))
        story.append(div_table)
        story.append(Spacer(1, 3))

    # SECTION 1: Professional Summary
    add_section("Professional Summary")
    summary_text = (
        "Computer Science student specializing in AI-augmented development (Vibe Coding). "
        "I leverage state-of-the-art AI code generation and agent frameworks to build full-scale web, mobile, "
        "and machine learning systems, while using my core baseline skills in C++, Python, and SQL to "
        "manually write, test, and guide the application architectures. Creator of saara-ai (PyPI/NPM), "
        "re-architect of Vitt (on-device AI tracker), and AerialEye (YOLOv11-Nano Hugging Face model)."
    )
    story.append(Paragraph(summary_text, body_style))
    
    # SECTION 2: Technical Skills
    add_section("Technical Skills")
    skills_data = [
        [
            Paragraph("<b>Native Core Skills (Handwritten):</b>", body_style),
            Paragraph("Python Programming, C++ Programming, SQL Databases (PostgreSQL, SQLite), Git &amp; GitHub", body_style)
        ],
        [
            Paragraph("<b>AI-Augmented Stack (Vibe Coded):</b>", body_style),
            Paragraph("Next.js, React, Flutter, Dart, FastAPI Backend, Tailwind CSS, Docker Containers, PyTorch, Agentic Systems", body_style)
        ],
        [
            Paragraph("<b>APIs &amp; Orchestration:</b>", body_style),
            Paragraph("Vertex AI, Ollama, vLLM, crawl4ai, google-adk, REST &amp; WebSockets, Task Queues (Redis, Celery)", body_style)
        ]
    ]
    
    skills_table = Table(skills_data, colWidths=[150, 404.4])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    
    # SECTION 3: Technical Projects
    add_section("Technical Projects")
    
    # Project 1: saara-ai
    p1_title = '<b>saara-ai</b> &mdash; <i>Local-First CLI &amp; SDK Dataset Engine</i>'
    p1_date = '<b>Jun 2026</b>'
    p1_meta = 'Author &amp; Maintainer | Tech: Python, TypeScript, google-adk, crawl4ai, Ollama, vLLM'
    
    story.append(Table([[Paragraph(p1_title, body_style), Paragraph(p1_date, ParagraphStyle('Date', parent=body_style, alignment=TA_RIGHT))]], colWidths=[430, 124.4], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(Paragraph(p1_meta, ParagraphStyle('Meta', parent=body_style, fontName='Helvetica-Oblique', textColor=colors.HexColor('#4b5563'))))
    story.append(Spacer(1, 1.5))
    story.append(Paragraph("&bull; Developed saara-ai as a local-first dataset generation, labeling, and distillation engine.", bullet_style))
    story.append(Paragraph("&bull; Orchestrated autonomous topic-to-dataset ResearchAgents using google-adk and crawl4ai.", bullet_style))
    story.append(Paragraph("&bull; Integrated local model routing (Ollama, vLLM) and designed interactive TUI curation screens.", bullet_style))
    story.append(Paragraph('&bull; Distributed globally via PyPI (<a href="https://pypi.org/project/saara-ai/" color="#0969da">pypi.org/project/saara-ai</a>) and NPM package registries.', bullet_style))
    story.append(Spacer(1, 4))
    
    # Project 2: Vitt
    p2_title = '<b>Vitt</b> &mdash; <i>On-Device AI Expense Tracker for MSMEs</i>'
    p2_date = '<b>Jun 2026</b>'
    p2_meta = 'Full-Stack Developer | Tech: Flutter, Android AICore, Gemma 4 E2B, SQLite, Notification Listener'
    
    story.append(Table([[Paragraph(p2_title, body_style), Paragraph(p2_date, ParagraphStyle('Date', parent=body_style, alignment=TA_RIGHT))]], colWidths=[430, 124.4], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(Paragraph(p2_meta, ParagraphStyle('Meta', parent=body_style, fontName='Helvetica-Oblique', textColor=colors.HexColor('#4b5563'))))
    story.append(Spacer(1, 1.5))
    story.append(Paragraph("&bull; Engineered local-first AI financial tracking app rebranded as Vitt, optimized for Indus Appstore.", bullet_style))
    story.append(Paragraph("&bull; Integrated Android AICore to run Gemma 4 E2B locally, reducing memory footprint and APK size to ~50MB.", bullet_style))
    story.append(Paragraph("&bull; Implemented local Notification Listener Service for transaction scraping, replacing intrusive SMS/contact permissions.", bullet_style))
    story.append(Paragraph("&bull; Built strict DPDP Act 2023 consent flows and SEBI AI Advisory disclaimers within local SQLite architecture.", bullet_style))
    story.append(Spacer(1, 4))
    
    # Project 3: AerialEye
    p3_title = '<b>AerialEye</b> &mdash; <i>YOLOv11-Nano Aerial &amp; Disaster Response Model</i>'
    p3_date = '<b>Mar 2026</b>'
    p3_meta = 'CV Developer &amp; Trainer | Tech: YOLOv11, SAHI Slicing, PyTorch, ONNX, TFLite (INT8), Hugging Face Hub'
    
    story.append(Table([[Paragraph(p3_title, body_style), Paragraph(p3_date, ParagraphStyle('Date', parent=body_style, alignment=TA_RIGHT))]], colWidths=[430, 124.4], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(Paragraph(p3_meta, ParagraphStyle('Meta', parent=body_style, fontName='Helvetica-Oblique', textColor=colors.HexColor('#4b5563'))))
    story.append(Spacer(1, 1.5))
    story.append(Paragraph("&bull; Fine-tuned SUTRA YOLOv11-Nano model specialized for high-altitude aerial and disaster-response detection.", bullet_style))
    story.append(Paragraph("&bull; Scoped to 6 disaster classes (human, sos, vehicle, flood, road_damage, crack) and integrated SAHI slicing.", bullet_style))
    story.append(Paragraph("&bull; Optimized weights to PyTorch, ONNX, and INT8 quantized TFLite for deployment on low-power Google Coral TPU.", bullet_style))
    story.append(Paragraph('&bull; Published model card on Hugging Face Hub (<a href="https://huggingface.co/kilanisainikhil/AerialEye" color="#0969da">kilanisainikhil/AerialEye</a>) with a curated dataset of 6,327 images.', bullet_style))
    story.append(Spacer(1, 4))

    # Project 4: Super Orchestrator
    p4_title = '<b>Super Orchestrator</b> &mdash; <i>Master Agent Orchestration Protocol</i>'
    p4_date = '<b>May 2026</b>'
    p4_meta = 'Creator &amp; Maintainer | Tech: TypeScript, GCP Vertex AI, Docker, Firecrawl, opencode CLI, code-review-graph'
    
    story.append(Table([[Paragraph(p4_title, body_style), Paragraph(p4_date, ParagraphStyle('Date', parent=body_style, alignment=TA_RIGHT))]], colWidths=[430, 124.4], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(Paragraph(p4_meta, ParagraphStyle('Meta', parent=body_style, fontName='Helvetica-Oblique', textColor=colors.HexColor('#4b5563'))))
    story.append(Spacer(1, 1.5))
    story.append(Paragraph("&bull; Engineered master agent orchestration protocol reducing codebase-traversal token costs by up to 95%.", bullet_style))
    story.append(Paragraph("&bull; Developed Safelock Gatekeeper protocol to classify risk levels and prevent interactive CLI deadlock states.", bullet_style))
    story.append(Paragraph("&bull; Configured local Firecrawl Docker instances for zero-cost high-fidelity web search and documentation scraping.", bullet_style))
    story.append(Spacer(1, 4))
    
    # SECTION 4: Verified Certifications
    add_section("Verified Certifications")
    certs_data = [
        [
            Paragraph("<b>FinAgent Hackathon Certificate</b> &mdash; Issued by Unstop", body_style),
            Paragraph('<a href="https://drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt/view?usp=sharing" color="#0969da">Verify Credential</a>', ParagraphStyle('Right', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>Agents 101</b> &mdash; Issued by AMD AI Academy", body_style),
            Paragraph('<a href="https://academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf" color="#0969da">Verify Credential</a>', ParagraphStyle('Right', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>Intermediate SQL</b> &mdash; Issued by DataCamp", body_style),
            Paragraph('<a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f" color="#0969da">Verify Credential</a>', ParagraphStyle('Right', parent=body_style, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>Deploy &amp; Build Agents in Production</b> &mdash; Issued by Google Cloud Skills Boost", body_style),
            Paragraph('<a href="https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611" color="#0969da">Verify Credential</a>', ParagraphStyle('Right', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    certs_table = Table(certs_data, colWidths=[400, 154.4])
    certs_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(certs_table)
    story.append(Spacer(1, 4))
    
    # SECTION 5: Education
    add_section("Education")
    edu_title = '<b>NxtWave Institute</b> &mdash; <i>B.Tech in Computer Science &amp; Engineering</i>'
    edu_date = '<b>Class of 2029</b>'
    edu_meta = 'Hyderabad, India | Focus: Database engines, algorithms, neural loading, and core software engineering.'
    
    story.append(Table([[Paragraph(edu_title, body_style), Paragraph(edu_date, ParagraphStyle('Date', parent=body_style, alignment=TA_RIGHT))]], colWidths=[430, 124.4], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(Paragraph(edu_meta, ParagraphStyle('Meta', parent=body_style, textColor=colors.HexColor('#4b5563'))))
    
    # Build Document
    doc.build(story)
    print("ATS Resume generated successfully at: public/resume.pdf")

if __name__ == "__main__":
    generate_pdf()
