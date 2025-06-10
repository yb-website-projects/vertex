'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './RiskManagement.module.scss';

export const RiskManagement = () => {
  const t = useTranslations('riskManagement');

  return (
    <section className={styles.riskManagement}>
      <div className={styles.riskManagement__inner}>
        <div className={'_container'}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.riskManagement__body}
          >
            <Image
              src="/images/investment-strategy/risk-management.png"
              alt="risk management"
              width={515}
              height={400}
            />
            <div>
              <h2
                dangerouslySetInnerHTML={{
                  __html: t('title', {
                    fallback: 'Risk Management Approach',
                  }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('subtitle', {
                    fallback: 'Summarize how risk is actively controlled:',
                  }),
                }}
              />
              <ul>
                <li>
                  {t('item1', {
                    fallback: 'Use of secured lending and senior debt structures',
                  })}
                </li>
                <li>
                  {t('item2', {
                    fallback: 'Diversification across sectors and jurisdictions',
                  })}
                </li>
                <li>
                  {t('item3', {
                    fallback: 'Conservative valuations and peer benchmarking',
                  })}
                </li>
                <li>
                  {t('item4', {
                    fallback: 'Quarterly rebalancing + cap of 50% NAV per asset class',
                  })}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
