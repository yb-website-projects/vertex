'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './FundJurisdiction.module.scss';

export const FundJurisdiction = () => {
  const t = useTranslations('fundJurisdiction');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Regulated Environment',
      }),
      text: t.rich('item1.text', {
        fallback:
          'Licensed and supervised under the Monetary Authority of Singapore (MAS), ensuring compliance with KYC, AML, and reporting standards.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'VCC Sub-Fund Structure',
      }),
      text: t.rich('item2.text', {
        fallback:
          'Structured as an open-ended sub-fund within the Variable Capital Company framework. Assets are ring-fenced and legally segregated from other sub-funds.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Advanced Financial Infrastructure',
      }),
      text: t.rich('item3.text', {
        fallback:
          'Operates in one of the world’s leading financial jurisdictions, with streamlined fund registration and institutional-grade service providers.',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'Tax Efficiency',
      }),
      text: t.rich('item4.text', {
        fallback:
          'Eligible for fund-specific tax exemptions, no capital gains tax in Singapore, and access to a broad network of Double Taxation Agreements (DTAs).',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
  ];

  return (
    <section className={styles.fundJurisdiction}>
      <div className={styles.fundJurisdiction__inner}>
        <div className={'_container'}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.fundJurisdiction__title}
          >
            <h2>{t('title', { fallback: 'Fund Jurisdiction & Legal Framework' })}</h2>
            <p>
              {t('text', {
                fallback:
                  'Vertex FinCapital operates under a Singapore-regulated legal structure designed to meet the highest institutional standards. The fund is structured as a sub-fund of XEQ Global Alternatives VCC and benefits from the following key features:',
              })}
            </p>
          </motion.div>
          <div className={styles.fundJurisdiction__row}>
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
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.fundJurisdiction__col}
            >
              <Image
                src={'/images/legal-and-compliance/fund-jurisdiction.png'}
                alt="Fund Jurisdiction"
                width={531}
                height={604}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
