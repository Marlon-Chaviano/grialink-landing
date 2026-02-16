Purpose

This project follows a structured design system and strict engineering standards.
Every task must align with the existing architecture, UI system, and development conventions.

The AI agent must NOT introduce ad-hoc styles, duplicate components, or inconsistent design decisions.

⸻

1. Core Principles

When implementing any feature, UI section, or layout based on an external design reference:
 • Adapt the design to our existing design system.
 • Reuse existing components before creating new ones.
 • Follow our token system (colors, spacing, radius, typography).
 • Maintain visual consistency across the platform.
 • Preserve accessibility and performance standards.

Do not replicate external designs literally.
Translate them into our system.

⸻

1. Component Usage Rules

Before creating a new component:
 1. Check if an equivalent already exists in:
 • src/components/ui
 • src/components/shared
 • src/sections
 2. If a similar component exists:
 • Extend it using variants.
 • Do not duplicate structure.
 • Use class-variance-authority when needed.
 3. All components must:
 • Be reusable
 • Accept props properly typed
 • Avoid inline styles
 • Use clsx + tailwind-merge
 • Avoid hardcoded values outside tokens

⸻

1. Styling Standards

All styling must:
 • Use Tailwind utility classes
 • Follow spacing scale defined in tailwind config
 • Use semantic color tokens (primary, secondary, muted, accent, etc.)
 • Respect max-width container rules
 • Maintain vertical rhythm between sections

Never:
 • Hardcode arbitrary pixel values unless justified
 • Use random hex colors
 • Break the spacing system
 • Override styles in a way that breaks consistency

⸻

1. Animations & Transitions

Whenever appropriate:
 • Add subtle modern animations
 • Use framer-motion for interactive components
 • Use smooth transitions (transition-all duration-300 ease-in-out)
 • Animate:
 • Section entrances
 • Hover states
 • Button interactions
 • Microinteractions

Animations must:
 • Be subtle and professional
 • Not impact performance
 • Not block rendering
 • Respect reduced motion preferences

⸻

1. UX / UI Best Practices

Every implementation must:
 • Maintain clear visual hierarchy
 • Respect accessibility (ARIA, focus states, keyboard nav)
 • Preserve contrast ratios
 • Avoid layout shifts
 • Optimize for mobile-first

Follow:
 • Consistent spacing between sections
 • Clear CTA hierarchy
 • Proper heading structure (H1 → H2 → H3)
 • Predictable interaction patterns

⸻

1. Code Quality Standards

All code must:
 • Be strongly typed (TypeScript strict mode)
 • Avoid unnecessary hydration in Astro
 • Use client:visible or client:idle strategically
 • Avoid global client:load unless strictly required
 • Be modular and readable
 • Follow clean code principles

Never:
 • Duplicate logic
 • Mix UI and business logic improperly
 • Introduce dead code
 • Create large monolithic components

⸻

1. Performance Rules

Always prioritize:
 • Minimal JS payload
 • Static rendering where possible
 • Lazy loading images
 • Proper asset optimization
 • Avoid over-hydration

Landing pages must remain highly performant and SEO optimized.

⸻

1. Design Adaptation Rule

When given a design reference (image, Figma, Dribbble, etc.):
 1. Analyze structure and layout.
 2. Map it to our component system.
 3. Replace foreign styles with our tokens.
 4. Preserve branding consistency.
 5. Improve UX where possible.

Do not blindly copy visual details that conflict with our system.

⸻

1. Deliverables Format

When implementing:
 • Provide component code
 • Explain structural decisions briefly
 • Avoid unnecessary theory
 • Keep solutions production-ready

⸻

1. Default Behavior

If uncertain:
 • Choose consistency over novelty.
 • Choose simplicity over complexity.
 • Choose performance over visual excess.

⸻
