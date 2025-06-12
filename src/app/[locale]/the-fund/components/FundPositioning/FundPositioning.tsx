'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './FundPositioning.module.scss';

export const FundPositioning = () => {
  const t = useTranslations('fundPositioning');

  return (
    <section className={styles.fundPositioning}>
      <div className={'_container'}>
        <div className={styles.fundPositioning__inner}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.left}
          >
            <h2
              dangerouslySetInnerHTML={{
                __html: t('title', { fallback: 'Fund Positioning & Objectives' }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t('description', {
                  fallback:
                    'Vertex FinCapital serves as a core alternative allocation for accredited investors, combining boutique agility with institutional standards. The fund is limited to 20–30 participants and follows a high-conviction, access-driven strategy focused on private market opportunities.',
                }),
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.right}
          >
            <Image
              src="/images/fund/fund-positioning1.png"
              alt="fund positioning 1"
              width={355}
              height={270}
            />
            <Image
              src="/images/fund/fund-positioning2.png"
              alt="fund positioning 2"
              width={144}
              height={270}
            />
            <Image
              src="/images/fund/fund-positioning3.png"
              alt="fund positioning 3"
              width={144}
              height={270}
            />
            <Image
              src="/images/fund/fund-positioning4.png"
              alt="fund positioning 4"
              width={355}
              height={270}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
