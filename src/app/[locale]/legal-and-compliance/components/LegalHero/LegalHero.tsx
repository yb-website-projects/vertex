'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './LegalHero.module.scss';

export const LegalHero = () => {
  const t = useTranslations('legalHero');

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
                fallback: 'Legal and Compliance',
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
                  'Transparent structure. Independent oversight. Regulated under Singapore law.',
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
              src="/images/legal-and-compliance/hero-image.png"
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
