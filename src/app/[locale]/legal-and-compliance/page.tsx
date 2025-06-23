import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CtaBlock } from '@/shared/ui/components';

import {
  FundJurisdiction,
  LegalHero,
  LegalServices,
  RegulatoryOversight,
  WhySingapore,
} from './components';

export const metadata: Metadata = {
  title: 'Legal and Compliance Framework',
  description:
    'Explore the regulatory framework, fund compliance policies, and legal structure supporting Vertex FinCapital’s secure and transparent operations.',
  openGraph: {
    title: 'Legal and Compliance Framework',
    description:
      'Explore the regulatory framework, fund compliance policies, and legal structure supporting Vertex FinCapital’s secure and transparent operations.',
    //images: 'https://vertexfincapital.com/images/meta.png',
  },
};

export default async function LegalAndCompliancePage() {
  const t = await getTranslations('legalAndCompliance');

  return (
    <>
      <LegalHero />
      <FundJurisdiction />
      <RegulatoryOversight />
      <LegalServices />
      <WhySingapore />

      <CtaBlock
        title={t('cta.title', {
          fallback: 'Ready to Join Vertex FinCapital?',
        })}
        text={t('cta.text', {
          fallback:
            'Participation is exclusive—and deliberate. If you meet the investor criteria and are looking to diversify with institutional-grade private market exposure, we invite you to start the conversation.',
        })}
        buttonText={t('cta.buttonText', {
          fallback: 'Request Access',
        })}
        buttonLink="request"
        backgroundImage="/images/legal-and-compliance/cta-bg.png"
      />
    </>
  );
}
