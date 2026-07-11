## 2025-05-15 - Improving Foundation Accessibility
**Learning:** Foundational UI components (Input, Textarea) lacked explicit label-input association via 'id' and 'htmlFor', which is critical for screen reader support in forms.
**Action:** Always ensure base form components support an 'id' prop and pass it to both the label and the input element.
