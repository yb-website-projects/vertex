'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './InvestorHero.module.scss';

export const InvestorHero = () => {
  const t = useTranslations('investorHero');

  return (
    <section className={styles.investorHero}>
      <div className={'_container'}>
        <div className={styles.investorHero__inner}>
          <div className={styles.investorHero__content}>
            <h1
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Investor Information',
                }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t('description', {
                  fallback: 'Eligibility Criteria. Subscription Process. Transparent Reporting.',
                }),
              }}
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/investor/hero.png"
              alt="investor hero image"
              width={507}
              height={470}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
