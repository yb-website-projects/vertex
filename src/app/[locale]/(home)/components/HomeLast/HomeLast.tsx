'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './HomeLast.module.scss';

import { useFundAccessStore } from '@/featured/fundAccessRequest/store/fundAccessStore';

export const HomeLast = () => {
  const t = useTranslations('homeLast');

  const { open } = useFundAccessStore();

  const handleContactUs = () => {
    open();
  };

  return (
    <section className={styles.homeLast}>
      <div className={'_container'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.homeLast__inner}
        >
          <div className={styles.left}>
            <div>
              <h2>
                {t('title', {
                  fallback: 'Investor Access & Inquiry',
                })}
              </h2>
              <p>
                {t('description', {
                  fallback:
                    'Vertex FinCapital works exclusively with accredited investors. To request documentation or discuss participation, please submit the form below. All submissions are reviewed individually by the fund’s management team.',
                })}
              </p>
            </div>
            <Button buttonType="button" arrow color="white" onClick={handleContactUs}>
              {t('button', {
                fallback: 'Request',
              })}
            </Button>
          </div>
          <Image src="/images/home/homeLast.png" alt="home last" width={500} height={375} />
        </motion.div>
      </div>
    </section>
  );
};
