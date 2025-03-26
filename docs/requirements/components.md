# WishCrafty Academy Components

This document provides a comprehensive overview of all components used in the WishCrafty Academy landing page, their hierarchical relationships, props, and functionality.

## Component Breakdown

| Section | Component | Description | Props/Properties | Functional Requirements |
|---------|-----------|-------------|------------------|-------------------------|
| **Navbar** | Title | Dynamic section title that changes based on scroll position | - currentSection (from App state)<br>- scrolled (boolean) | FR-006: Must update based on visible section |
| | Section Icons | Navigation icons for each section | - sections (array)<br>- activeSection (string)<br>- scrolled (boolean)<br>- scrollToSection (function) | FR-007: Must highlight active section<br>FR-008: Must scroll to correct section on click |
| **Hero Section** | MagnetLines | Interactive background animation with lines that respond to mouse movement | - rows (number)<br>- columns (number)<br>- containerSize (string)<br>- lineColor (string)<br>- lineWidth (string)<br>- lineHeight (string)<br>- baseAngle (number)<br>- style (object) | FR-009: Must create visual interest<br>FR-010: Must respond to mouse interaction |
| | RotatingText | Text rotation animation showcasing different aspects of product journey | - texts (array)<br>- mainClassName (string)<br>- staggerFrom (string)<br>- initial/animate/exit (objects)<br>- transition (object)<br>- rotationInterval (number) | FR-011: Must cycle through product phases<br>FR-012: Must use smooth transitions |
| | Headline | Main heading with "Product" and dynamic rotating text | - N/A (styled with CSS) | FR-013: Must clearly communicate product focus |
| | Subtitle | "Journey with No-Code & AI" statement | - N/A (styled with CSS) | FR-014: Must convey program theme |
| | Description | Supporting paragraph explaining value proposition | - N/A (text content) | FR-015: Must explain program concisely |
| | CTA Buttons | Primary and secondary call-to-action buttons | - N/A (styled with CSS) | FR-016: Must provide clear actions for users<br>FR-017: Must have visual prominence |
| **Content Sections** | What Section | Explains what WishCrafty Academy offers | - id="what"<br>- className="content-section" | FR-018: Must clearly explain offerings |
| | Why Section | Explains benefits of choosing WishCrafty | - id="why"<br>- className="content-section" | FR-019: Must highlight unique benefits |
| | How Section | Explains how the program works | - id="how"<br>- className="content-section" | FR-020: Must clarify program process |
| | Join Section | Explains how to join the next cohort with CTA | - id="join"<br>- className="content-section" | FR-021: Must provide clear path to enrollment |
| **Footer** | Footer Content | Copyright information and credits | - N/A (basic content) | FR-022: Must include legal information |

## Icon Components

The navigation uses the following icon components from `SectionIcons.js`:

| Component | Description | Usage |
|-----------|-------------|-------|
| `HomeIcon` | Home/academy icon | Navigation to the main hero section |
| `FeaturesIcon` | Features/what icon | Navigation to "What We Offer" section |
| `BenefitsIcon` | Benefits/why icon | Navigation to "Why Choose Us" section |
| `ProcessIcon` | Process/how icon | Navigation to "How It Works" section |
| `ContactIcon` | Contact/join icon | Navigation to "Join Next Cohort" section |

## Component Reuse

1. **Content Sections**: All content sections (What, Why, How, Join) use the same component structure with different content:
   ```jsx
   <section id="[section-id]" className="content-section">
     <div className="content-section-inner">
       <h2>[Section Title]</h2>
       <p>[Section Content]</p>
       [Optional CTA Button]
     </div>
   </section>
   ```

## Animation Components

### MagnetLines

Creates an interactive background with character-sized lines that respond to mouse movement:

- **Key Features**:
  - Uses dynamic line calculation based on container size
  - Applies magnetic attraction effect to mouse position
  - Leverages requestAnimationFrame for smooth animations
  - Scales appropriately across different screen sizes

### RotatingText

Provides text rotation animation with character-by-character transitions:

- **Key Features**:
  - Uses Framer Motion for smooth transitions
  - Supports staggered character animations
  - Configurable rotation interval and transition effects
  - Responsive design with appropriate sizing

## Responsive Behavior

All components adapt to different screen sizes with these breakpoints:

- Mobile: < 480px (Smaller text and buttons, stacked layouts)
- Tablet: 480px - 768px (Medium sizes, still mobile navigation)
- Desktop: > 768px (Full-sized elements, horizontal navigation)

## Accessibility Features

- Semantic HTML structure (section, nav, button, h1-h6, etc.)
- ARIA labels and titles for interactive elements
- Sufficient color contrast for text readability
- Focus states for keyboard navigation
- Alt text for images