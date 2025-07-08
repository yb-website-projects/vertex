'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WhoCanInvest.module.scss';

export const WhoCanInvest = () => {
  const t = useTranslations('whoCanInvest');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Accreditation Status',
      }),
      text: t('item1.text', {
        fallback: 'Must qualify as an accredited investor under MAS guidelines.',
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'Limited Capacity',
      }),
      text: t('item2.text', {
        fallback: 'Participation is limited to up to 30 qualified investors.',
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Investment Horizon',
      }),
      text: t('item3.text', {
        fallback: 'Suitable for long-term capital (5–10+ years).',
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'Minimum Capital',
      }),
      text: t('item4.text', {
        fallback: 'USD 200,000 minimum subscription amount.',
      }),
    },
  ];

  return (
    <section className={styles.whoCanInvest}>
      <div className={styles.whoCanInvest__inner}>
        <div className={'_container'}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Who Can Invest',
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
                  'Vertex FinCapital is open to a limited number of qualified participants. We welcome <br/>accredited investors who meet the following conditions:',
              }),
            }}
          />
          <div className={styles.whoCanInvest__row}>
            {data.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.whoCanInvest__col}
              >
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
