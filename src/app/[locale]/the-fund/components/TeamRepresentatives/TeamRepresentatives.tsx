'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './TeamRepresentatives.module.scss';

export const TeamRepresentatives = () => {
  const t = useTranslations('teamRepresentatives');

  const teamRepresentatives = [
    {
      title: t('title1', { fallback: 'Sai Teng' }),
      text1: t('text1_1', {
        fallback:
          'Represents XEQ Capital. Specializes in multi-asset portfolio design and macroeconomic research.',
      }),
      text2: t('text1_2', {
        fallback:
          'Experienced at AIA, Phillip Capital, and Prudential. Brings disciplined execution and conservative capital allocation expertise.',
      }),
    },
    {
      title: t('title2', { fallback: 'Boris Yelevich' }),
      text1: t('text2_1', {
        fallback:
          'Represents YB Advisors. CPA (Israel) with 15+ years in cross-border fund structuring, tax strategy, and investor relations.',
      }),
      text2: t('text2_2', {
        fallback:
          'Active across Europe and Israel, with strong integration of digital finance systems.',
      }),
    },
  ];

  return (
    <section className={styles.teamRepresentatives}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', { fallback: 'Team Representatives' })}
        </motion.h2>
        <div className={styles.teamRepresentatives__content}>
          {teamRepresentatives.map((item, index) => (
            <div className={styles.teamRepresentatives__item} key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text1}</p>
              </div>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
