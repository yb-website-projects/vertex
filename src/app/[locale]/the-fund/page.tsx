import type { Metadata } from 'next';

import {
  Explore,
  FundHero,
  FundPositioning,
  IdentityRegulatoryFramework,
  KeyFeatures,
  TeamRepresentatives,
} from './components';

export const metadata: Metadata = {
  title: 'The Fund',
  description:
    'Learn about the structure, objectives, and asset allocation strategy of Vertex FinCapital — a Singapore-regulated sub-fund under XEQ Global Alternatives VCC.',
  openGraph: {
    title: 'The Fund',
    description:
      'Learn about the structure, objectives, and asset allocation strategy of Vertex FinCapital — a Singapore-regulated sub-fund under XEQ Global Alternatives VCC.',
    //images: 'https://vertexfincapital.com/images/meta.png',
  },
};

export default function TheFund() {
  return (
    <>
      <FundHero />
      <IdentityRegulatoryFramework />
      <TeamRepresentatives />
      <FundPositioning />
      <KeyFeatures />
      <Explore />
    </>
  );
}
