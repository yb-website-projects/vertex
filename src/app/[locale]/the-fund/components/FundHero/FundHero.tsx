'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './FundHero.module.scss';

export const FundHero = () => {
  const t = useTranslations('fundHero');

  return (
    <section className={styles.fundHero}>
      <div className={'_container'}>
        <div className={styles.fundHero__inner}>
          <div className={styles.fundHero__content}>
            <h1
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Vertex FinCapital',
                }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t('description', {
                  fallback: 'Singapore-domiciled. Institutionally managed. Focused on results.',
                }),
              }}
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image src="/images/fund/hero.png" alt="fund hero image" width={507} height={470} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
