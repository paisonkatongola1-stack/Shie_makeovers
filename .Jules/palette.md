## 2025-05-15 - Improving Form and Navigation Accessibility
**Learning:** Core UI components like Input and Textarea often miss the connection between labels and inputs (id/htmlFor), which is critical for screen readers and touch targets. Icon-only buttons are invisible to screen readers without ARIA labels.
**Action:** Always ensure 'id' is passed to form components and associated with labels. Add descriptive ARIA labels to all interactive elements that don't have text content.
