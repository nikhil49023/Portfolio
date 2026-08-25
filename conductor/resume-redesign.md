# Resume Redesign Plan

## Objective
Redesign the existing resume page (`app/resume/page.tsx`) utilizing the `open-design` minimalist framework. The goal is to transition from the current dark/glassmorphism aesthetic to an "Elegant Executive" light theme featuring a refined two-column layout, sophisticated typography, and generous whitespace, while preserving the underlying ATS-friendly print functionality.

## Key Files & Context
- `app/resume/page.tsx`: The primary file to be modified. Contains both the screen layout and the injected `PRINT_CSS`.

## Proposed Solution (Minimalist-Chic / Neutral-Modern)

### 1. Aesthetic & Theming
- **Palette**: Transition to a high-contrast light mode.
  - Background: Crisp white or extremely subtle off-white (`#fafafa`).
  - Text: Deep charcoal/slate for high readability (`#1a1a1a` for headings, `#4a4a4a` for body).
  - Accents: A single, muted primary color (e.g., a refined slate blue or emerald) used sparingly for links, tags, and key icons.
- **Styling**: Replace `card-glass` and dark borders with clean, borderless or delicately bordered containers. Rely on whitespace and typographic hierarchy for separation instead of heavy backgrounds.

### 2. Typography
- Implement a sophisticated typographic scale.
- **Headings**: Clean, bold sans-serif with tight tracking for a modern executive feel.
- **Body**: Highly readable, balanced sans-serif with improved line height (e.g., 1.6).
- **Tags/Metadata**: Small, uppercase monospace fonts with wide tracking for technical details and dates.

### 3. Layout Restructuring (Two-Column)
- Refine the existing `grid-cols-12` structure (4-col sidebar, 8-col main).
- **Sidebar (Left)**: Streamline the presentation of Technical Skills, Education, and Credentials. Use subtle dividers or typographic alignment instead of boxed cards.
- **Main Content (Right)**: Give the Executive Summary and Technical Projects room to breathe. Increase spacing between projects and refine the bullet-point lists for maximum scanability.

### 4. Component Refinements
- **Header/Nav**: Clean, solid white background with a subtle bottom border instead of blurred glass.
- **Buttons**: Replace solid, bright buttons with minimal, outline-styled or ghost buttons.
- **Icons**: Ensure Lucide icons use the refined accent color and are appropriately sized to not overpower the text.

### 5. ATS Print View Retention
- The `PRINT_CSS` block and the hidden `.print-show` container will be strictly maintained to ensure PDF exports remain 100% ATS compliant.

## Implementation Steps
1. **Prepare Styles**: Define the new light-theme color variables and typographic classes.
2. **Update Header**: Redesign the top navigation bar and the main profile intro section.
3. **Refactor Sidebar**: Update the Skills, Education, and Certification sections to use the minimalist aesthetic.
4. **Refactor Main Content**: Update the Summary and Projects sections, focusing on clean typography and spacing.
5. **Clean Up**: Remove legacy dark-mode classes (e.g., `card-glass`, `bg-white/5`).

## Verification
- Run the Next.js development server to verify the visual fidelity and responsiveness of the new design.
- Trigger the "Export PDF" function to visually confirm that the `PRINT_CSS` still outputs a clean, unstyled, ATS-friendly document.
