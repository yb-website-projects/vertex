'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './HaveQuestion.module.scss';

export const HaveQuestion = () => {
  const t = useTranslations('haveQuestion');

  return (
    <section className={styles.haveQuestion}>
      <div className={styles.haveQuestion__inner}>
        <div className={'_container'}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.haveQuestion__cta}
          >
            <h2>
              {t('cta.title', {
                fallback: 'Have questions?',
              })}
            </h2>
            <Button buttonType="link" color="white" url={'/contact-us'}>
              {t('cta.buttonText', {
                fallback: 'Contact Us',
              })}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
