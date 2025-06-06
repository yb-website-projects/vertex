'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HomeThird.module.scss';

export const HomeThird = () => {
  const t = useTranslations('homeThird');

  return (
    <section className={styles.homeThird}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Investment Entry: At a Glance',
            }),
          }}
        />
        <div className={styles.homeThird__row}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t('item1.title', {
                  fallback: 'Target Capital Raise',
                }),
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: t('item1.value', {
                  fallback: 'USD 15,000,000',
                }),
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t('item2.title', {
                  fallback: 'Planned Investor Group',
                }),
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: t('item2.value', {
                  fallback: 'Up to 30 <br/>accredited investors',
                }),
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t('item3.title', {
                  fallback: 'Minimum Investment',
                }),
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: t('item3.value', {
                  fallback: 'USD 200,000',
                }),
              }}
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image src="/images/home/homeThird.png" alt="home hero image" width={1110} height={350} />
        </motion.div>
      </div>
    </section>
  );
};
