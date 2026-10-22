# Palette's Journal

## 2025-05-18 - Navigation Icon Buttons Accessibility
**Learning:** Icon-only navigation actions (shopping bag and mobile drawer toggle) in header components lack default text alternatives, leaving screen readers unable to convey button intent or expanded state.
**Action:** Always attach explicit `aria-label` and `aria-expanded` attributes along with focus-visible ring utilities (`focus-visible:ring-2 focus-visible:ring-secondary`) on icon-only controls.
