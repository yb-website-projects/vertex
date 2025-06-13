'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './RegulatoryOversight.module.scss';

export const RegulatoryOversight = () => {
  const t = useTranslations('regulatoryOversight');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Licensed Fund Manager',
      }),
      text: t.rich('item1.text', {
        fallback:
          'XEQ Capital is authorised to manage capital markets products and serve accredited investors, operating within MAS’s regulatory framework.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'MAS Compliance',
      }),
      text: t.rich('item2.text', {
        fallback:
          'All fund activities are conducted in accordance with Singapore’s regulatory requirements, ensuring transparency and institutional integrity',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Core Regulatory Functions',
      }),
      text1: t.rich('item3.text1', {
        fallback: 'Full KYC/AML compliance under MAS guidelines',
        b: (chunks) => <b>{chunks}</b>,
      }),
      text2: t.rich('item2.text2', {
        fallback: 'Timely statutory filings and disclosure obligations',
        b: (chunks) => <b>{chunks}</b>,
      }),
      text3: t.rich('item2.text3', {
        fallback: 'Robust governance, risk oversight, and fund operation protocols',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
  ];

  return (
    <section className={styles.fundJurisdiction}>
      <div className={'_container'}>
        <div className={styles.fundJurisdiction__row}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.fundJurisdiction__col}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.fundJurisdiction__title}
            >
              <h2>{t('title', { fallback: 'Regulatory Oversight' })}</h2>
              <p>
                {t('text', {
                  fallback:
                    'Vertex FinCapital is managed by XEQ Capital, a licensed fund manager regulated by the Monetary Authority of Singapore (MAS) under CMS License No. CMS101602. The fund’s operations adhere to the highest regulatory and institutional standards.',
                })}
              </p>
            </motion.div>
            <Image
              src={'/images/legal-and-compliance/regulatory-oversight.png'}
              alt="Fund Jurisdiction"
              width={531}
              height={382}
            />
          </motion.div>
          <div className={styles.fundJurisdiction__col}>
            {data.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.fundJurisdiction__item}
              >
                <h3>{item.title}</h3>
                {item.text && <p>{item.text}</p>}
                {item.text1 && (
                  <ul>
                    <li>{item.text1}</li>
                    <li>{item.text2}</li>
                    <li>{item.text3}</li>
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
