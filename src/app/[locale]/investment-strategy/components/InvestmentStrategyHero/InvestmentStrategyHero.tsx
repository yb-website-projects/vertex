'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './InvestmentStrategyHero.module.scss';

export const InvestmentStrategyHero = () => {
  const t = useTranslations('investmentStrategyHero');

  return (
    <section className={styles.homeHero}>
      <div className={'_container'}>
        <div className={styles.homeHero__inner}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Investment Strategy',
              }),
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('description', {
                fallback: 'Targeted Allocation. Disciplined Structure. Active Oversight. ',
              }),
            }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/investment-strategy/hero-image.jpg"
              alt="investment strategy hero image"
              width={1110}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
