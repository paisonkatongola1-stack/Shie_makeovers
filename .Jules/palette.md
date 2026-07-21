# Palette's Journal - Shie MakeOvers UX

## 2025-02-18 - Input Label Accessibility
**Learning:** Adding labels without a corresponding `id` on form controls prevents screen readers from announcing inputs properly, and prevents mouse users from focusing inputs by clicking their text labels. By integrating React's `useId` hook, we can automatically associate labels to input elements in reusable custom component libraries cleanly.
**Action:** Always link reusable form controls like `Input` and `Textarea` with the `useId` hook to generate automatic, clash-free fallback IDs and ensure proper `htmlFor` association.
