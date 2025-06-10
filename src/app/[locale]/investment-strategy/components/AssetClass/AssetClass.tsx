'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './AssetClass.module.scss';

export const AssetClass = () => {
  const t = useTranslations('assetClass');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Real Estate',
      }),
      description: t('item1.description', {
        fallback:
          'Equity or structured debt in pre-completion residential, commercial, or mixed-use projects. Priority on permits, sponsors, and defined exits (sales/refinancing).',
      }),
      image: '/images/investment-strategy/asset1.png',
    },
    {
      title: t('item2.title', {
        fallback: 'Private Equity',
      }),
      description: t('item2.description', {
        fallback:
          'Expansion-stage follow-on investments. Focus on payments, asset-light real estate platforms, and scalable B2B models.',
      }),
      image: '/images/investment-strategy/asset2.png',
    },
    {
      title: t('item3.title', {
        fallback: 'Private Credit',
      }),
      description: t('item3.description', {
        fallback:
          'Secured lending to mid-market firms. Yields of 8–20% p.a., collateralized by property, receivables, or guarantees. Includes board rights, covenants, oversight.',
      }),
      image: '/images/investment-strategy/asset3.png',
    },
    {
      title: t('item4.title', {
        fallback: 'Venture Capital',
      }),
      description: t('item4.description', {
        fallback:
          'Direct or syndicated exposure to early-stage fintech, proptech, and data infra startups. Targets asymmetric upside.',
      }),
      image: '/images/investment-strategy/asset4.png',
    },
    {
      title: t('item5.title', {
        fallback: 'Public Small-Cap Equities',
      }),
      description: t('item5.description', {
        fallback:
          'Opportunistic positions in listed or pre-IPO firms with undervaluation and near-term catalysts (e.g., listing, acquisition).',
      }),
      image: '/images/investment-strategy/asset5.png',
    },
  ];

  return (
    <section className={styles.assetClass}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Asset Class Details',
            }),
          }}
        />
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('subtitle', {
              fallback: 'Dynamic private market investment strategy',
            }),
          }}
        />
        <div className={styles.assetClass__row}>
          {data.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.assetClass__col}
            >
              <Image src={item.image} alt={item.title} width={338} height={438} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
