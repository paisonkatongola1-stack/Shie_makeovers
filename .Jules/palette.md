## 2026-07-14 - Button Focus Accessibility | **Learning:** The primary `Button` component used `focus:outline-none` which removed visual indicators for keyboard users. | **Action:** Replaced with `focus-visible:ring-2` to provide clear focus states while maintaining aesthetic for mouse users.

## 2026-07-14 - Input Label Associations | **Learning:** Core `Input` and `Textarea` components did not link labels to their respective inputs, hindering screen reader users. | **Action:** Implemented `useId` hook to generate and link unique IDs automatically.
