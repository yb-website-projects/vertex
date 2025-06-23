'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './NewsHero.module.scss';

export const NewsHero = () => {
  const t = useTranslations('newsHero');

  return (
    <section className={styles.legalHero}>
      <div className={'_container'}>
        <div className={styles.legalHero__inner}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Insights & Analysis',
              }),
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('description', {
                fallback: 'Expert views on markets, capital, and innovation.',
              }),
            }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/news/hero-image.png"
              alt="legal and compliance hero image"
              width={1110}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
