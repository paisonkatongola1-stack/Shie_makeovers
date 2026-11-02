# Palette's UX Journal

## 2026-11-02 - Accessible Mobile Navigation and Icon Actions
**Learning:** Icon-only interactive elements in navigation bars (like shopping bags and hamburger menus) omit accessible names and state indicators by default, preventing screen readers from understanding purpose and state.
**Action:** Pair every icon-only button with an explicit `aria-label`, reflect toggle state using `aria-expanded`, and connect mobile collapsible menus to triggers via `aria-controls` and matching `id`.
