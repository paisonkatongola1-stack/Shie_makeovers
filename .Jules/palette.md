# Palette's UX Journal

This journal documents critical UX and accessibility insights for the Shie MakeOvers application.

## 2026-08-08 - Labeled Input Association via useId and Clean Pricing Render
**Learning:** Generic reusable UI wrappers for inputs/textareas often omit default `id` and `htmlFor` associations, creating serious invisible accessibility blocks for screen readers and touch targets. Additionally, escaping characters (like backslashes before dollar signs in pricing) in raw JSX text can lead to literal rendering of backslashes.
**Action:** Always inspect reusable Form components (`Input`, `Textarea`) for proper `useId` integration to link `<label>` and inputs, and use standard JSX string representation without unnecessary backslash escapes.
