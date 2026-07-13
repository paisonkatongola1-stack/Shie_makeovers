## 2025-05-14 - Improve Component Accessibility & Keyboard Navigation
**Learning:** Icon-only buttons and form inputs often lack the necessary ARIA labels and ID associations for screen readers. Additionally, `focus:outline-none` without a `focus-visible` replacement breaks keyboard navigation.
**Action:** Always ensure `aria-label` is present on icon buttons, use `htmlFor` and `id` for form fields, and provide clear `focus-visible` indicators.
