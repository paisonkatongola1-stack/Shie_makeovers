## 2025-05-14 - Loading State for Async Feedback
**Learning:** Users need immediate feedback for potentially slow operations like booking confirmations. A loading spinner on the button itself is an elegant way to provide this while preventing double-submissions.
**Action:** Use the `isLoading` prop on the `Button` component for all asynchronous form submissions.

## 2025-05-14 - Form Accessibility
**Learning:** Standard UI components often miss the connection between labels and inputs. Ensuring `id` and `htmlFor` are correctly paired is critical for screen reader users and improves the clickable area for all users.
**Action:** Always provide unique `id`s to form components and ensure the internal `label` uses `htmlFor`.

## 2025-05-14 - Icon-only Button Accessibility
**Learning:** Icon-only buttons are invisible to screen readers without descriptive `aria-label` attributes.
**Action:** Add `aria-label` to all buttons that do not contain visible text.
