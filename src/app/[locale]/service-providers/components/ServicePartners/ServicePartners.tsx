'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ServicePartners.module.scss';

export const ServicePartners = () => {
  const t = useTranslations('servicePartners');

  const partners = [
    {
      name: 'Crypto Fund Services',
      position: 'Administrator',
      description:
        'Responsible for day-to-day fund operations, including account maintenance, NAV calculation, investor subscriptions and redemptions, and overall cash flow management.',
    },
    {
      name: 'DBS Bank Ltd',
      position: 'Custodian',
      description:
        'Safeguards the fund’s cash and listed securities through dedicated custodial accounts, while overseeing settlements and transaction flows.',
    },
    {
      name: 'Maybank Securities',
      position: 'Prime Broker',
      description:
        'Executes listed market trades, facilitates short-term public market allocations, and provides leverage and clearing services when applicable.',
    },
    {
      name: 'BTPLaw LLC',
      position: 'Legal Counsel',
      description:
        'Drafts and reviews fund documentation, manages regulatory filings and registration, and provides ongoing legal guidance on fund governance.',
    },
    {
      name: 'Baker Tilly TFW LLP',
      position: 'Auditor',
      description:
        'Conducts annual financial audits in line with Singapore Financial Reporting Standards, verifying NAVs, asset valuations, and fund-level expenses.',
    },
    {
      name: 'Atriox Management',
      position: 'Company Secretary',
      description:
        'Manages statutory filings with ACRA and maintains corporate records, director registers, and compliance documentation.',
    },
  ];

  return (
    <section className={styles.servicePartners}>
      <div className={styles.servicePartners__inner}>
        <div className={'_container'}>
          <div className={styles.servicePartners__content}>
            <div className={styles.servicePartners__col1}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('title', { fallback: 'Our Service Partners' })}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('description', {
                  fallback:
                    'Vertex FinCapital works with a select group of established service providers, each fulfilling a critical role in the fund’s legal, operational, and regulatory infrastructure. From administration and custody to audit, compliance, and tax advisory, these partners ensure that every aspect of the fund operates with institutional precision and transparency.',
                })}
              </motion.p>
            </div>
            <div className={styles.servicePartners__col2}>
              {partners.map((partner) => (
                <div className={styles.servicePartners__item} key={partner.name}>
                  <h3>{partner.name}</h3>
                  <h4>{partner.position}</h4>
                  <p>{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
