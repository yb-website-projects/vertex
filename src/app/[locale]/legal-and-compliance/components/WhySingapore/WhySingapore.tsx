'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WhySingapore.module.scss';

export const WhySingapore = () => {
  const t = useTranslations('whySingapore');

  const data = [
    {
      text: t.rich('item1.text', {
        fallback:
          '<b>Ring-fenced sub-funds</b> – Each compartment is legally separate, isolating liabilities',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      text: t.rich('item2.text', {
        fallback:
          '<b>Streamlined approvals</b> – Fast-track fund registration and compliance under MAS',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      text: t.rich('item3.text', {
        fallback:
          '<b>Tax efficiency</b> – No capital gains tax and access to Singapore’s tax exemption schemes',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
    {
      text: t.rich('item4.text', {
        fallback:
          '<b>Global trust</b> – Singapore law supports international dispute resolution and investor confidence',
        b: (chunks) => <b>{chunks}</b>,
      }),
    },
  ];

  return (
    <section className={styles.whySingapore}>
      <div className={'_container'}>
        <div className={styles.whySingapore__inner}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', { fallback: 'Why Singapore VCC Matters' })}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('text', {
              fallback:
                'Vertex FinCapital is structured under the Variable Capital Company (VCC) regime—Singapore’s gold-standard framework for modern funds.',
            })}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src={'/images/legal-and-compliance/why-singapore.png'}
              alt="Why Singapore"
              width={1110}
              height={300}
            />
          </motion.div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('subtitle', { fallback: 'Legal and Operational Advantages' })}
          </motion.h3>
          <div className={styles.whySingapore__list}>
            {data.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.whySingapore__item}
              >
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
