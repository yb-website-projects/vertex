'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './TargetPortfolio.module.scss';

export const TargetPortfolio = () => {
  const t = useTranslations('targetPortfolio');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Real Estate',
      }),
      value: '30%',
    },
    {
      title: t('item2.title', {
        fallback: 'Private Equity',
      }),
      value: '25%',
    },
    {
      title: t('item3.title', {
        fallback: 'Private Credit',
      }),
      value: '25%',
    },
    {
      title: t('item4.title', {
        fallback: 'Venture Capital',
      }),
      value: '10%',
    },
    {
      title: t('item5.title', {
        fallback: 'Public Small-Cap Equities',
      }),
      value: '10%',
    },
  ];

  return (
    <section className={styles.targetPortfolio}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Target Portfolio Allocation',
            }),
          }}
        />
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('subtitle', {
              fallback: 'Present as a visual allocation breakdown or clean list',
            }),
          }}
        />
        <div className={styles.targetPortfolio__row}>
          {data.map((item, index) => (
            <div key={index} className={styles.targetPortfolio__col}>
              <span>{item.value}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src="/images/investment-strategy/target-portfolio.png"
            alt="target portfolio"
            width={1110}
            height={400}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.targetPortfolio__note}
          dangerouslySetInnerHTML={{
            __html: t('note', {
              fallback:
                'Note: Add a sentence stating rebalancing occurs quarterly or as needed, <br/>with a max 50% NAV cap per asset class',
            }),
          }}
        />
      </div>
    </section>
  );
};
