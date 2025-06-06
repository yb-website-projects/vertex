'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HomeHero.module.scss';

export const HomeHero = () => {
  const t = useTranslations('homeHero');

  return (
    <section className={styles.homeHero}>
      <div className={'_container'}>
        <div className={styles.homeHero__inner}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Leverage Unique Opportunities. <br/>Create Value. Deliver Results.',
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
                fallback:
                  'Regulated in Singapore. Open-ended structure. <br/>Multi-asset strategy.',
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
              src="/images/home/hero-image.jpg"
              alt="home hero image"
              width={1110}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
