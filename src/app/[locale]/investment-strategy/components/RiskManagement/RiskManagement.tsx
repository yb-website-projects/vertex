'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './RiskManagement.module.scss';

export const RiskManagement = () => {
  const t = useTranslations('riskManagement');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Structured Security',
      }),
      description: t('item1.description', {
        fallback:
          'Secured lending and senior debt structures minimize downside risk and enhance capital protection.',
      }),
      image: '/images/investment-strategy/risk1.png',
    },
    {
      title: t('item2.title', {
        fallback: 'Diversified Exposure',
      }),
      description: t('item2.description', {
        fallback:
          'Investments span multiple sectors and jurisdictions, reducing concentration risk.',
      }),
      image: '/images/investment-strategy/risk2.png',
    },
    {
      title: t('item3.title', {
        fallback: 'Conservative Valuations',
      }),
      description: t('item3.description', {
        fallback:
          'Each asset undergoes peer benchmarking and strict valuation controls to ensure pricing discipline.',
      }),
      image: '/images/investment-strategy/risk3.png',
    },
    {
      title: t('item4.title', {
        fallback: 'Dynamic Portfolio Oversight',
      }),
      description: t('item4.description', {
        fallback:
          'Quarterly rebalancing ensures adaptability, with no more than 50% of NAV allocated to any single asset class.',
      }),
      image: '/images/investment-strategy/risk4.png',
    },
  ];

  return (
    <section className={styles.riskManagement}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Risk Management Approach',
            }),
          }}
        />
        <div className={styles.riskManagement__row}>
          {data.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.riskManagement__col}
            >
              <Image src={item.image} alt={item.title} width={338} height={438} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
