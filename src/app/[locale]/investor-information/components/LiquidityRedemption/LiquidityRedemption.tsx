'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './LiquidityRedemption.module.scss';

export const LiquidityRedemption = () => {
  const t = useTranslations('liquidityRedemption');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Initial <br/>Lock-Up',
      }),
      text: t.rich('item1.text', {
        fallback: 'No redemptions are permitted before <b>May 1, 2027</b>.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'Redemption <br/>Window',
      }),
      text: t.rich('item2.text', {
        fallback:
          'Redemptions are allowed once <b>per calendar year</b>, during the <b>year-end window</b>.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Notice <br/>Requirement',
      }),
      text: t.rich('item3.text', {
        fallback: 'A <b>60-day written notice</b> is required prior to redemption.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'Secondary <br/>Transfers',
      }),
      text: t.rich('item4.text', {
        fallback: 'Allowed with KYC approval, offering mid-term liquidity without NAV impact.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
  ];

  return (
    <section className={styles.liquidityRedemption}>
      <div className={styles.liquidityRedemption__inner}>
        <div className={'_container'}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Liquidity & Redemption Terms',
              }),
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback:
                  'Vertex FinCapital is structured as an open-ended, evergreen fund with defined <br/>redemption parameters to support long-term capital alignment.',
              }),
            }}
          />
          <div className={styles.liquidityRedemption__row}>
            {data.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.liquidityRedemption__col}
              >
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
