'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ServiceProvidersHero.module.scss';

export const ServiceProvidersHero = () => {
  const t = useTranslations('serviceProvidersHero');

  return (
    <section className={styles.serviceProvidersHero}>
      <div className={'_container'}>
        <div className={styles.serviceProvidersHero__inner}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Service Providers',
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
                  'Specialist Institutions. Independent Oversight. Institutional-Grade Operations.',
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
              src="/images/service-providers/hero-image.png"
              alt="service providers hero image"
              width={1110}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
