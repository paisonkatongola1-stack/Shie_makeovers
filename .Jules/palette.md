## 2025-05-15 - Dynamic Label Association
**Learning:** Using `useId` for form components ensures accessible labels even when multiple instances exist, preventing ID collisions in React.
**Action:** Always use `useId` to generate unique IDs for inputs and link them to labels via `htmlFor` in reusable components.

## 2025-05-15 - Focus Visibility for Keyboard Navigation
**Learning:** Global `focus:outline-none` styles break accessibility for keyboard users who rely on visual focus indicators to navigate.
**Action:** Replace `focus:outline-none` with `focus-visible:ring-2` to provide clear indicators only when needed, maintaining the "elegant, minimalist" aesthetic.
