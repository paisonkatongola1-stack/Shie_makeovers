## 2025-08-11 - [Custom Form Accessibility Binding via useId]
**Learning:** In Tailwind-based custom form systems, input/textarea components wrapped in parent divs often lack native label click association. Creating a reusable, optional-id, fallback useId() binding and adding `cursor-pointer select-none` to labels provides screen-reader and visual keyboard compliance automatically.
**Action:** Always wrap custom form wrapper labels with htmlFor bound to a generated useId() to ensure standard native click focus behavior.

## 2025-08-11 - [Aria State for Custom Segment Selectors]
**Learning:** Interactive button grids (such as time slots and service cards) behave like select inputs but are built using buttons. Adding standard container groupings (`role="group"` with an accessible `aria-label`) and dynamic state tracking (`aria-pressed={isActive}`) ensures screen-readers communicate selections contextually.
**Action:** Ensure button list selection grids implement role="group" and aria-pressed attributes.
