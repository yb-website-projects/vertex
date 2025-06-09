'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IdentityRegulatoryFramework.module.scss';

export const IdentityRegulatoryFramework = () => {
  const t = useTranslations('identityRegulatoryFramework');

  return (
    <section className={styles.identityRegulatoryFramework}>
      <div className={styles.identityRegulatoryFramework__inner}>
        <div className={'_container'}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', { fallback: 'Identity & Regulatory Framework' })}
          </motion.h2>
          <div className={styles.identityRegulatoryFramework__content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`${styles.col} ${styles.text}`}
            >
              <h3
                dangerouslySetInnerHTML={{
                  __html: t('item1.title', { fallback: 'Fund <br/>Structure' }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('item1.description', {
                    fallback:
                      'Vertex is a Singapore-domiciled, open-ended fund, which is managed by Vertex FinCapital Pte. Ltd. (“Vertex”), a Singapore-registered fund manager.',
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
                src="/images/fund/identity1.png"
                alt="fund hero image"
                width={704}
                height={200}
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
                src="/images/fund/identity2.png"
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
                  __html: t('item2.title', { fallback: 'Regulatory <br/>Status' }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('item2.description', {
                    fallback:
                      'The fund is licensed and regulated by the Monetary Authority of Singapore (MAS).',
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
                src="/images/fund/identity3.png"
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
              className={`${styles.col} ${styles.wide}`}
            >
              <Image
                src="/images/fund/identity4.png"
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
                  __html: t('item3.title', { fallback: 'Management &<br/>Framework' }),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t('item3.description', {
                    fallback:
                      'Managed by XEQ Capital, promoted by YB Advisors. VCC structure provides asset protection, tax efficiency, and governance.',
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
