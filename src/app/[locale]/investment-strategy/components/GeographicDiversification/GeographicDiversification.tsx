'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './GeographicDiversification.module.scss';

export const GeographicDiversification = () => {
  const t = useTranslations('geographicDiversification');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Singapore & Southeast Asia',
      }),
      description: t('item1.description', {
        fallback: 'Tech growth, real estate corridors, early-stage fintech',
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'Israel',
      }),
      description: t('item2.description', {
        fallback: 'Cybersecurity, SaaS, digital payments',
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Europe (incl. UK)',
      }),
      description: t('item3.description', {
        fallback: 'Proptech, private credit, real estate',
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'North America',
      }),
      description: t('item4.description', {
        fallback: 'Growth equity, pre-IPO VC',
      }),
    },
    {
      title: t('item5.title', {
        fallback: 'UAE/Dubai',
      }),
      description: t('item5.description', {
        fallback: 'Real estate (hospitality/logistics), credit with yield premiums',
      }),
    },
  ];

  return (
    <section className={styles.geographicDiversification}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Geographic Diversification',
            }),
          }}
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('subtitle', {
              fallback: 'List focus regions and their rationale',
            }),
          }}
        />
        <div className={styles.geographicDiversification__row}>
          {data.map((item, index) => (
            <div key={index} className={styles.geographicDiversification__col}>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.geographicDiversification__note}
          dangerouslySetInnerHTML={{
            __html: t('note', {
              fallback:
                'Include one sentence about geo-risk filters: rule of law,  <br/>FX exposure, capital controls.',
            }),
          }}
        />
      </div>
    </section>
  );
};
