'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './SubscriptionProcess.module.scss';

export const SubscriptionProcess = () => {
  const t = useTranslations('subscriptionProcess');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Contact Us',
      }),
      text: t('item1.text', {
        fallback:
          'Start by contacting our team to express your interest in participating. You can reach us via phone, email, or the request form on this website.',
      }),
    },
    {
      title: t('item2.title', {
        fallback: 'Receive Fund Documents',
      }),
      text: t('item2.text', {
        fallback:
          'Once your request is received, we will send you the Private Placement Memorandum (PPM), subscription forms, and all relevant legal documentation.',
      }),
    },
    {
      title: t('item3.title', {
        fallback: 'Complete KYC/AML',
      }),
      text: t('item3.text', {
        fallback:
          'To proceed, you’ll need to submit identity verification documents and complete the required KYC and AML forms. This is a standard regulatory step.',
      }),
    },
    {
      title: t('item4.title', {
        fallback: 'Sign the Subscription Agreement',
      }),
      text: t('item4.text', {
        fallback:
          'After compliance approval, you will sign the Subscription Agreement and any additional forms needed to confirm your commitment.',
      }),
    },
    {
      title: t('item5.title', {
        fallback: 'Transfer Capital',
      }),
      text: t('item5.text', {
        fallback:
          'Wire your investment amount to the fund’s custodial account held with DBS Bank Ltd. Full instructions will be provided.',
      }),
    },
    {
      title: t('item6.title', {
        fallback: 'Receive Confirmation',
      }),
      text: t('item6.text', {
        fallback:
          'Upon successful receipt and processing, you will receive official confirmation of your allocation and onboarding into the fund.',
      }),
    },
  ];

  return (
    <section className={styles.subscriptionProcess}>
      <div className={styles.subscriptionProcess__inner}>
        <div className={'_container'}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Subscription Process',
              }),
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('text', {
                fallback:
                  'If you wish to join Vertex FinCapital, follow the steps below. Each stage ensures <br/>compliance, transparency, and a smooth onboarding experience.',
              }),
            }}
          />
          <div className={styles.subscriptionProcess__row}>
            {data.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.subscriptionProcess__col}
              >
                <h3>
                  <span>0{index + 1}</span> {item.title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
