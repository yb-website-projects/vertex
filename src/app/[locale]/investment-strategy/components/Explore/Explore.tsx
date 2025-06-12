'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit';

import styles from './Explore.module.scss';

export const Explore = () => {
  const t = useTranslations('exploreFund');

  const explore = [
    {
      title: t('title1', {
        fallback: 'Learn how Vertex FinCapital operates <br/>within a regulated framework:',
      }),
      text: t('buttonText1', { fallback: 'Investment Strategy' }),
      link: '/investment-strategy',
      image: '/images/fund/explore1.png',
    },
    {
      title: t('title2', {
        fallback: 'Understand eligibility, <br/>subscription steps, and reporting',
      }),
      text: t('buttonText2', { fallback: 'Investor Information' }),
      link: '/investor-information',
      image: '/images/fund/explore2.png',
    },
  ];

  return (
    <section className={styles.explore}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', { fallback: 'Explore the Fund Further' })}
        </motion.h2>
        <div className={styles.explore__row}>
          {explore.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.col}
            >
              <Image src={item.image} alt={item.title} width={495} height={250} />
              <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              <Button url={item.link} buttonType="link" color="white" arrow>
                {item.text}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
