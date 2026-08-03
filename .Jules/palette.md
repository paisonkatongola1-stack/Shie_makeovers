# Palette's UX Journal

## 2025-02-18 - Input Accessibility Enhancements
**Learning:** For forms to be truly accessible, all input fields must be associated with their labels using programmatic `htmlFor` matching the input's `id`. Relying solely on visual placement is insufficient for screen readers. Furthermore, use of React's `useId` hook ensures that unique, collision-free IDs are generated dynamically for each form instance.
**Action:** Always wrap input fields with labels using the `useId` hook, map `htmlFor` on the label to the input's `id`, and provide `aria-describedby` when helper or error text is present.
