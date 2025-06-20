import { z } from 'zod';

export const fundAccessSchema = z.object({
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().nonempty({ message: 'Phone number is required' }),
  company: z.string().nonempty({ message: 'Company is required' }),
  website: z.string().url({ message: 'Invalid website URL' }),
  country: z.string().nonempty({ message: 'Country is required' }),
  investorStatus: z.string().nonempty({ message: 'Investor status is required' }),
  purpose: z.string().nonempty({ message: 'Purpose is required' }),
  message: z.string().optional(),
  consent: z.literal(true, {
    message: 'You must confirm that you are an accredited or professional investor',
  }),
});

export type FundAccessFormValues = z.infer<typeof fundAccessSchema>;
