'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './CapitalDeployment.module.scss';

export const CapitalDeployment = () => {
  const t = useTranslations('capitalDeployment');

  return (
    <section className={styles.capitalDeployment}>
      <div className={styles.capitalDeployment__inner}>
        <div className={'_container'}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', { fallback: 'Capital Deployment & Management' })}
          </motion.h2>
          <div className={styles.capitalDeployment__content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col} ${styles.text}`}
            >
              <h3
                dangerouslySetInnerHTML={{
                  __html: t('item1.title', { fallback: 'Capital Deployment <br/>Strategy' }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('item1.description', {
                    fallback:
                      'Vertex FinCapital applies a structured approach to private market investments, allocating funds across real estate, private equity, credit, and venture opportunities. Each investment is selected based on rigorous evaluation, focusing on value creation and long-term returns.',
                  }),
                }}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col} ${styles.wide}`}
            >
              <Image
                src="/images/investment-strategy/capital1.png"
                alt="fund hero image"
                width={704}
                height={270}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col}`}
            >
              <Image
                src="/images/investment-strategy/capital2.png"
                alt="fund hero image"
                width={352}
                height={250}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col} ${styles.text}`}
            >
              <h3
                dangerouslySetInnerHTML={{
                  __html: t('item2.title', { fallback: 'Interim Fund <br/>Management' }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('item2.description', {
                    fallback:
                      'Pending private market transactions, unallocated capital is strategically placed in listed securities. This ensures liquidity maintenance while minimizing cash drag, allowing productive deployment even during transitional phases.',
                  }),
                }}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col}`}
            >
              <Image
                src="/images/investment-strategy/capital3.png"
                alt="fund hero image"
                width={352}
                height={250}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col} ${styles.wide}`}
            >
              <Image
                src="/images/investment-strategy/capital4.png"
                alt="fund hero image"
                width={352}
                height={200}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col} ${styles.text}`}
            >
              <h3
                dangerouslySetInnerHTML={{
                  __html: t('item3.title', { fallback: 'Investment <br/>Oversight' }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('item3.description', {
                    fallback:
                      'A senior investment manager directly oversees interim portfolio positions through a dedicated brokerage account. The focus remains on selecting high-quality equities and bonds, ensuring consistent performance and risk-adjusted returns.',
                  }),
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
