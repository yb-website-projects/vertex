'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './KeyFeatures.module.scss';

export const KeyFeatures = () => {
  const t = useTranslations('keyFeatures');

  const keyFeatures = [
    {
      image: '/images/fund/key-features-1.png',
      description: t('title1', { fallback: 'Performance fees apply only after a 12% return' }),
    },
    {
      image: '/images/fund/key-features-2.png',
      description: t('title2', { fallback: 'Direct contact — no portals or intermediaries.' }),
    },
    {
      image: '/images/fund/key-features-3.png',
      description: t('title3', { fallback: 'Fast execution with active deal oversight.' }),
    },
    {
      image: '/images/fund/key-features-4.png',
      description: t('title4', { fallback: 'Access is limited to 20–30 investors.' }),
    },
  ];

  return (
    <section className={styles.keyFeatures}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', { fallback: 'Key Features / Differentiators' })}
        </motion.h2>
        <div className={styles.keyFeatures__row}>
          {keyFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.col}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3 dangerouslySetInnerHTML={{ __html: item.description }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
