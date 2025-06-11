import { getTranslations } from 'next-intl/server';

import { CtaBlock } from '@/shared/ui/components';

import { ServicePartners, ServiceProvidersHero } from './components';

export default async function ServiceProviders() {
  const t = await getTranslations('serviceProviders');

  return (
    <div>
      <ServiceProvidersHero />
      <ServicePartners />
      <CtaBlock
        title={t('cta.title', {
          fallback: 'Interested in joining the fund',
        })}
        text={t('cta.text', {
          fallback: 'Review eligibility, onboarding steps, and reporting structure.',
        })}
        buttonText={t('cta.buttonText', {
          fallback: 'Go to Investor Information',
        })}
        buttonLink="/investor-information"
        backgroundImage="/images/service-providers/cta-block-bg.png"
      />
    </div>
  );
}
