'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit';

import styles from './CtaBlock.module.scss';

export const CtaBlock = () => {
  const t = useTranslations('newsAndUpdates');

  return (
    <div className={styles.ctaBlock}>
      <div className={'_container'}>
        <div className={styles.ctaBlock__content}>
          <h2>
            {t('cta.title', {
              fallback:
                'If you are interested in investments and our fund, please visit the Fund page or contact us directly.',
            })}
          </h2>

          <div className={styles.ctaBlock__buttons}>
            <Button buttonType="link" url="/the-fund" color="white">
              {t('cta.buttonText1', {
                fallback: 'The Fund',
              })}
            </Button>
            <Button buttonType="link" url="/contact-us" color="gray-white">
              {t('cta.buttonText2', {
                fallback: 'Contact Us',
              })}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
