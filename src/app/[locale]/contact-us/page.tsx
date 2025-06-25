import type { Metadata } from 'next';

import { ContactWrap } from './components';

export const metadata: Metadata = {
  title: 'Contact the Fund',
  description:
    'Get in touch with the Vertex FinCapital team for inquiries about fund details, investor relations, or service partnerships.',
  openGraph: {
    title: 'Contact the Fund',
    description:
      'Get in touch with the Vertex FinCapital team for inquiries about fund details, investor relations, or service partnerships.',
    images: 'https://vertexfincapital.com/images/meta.png',
  },
};

export default function TheFund() {
  return (
    <>
      <ContactWrap />
    </>
  );
}
