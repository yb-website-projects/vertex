import type { Metadata } from 'next';

import {
  CapitalDeployment,
  Explore,
  GeographicDiversification,
  InvestmentStrategyHero,
  RiskManagement,
  StrategicFlexibility,
  TargetPortfolio,
} from './components';

export const metadata: Metadata = {
  title: 'Investment Strategy and Asset Focus',
  description:
    'Explore how Vertex FinCapital targets private market opportunities with a disciplined strategy across real estate, private equity, credit, and venture capital.',
  openGraph: {
    title: 'Investment Strategy and Asset Focus',
    description:
      'Explore how Vertex FinCapital targets private market opportunities with a disciplined strategy across real estate, private equity, credit, and venture capital.',
    images: 'https://vertexfcapital.com/images/meta.png',
  },
};

export default function InvestmentStrategy() {
  return (
    <div>
      <InvestmentStrategyHero />
      <CapitalDeployment />

      <TargetPortfolio />
      <RiskManagement />
      <GeographicDiversification />
      <StrategicFlexibility />
      <Explore />
    </div>
  );
}
