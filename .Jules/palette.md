## 2025-05-15 - [A11y] Label-Input Association Pattern
**Learning:** Found that core UI components (Input, Textarea) were missing explicit 'id' and 'htmlFor' associations, which hinders screen reader accessibility and touch target usability.
**Action:** Always ensure 'Input' and 'Textarea' components accept an 'id' and automatically generate one from the 'label' if not provided, then link them using 'htmlFor'.

## 2025-05-15 - [UX] Async Action Feedback
**Learning:** High-stakes actions like "Confirm Booking" feel more reliable when they provide immediate visual feedback (loading spinners) and prevent accidental double-submissions.
**Action:** Use the 'isLoading' prop on 'Button' for all asynchronous or simulated network operations to improve perceived performance and safety.
