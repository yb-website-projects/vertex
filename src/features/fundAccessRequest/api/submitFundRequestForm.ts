import type { FundAccessFormValues } from '../schema/fundAccessSchema';

export const submitFundRequestForm = async (data: FundAccessFormValues) => {
  const res = await fetch('/api/fund-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
