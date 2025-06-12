'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './StrategicFlexibility.module.scss';

export const StrategicFlexibility = () => {
  const t = useTranslations('strategicFlexibility');

  return (
    <section className={styles.strategicFlexibility}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Strategic Flexibility',
            }),
          }}
        />
        <div className={styles.strategicFlexibility__row}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>
              {t('item1', {
                fallback:
                  'When private deal flow is pending, available funds are temporarily allocated to',
              })}{' '}
              <b>
                {t('item2', {
                  fallback: 'liquid equities or bonds',
                })}
              </b>
              .{' '}
              {t('item3', {
                fallback:
                  'This ensures productivity and prevents idle capital while maintaining a balanced portfolio.',
              })}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/investment-strategy/strategic-flexibility.png"
              alt="strategic flexibility"
              width={543}
              height={250}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
