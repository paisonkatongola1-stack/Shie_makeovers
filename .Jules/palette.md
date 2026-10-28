# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Navbar Icon Buttons Accessibility
**Learning:** Navigation bars with icon-only actions (such as shopping carts or mobile menu toggles) lack accessible names for screen readers and focus rings for keyboard users if missing explicit ARIA attributes and focus styles.
**Action:** Always provide explicit `aria-label` and dynamic `aria-expanded` attributes on icon-only control buttons, along with `focus-visible` ring utilities for keyboard accessibility.
