import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().optional(),
  consent: z.literal(true, {
    message: 'You must confirm that you are an accredited or professional investor',
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
