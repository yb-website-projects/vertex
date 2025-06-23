import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CtaBlock } from '@/shared/ui/components';

import {
  InvestorHero,
  LiquidityRedemption,
  ReportingCommunication,
  SubscriptionProcess,
  WhoCanInvest,
} from './components';

export const metadata: Metadata = {
  title: 'Investor Information & Reporting',
  description:
    'Access essential documents, reporting standards, subscription terms, and updates relevant to current and prospective investors of Vertex FinCapital.',
  openGraph: {
    title: 'Investor Information & Reporting',
    description:
      'Access essential documents, reporting standards, subscription terms, and updates relevant to current and prospective investors of Vertex FinCapital.',
    //images: 'https://vertexfincapital.com/images/meta.png',
  },
};

export default async function InvestorInformation() {
  const t = await getTranslations('investorInformation');

  return (
    <div>
      <InvestorHero />
      <WhoCanInvest />
      <SubscriptionProcess />
      <LiquidityRedemption />
      <ReportingCommunication />
      <CtaBlock
        title={t('cta.title', {
          fallback: 'Ready to Join Vertex FinCapital?',
        })}
        text={t('cta.text', {
          fallback:
            'If you meet the eligibility criteria and want to explore participation, our team can guide you through the next steps. Whether you have a question or are ready to move forward, we support your process.',
        })}
        buttonText={t('cta.buttonText', {
          fallback: 'Request Access',
        })}
        buttonLink="request"
        backgroundImage="/images/investor/cta-bg-2.png"
      />
    </div>
  );
}
