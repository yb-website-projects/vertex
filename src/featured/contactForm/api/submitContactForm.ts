import type { ContactFormValues } from '../schema/ContactFormSchema';

export const submitContactForm = async (data: ContactFormValues) => {
  const res = await fetch('/api/contact-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
