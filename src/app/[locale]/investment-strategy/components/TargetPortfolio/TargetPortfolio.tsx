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
        fallback: 'Real <br/>Estate',
      }),
      value: '30%',
      text: t('item1.text', {
        fallback:
          'Investments in pre-completion residential, commercial, or mixed-use projects. Focus on permits, strong sponsors, and clear exit strategies.',
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'Private <br/>Equity',
      }),
      value: '25%',
      text: t('item2.text', {
        fallback:
          'Expansion-stage investments in scalable businesses—payments, proptech, and asset-light real estate platforms.',
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Private <br/>Credit',
      }),
      value: '25%',
      text: t('item3.text', {
        fallback:
          'Secured lending to mid-market firms. Yield range 8–20% p.a., backed by property, receivables, or guarantees. Includes board rights and oversight.',
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'Venture <br/>Capital',
      }),
      value: '10%',
      text: t('item4.text', {
        fallback:
          'Early-stage exposure in fintech, proptech, and data infrastructure startups. Selective investments with high-growth potential.',
      }),
    },
    {
      title: t('item5.title', {
        fallback: 'Small-Cap <br/>Equities',
      }),
      value: '10%',
      text: t('item5.text', {
        fallback:
          'Opportunistic positions in listed or pre-IPO firms showing undervaluation and near-term catalysts.',
      }),
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
              fallback: 'Portfolio Allocation & Asset Classes',
            }),
          }}
        />
        <div className={styles.targetPortfolio__row}>
          {data.map((item, index) => (
            <div key={index} className={styles.targetPortfolio__col}>
              <div>
                <span>{item.value}</span>
                <p dangerouslySetInnerHTML={{ __html: item.title }} />
              </div>
              <p>{item.text}</p>
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
        >
          <p>
            <b>
              {t('note1', {
                fallback: 'Portfolio Rebalancing: ',
              })}
            </b>
          </p>
          <p>
            {t('note2', {
              fallback:
                'Adjustments occur quarterly or as needed, ensuring no single asset class exceeds 50% of NAV.',
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
