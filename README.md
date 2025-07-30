# Uify - React Component Generator ⚛️

A React application that generates UI components using Visa's Design System. 🎨

## Executive Summary 📋

Uify is a Natural Language → Component Suggestion Tool that allows developers to describe UI components in plain English and receive ready-to-use React code utilizing Visa's Product Design System.

**🚀 [Live Demo](https://uify.vercel.app/)**

**Key Features:**
- 🗣️ (Mock) Natural language input processing for UI component generation
- 📦 (Mock) Curated Visa Product Design System component suggestions
- 📝 Ready-to-copy React/TypeScript code snippets
- 📱 Fully responsive design with WAVE accessibility compliance
- ✨ Clean, developer-focused workflow

Built with React ⚛️, TypeScript 🔷, and @visa/nova-react 💳

## Technical Approach 🛠️

### Architecture
- **Frontend:** Next.js 15 with TypeScript for type safety and modern React features
- **UI Library:** @visa/nova-react for consistent design system implementation
- **Styling:** Visa Design System CSS variables and utility classes
- **Component Logic:** Hardcoded

### Key Components
- **PromptInput:** Reusable input interface with description textarea, example buttons, and model selector
- **Generation View:** Three-panel layout showing component suggestions, generated code, and live preview

### Design Process
Started with low-fidelity prototypes, progressed to high-fidelity Figma designs using Visa's Design System as reference. Focused on creating a clean, developer-friendly workflow to quickly manifest component ideation.

## AI Usage 🤖

Used Claude to assist with:
- Component styling
- Code organization and cleanup
- Accessibility implementation guidance
- README structure and documentation

All core logic, design decisions, and architecture choices were made independently.

## Assumptions & Shortcuts ⚡

- **Mock Functionality:** Component suggestions and code generation are hardcoded rather than AI-powered
- **Limited Examples:** Focused on login form pattern to demonstrate concept
- **Static Preview:** Component preview shows fixed example rather than dynamic rendering
- **Simplified Navigation:** Uses conditional rendering instead of Next.js routing

## Future Improvements 🎯

### Full Stack
- Express.js/FastAPI backend for real component suggestion logic

### Advanced UX
- Syntax highlighting for code preview (requires React parser library)
- Live component rendering (requires secure iframe implementation)
- Real-time preview updates based on description changes
- Keyboard shortcuts and enhanced accessibility features

### Production Features
- Next.js routing for proper navigation

## Accessibility ♿

Tested with WAVE browser extension - all errors and warnings resolved:
- Proper aria-labels for all interactive elements
- Semantic HTML structure with sections and landmarks
- Color contrast compliance
- Screen reader compatibility

**Total Development Time:** ~7-8 hours over 5 days
**DISCLAIMER:** As you may have noticed, I went beyond the time estimation for the project. And while I realized that at the time, I would not have felt satisfied if some of the frontend concerns like certain styling choices (margins, colors, etc.) were made and tweaked as they now are. You can trust that I am happy with the final product, both visually and behaviorally. I do apologize for going over though.
---

📚 **[View Detailed Development Timeline](./DEVELOPMENT_TIMELINE.md)** - Complete day-by-day development process, design decisions, and technical challenges.

## Closing Notes 🎉

I've enjoyed getting to dig around Visa's design system a little more. I'm sure my use of the components and styling will only improve over time. This position sounds incredibly exciting to me. I really believe I'd enjoy my time, my work, and the culture in place at Visa. Thank you for considering me as an applicant. Please reach out to me if you have any questions. It's been a privilege and good practice for me to make this project.