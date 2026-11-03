# Palette's Journal

## 2025-05-18 - Header Navigation Accessibility and Disclosure Controls
**Learning:** Icon-only navigation buttons (e.g. shopping bag trigger and mobile drawer toggle) in modern minimalist header designs frequently lack accessible names and state indicators for screen reader users. Adding `aria-label`, `aria-expanded`, and `aria-controls` linked to the navigation drawer container ensures screen reader users understand the component purpose and state transitions.
**Action:** When inspecting navigation components, always verify icon-only buttons have descriptive `aria-label` attributes and interactive disclosure toggles specify `aria-expanded` and `aria-controls`.
