'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ReportingCommunication.module.scss';

export const ReportingCommunication = () => {
  const t = useTranslations('reportingCommunication');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Biannual NAV Reports',
      }),
      text: t.rich('item1.text', {
        fallback:
          'Sent in <b>June</b> and <b>December</b> with portfolio valuation and performance.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'Audited Annual Reports',
      }),
      text: t.rich('item2.text', {
        fallback: 'Released after fiscal year-end, prepared by <b>Baker Tilly</b>.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Event-Based Updates',
      }),
      text: t.rich('item3.text', {
        fallback: 'Provided for significant developments like new investments or exits.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'Direct Investor Access',
      }),
      text: t.rich('item4.text', {
        fallback:
          'No portals. All updates and inquiries are handled personally via <b>email, phone</b>, or <b>WhatsApp</b>.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
  ];

  return (
    <section className={styles.reportingCommunication}>
      <div className={'_container'}>
        <div className={styles.reportingCommunication__row}>
          <div className={styles.reportingCommunication__col}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.reportingCommunication__title}
            >
              <h2>{t('title', { fallback: 'Reporting & Communication' })}</h2>
              <p>
                {t('text', {
                  fallback:
                    'Vertex FinCapital ensures full transparency through direct, periodic, and event-driven communication.',
                })}
              </p>
            </motion.div>
            <div className={styles.reportingCommunication__content}>
              {data.map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  key={index}
                  className={styles.reportingCommunication__item}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.reportingCommunication__col}
          >
            <Image
              src={'/images/investor/reporting.png'}
              alt="Reporting Communication"
              width={531}
              height={604}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
