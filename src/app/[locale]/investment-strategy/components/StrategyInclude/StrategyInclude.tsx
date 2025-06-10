'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './StrategyInclude.module.scss';

export const StrategyInclude = () => {
  const t = useTranslations('strategyInclude');

  return (
    <section className={styles.strategyInclude}>
      <div className={styles.strategyInclude__inner}>
        <div className={'_container'}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.strategyInclude__body}
          >
            <Image
              src="/images/investment-strategy/strategy-include.png"
              alt="strategy include"
              width={515}
              height={400}
            />
            <div>
              <h2
                dangerouslySetInnerHTML={{
                  __html: t('title', {
                    fallback: 'Include',
                  }),
                }}
              />
              <ul>
                <li>
                  {t('item1', {
                    fallback: 'Dynamic private market investment strategy',
                  })}
                </li>
                <li>
                  {t('item2', {
                    fallback:
                      'Capital may be temporarily allocated to listed securities while private deals are in process',
                  })}
                </li>
                <li>
                  {t('item3', {
                    fallback:
                      'Managed through a dedicated brokerage account by a senior investment manager',
                  })}
                </li>
                <li>
                  {t('item4', {
                    fallback: 'Focus on value-based equity and bond positions to avoid cash drag',
                  })}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
