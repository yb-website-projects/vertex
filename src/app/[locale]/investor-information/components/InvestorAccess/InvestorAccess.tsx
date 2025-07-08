'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { useFundAccessStore } from '@/features/fundAccessRequest/store/fundAccessStore';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './InvestorAccess.module.scss';

export const InvestorAccess = () => {
  const t = useTranslations('investorAccess');

  const { open } = useFundAccessStore();

  const handleRequest = () => {
    open();
    document.body.style.overflow = 'hidden';
  };

  return (
    <section className={styles.investorAccess}>
      <div className={'_container'}>
        <div className={styles.investorAccess__inner}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.left}
          >
            <h2
              dangerouslySetInnerHTML={{
                __html: t('title', { fallback: 'Investor Access & Inquiry' }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t('description', {
                  fallback:
                    'Vertex FinCapital works exclusively with accredited investors. To request documentation or discuss participation, please submit the form below. All submissions are reviewed individually by the fund’s management team.',
                }),
              }}
            />
            <Button buttonType="button" color="white" onClick={handleRequest}>
              {t('cta.buttonText', {
                fallback: 'Request Access',
              })}
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.right}
          >
            <Image
              src="/images/investor/investor-access.png"
              alt="investor access"
              width={531}
              height={604}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
