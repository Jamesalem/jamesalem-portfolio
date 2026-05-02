# SOFTWARE DESIGN DOCUMENT (SDD)

## Project Title
Jamesalem Portfolio Website

## Author
Iyanuoluwa Victor Akeju

## Date
May 2026

---

# 1. Introduction

## 1.1 Purpose
This document provides a detailed technical and functional design specification for the Jamesalem Portfolio Website. It defines system architecture, design principles, user interactions, and implementation strategy to ensure scalability, maintainability, and professional presentation.

## 1.2 Scope
The system is a high-performance, SEO-optimised portfolio platform built using modern web technologies. It serves as a professional showcase of software development expertise, with emphasis on full-stack development and HealthTech solutions.

## 1.3 Intended Audience
- Recruiters and Hiring Managers
- Software Engineers and Technical Reviewers
- Product Managers and HealthTech Stakeholders

---

# 2. System Overview

The application is a responsive, production-grade web platform designed to communicate technical capability and professional value within seconds of user interaction.

## 2.1 Objectives
- Demonstrate real-world software engineering capability
- Showcase projects with clear problem–solution framing
- Establish a strong personal developer brand
- Enable seamless recruiter interaction

---

# 3. User Personas

## 3.1 Recruiter
- Non-technical or semi-technical
- Needs quick validation of skills and experience
- Focus: clarity, structure, credibility

## 3.2 Hiring Manager
- Technical or product-focused
- Evaluates project relevance and depth
- Focus: impact, ownership, scalability

## 3.3 Technical Reviewer
- Developer/Engineer
- Reviews code quality and architecture
- Focus: GitHub, stack choices, implementation

---

# 4. User Journey

1. User lands on homepage
2. Scans hero section (value proposition)
3. Navigates to projects
4. Reviews selected project(s)
5. Visits GitHub repository
6. Returns to contact section
7. Initiates contact

---

# 5. Technology Stack

## 5.1 Frontend
- Next.js (React Framework)
- TypeScript

## 5.2 Styling
- Tailwind CSS

## 5.3 Deployment
- Vercel (CI/CD enabled)

## 5.4 Version Control
- Git & GitHub

## 5.5 Integrations (Planned)
- Email API (Contact Form)
- Analytics (Vercel Analytics / Google Analytics)

---

# 6. System Architecture

## 6.1 Architecture Pattern
- Component-Based Architecture
- Modular and reusable UI components

## 6.2 Rendering Strategy
- Static Site Generation (SSG) for performance
- Server-Side Rendering (SSR) for dynamic sections if required

## 6.3 Data Flow
- Static JSON/data files for content
- Optional API routes for dynamic features

## 6.4 Folder Structure
```
/src
  /components
  /sections
  /pages
  /styles
  /data
  /utils
```

---

# 7. Functional Requirements

## 7.1 Hero Section
- Name, role, and value proposition
- Call-to-action (View Projects / Contact)

## 7.2 About Section
- Concise professional narrative
- Emphasis on Tech + HealthTech positioning

## 7.3 Projects Section
- Highlight key projects (Caresync, SEO Audit Tool)
- Include:
  - Problem
  - Solution
  - Tech stack
  - Links (GitHub / Live)

## 7.4 Skills Section
- Categorised technical stack

## 7.5 Experience Section
- Summary of professional experience

## 7.6 Contact Section
- Email integration or direct link
- Social links (GitHub, LinkedIn)

---

# 8. Non-Functional Requirements

## 8.1 Performance
- Page load time < 2 seconds
- Optimised assets and lazy loading

## 8.2 Usability
- Clear navigation
- Minimal cognitive load

## 8.3 Accessibility
- Semantic HTML
- Keyboard navigation support
- Basic ARIA compliance

## 8.4 Security
- Secure API key management (environment variables)
- Input validation for forms

## 8.5 SEO
- Metadata optimisation
- Structured data (schema markup)
- Clean URL structure

---

# 9. UI/UX Design Principles

- Minimalist and professional layout
- Strong visual hierarchy
- Consistent spacing and typography
- Mobile-first responsive design

---

# 10. Data Design

## 10.1 Current Approach
- Static data files for:
  - Projects
  - Skills
  - Experience

## 10.2 Future Enhancement
- Headless CMS integration (e.g., Sanity, Contentful)

---

# 11. Deployment Strategy

- Continuous deployment via GitHub integration
- Automatic builds on push to main branch
- Hosted on Vercel CDN

---

# 12. Testing Strategy

## 12.1 Functional Testing
- Navigation and routing
- Link validation

## 12.2 Performance Testing
- Lighthouse audits

## 12.3 Cross-Browser Testing
- Chrome, Edge, Safari

---

# 13. Success Metrics (KPIs)

- Time on site (> 60 seconds)
- Project click-through rate
- GitHub link engagement
- Contact conversion rate

---

# 14. Risks and Mitigation

| Risk | Mitigation |
|------|-----------|
| Overengineering | Maintain minimal scope for MVP |
| Poor UX | Follow proven design patterns |
| Slow performance | Optimise assets and use SSG |
| Low engagement | Focus on strong project storytelling |

---

# 15. Future Enhancements

- Blog for technical writing and thought leadership
- HealthTech case studies
- Admin dashboard for content management
- Advanced analytics integration

---

# 16. Conclusion

This system is designed to function not only as a portfolio, but as a strategic professional tool that communicates technical expertise, domain knowledge, and product thinking. The architecture and design choices ensure long-term scalability, performance, and alignment with modern software engineering standards.

---

**End of Document**

