'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './LegalServices.module.scss';

export const LegalServices = () => {
  const t = useTranslations('legalServices');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Auditing and Tax Compliance',
      }),
      description: t('item1.description', {
        fallback:
          'Vertex FinCapital maintains full financial transparency through independent audits and expert tax advisory, aligned with Singapore’s regulatory framework.',
      }),
      blocks: [
        {
          title: t('item1.block1.title', {
            fallback: 'Baker Tilly TFW LLP',
          }),
          position: t('item1.block1.position', {
            fallback: 'Auditor',
          }),
          description: t('item1.block1.description', {
            fallback:
              'A leading audit firm responsible for the fund’s annual audits in accordance with Singapore Financial Reporting Standards (SFRS).',
          }),
          list: [
            {
              text: t('item1.block1.list.item1.text', {
                fallback: 'Verifies Net Asset Values (NAVs)',
              }),
            },
            {
              text: t('item1.block1.list.item2.text', {
                fallback: 'Confirms fund expenses and asset valuations',
              }),
            },
            {
              text: t('item1.block1.list.item3.text', {
                fallback: 'Issues audited reports post-fiscal year-end',
              }),
            },
          ],
        },
        {
          title: t('item1.block2.title', {
            fallback: 'Baker Tilly & Consultancy',
          }),
          position: t('item1.block2.position', {
            fallback: 'Tax Advisor',
          }),
          description: t('item1.block2.description', {
            fallback:
              'Provides ongoing tax guidance to optimise fund structure and ensure legal compliance.',
          }),
          list: [
            {
              text: t('item1.block2.list.item1.text', {
                fallback: 'Designs tax-efficient structures under Singapore’s fund regime',
              }),
            },
            {
              text: t('item1.block2.list.item2.text', {
                fallback: 'Supports participation in tax exemption schemes',
              }),
            },
            {
              text: t('item1.block2.list.item3.text', {
                fallback:
                  'Ensures access to Double Taxation Agreement (DTA) benefits for eligible investors',
              }),
            },
          ],
        },
      ],
    },
    {
      title: t('item2.title', {
        fallback: 'Legal Counsel & Documentation',
      }),
      description: t('item2.description', {
        fallback:
          'Legal operations and governance oversight are provided by a specialist legal partner with deep fund expertise.',
      }),
      image: '/images/legal-and-compliance/legal-services-2.png',
      blocks: [
        {
          title: t('item2.block1.title', {
            fallback: 'BTPLaw LLC',
          }),
          position: t('item2.block1.position', {
            fallback: 'Legal Counsel',
          }),
          description: t('item2.block1.description', {
            fallback:
              'A Singapore-based law firm advising on fund structuring, registration, and compliance.',
          }),
          list: [
            {
              text: t('item2.block1.list.item1.text', {
                fallback:
                  'Drafts and reviews offering documents, subscription agreements, and other legal materials',
              }),
            },
            {
              text: t('item2.block1.list.item2.text', {
                fallback: 'Manages regulatory filings with relevant authorities',
              }),
            },
            {
              text: t('item2.block1.list.item3.text', {
                fallback:
                  'Provides ongoing legal guidance throughout the fund’s operations and lifecycle',
              }),
            },
          ],
        },
      ],
    },
    {
      title: t('item3.title', {
        fallback: 'Custodianship and Asset Protection',
      }),
      description: t('item3.description', {
        fallback:
          'The fund’s financial assets are held and monitored by a top-tier custodian under institutional-grade protocols.',
      }),
      image: '/images/legal-and-compliance/legal-services-3.png',
      blocks: [
        {
          title: t('item3.block1.title', {
            fallback: 'DBS Bank Ltd',
          }),
          position: t('item3.block1.position', {
            fallback: 'Custodian',
          }),
          description: t('item3.block1.description', {
            fallback:
              'One of Asia’s leading banks, entrusted with the safekeeping and flow of fund capital.',
          }),
          list: [
            {
              text: t('item3.block1.list.item1.text', {
                fallback: 'Maintains dedicated custodial accounts for investor protection',
              }),
            },
            {
              text: t('item3.block1.list.item2.text', {
                fallback: 'Safeguards the fund’s cash positions and listed securities',
              }),
            },
            {
              text: t('item3.block1.list.item3.text', {
                fallback: 'Oversees settlement monitoring and day-to-day transaction flows',
              }),
            },
          ],
        },
      ],
    },
    {
      title: t('item4.title', {
        fallback: 'Corporate Governance',
      }),
      description: t('item4.description', {
        fallback:
          'Strong internal governance is maintained through ongoing statutory oversight and corporate recordkeeping.',
      }),
      image: '/images/legal-and-compliance/legal-services-4.png',
      blocks: [
        {
          title: t('item4.block1.title', {
            fallback: 'Atriox Management',
          }),
          position: t('item4.block1.position', {
            fallback: 'Company Secretary',
          }),
          description: t('item4.block1.description', {
            fallback:
              'A specialized corporate service provider ensuring structural and legal integrity of the fund entity.',
          }),
          list: [
            {
              text: t('item4.block1.list.item1.text', {
                fallback: 'Manages statutory compliance with Singapore’s ACRA',
              }),
            },
            {
              text: t('item4.block1.list.item2.text', {
                fallback: 'Maintains up-to-date director and shareholder registries',
              }),
            },
            {
              text: t('item4.block1.list.item3.text', {
                fallback: 'Oversees internal governance and documentation protocols',
              }),
            },
          ],
        },
      ],
    },
  ];

  return (
    <section className={styles.legalServices}>
      <div className={'_container'}>
        <div className={styles.legalServices__inner}>
          {data.map((item, index) => (
            <div key={index} className={styles.legalServices__item}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {item.description}
              </motion.p>
              <div className={styles.legalServices__blocks}>
                {item.image && <Image src={item.image} alt={item.title} width={531} height={284} />}
                {item.blocks.map((block, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    key={index}
                    className={styles.legalServices__block}
                  >
                    <h3>{block.title}</h3>
                    <h4>{block.position}</h4>
                    <p>{block.description}</p>
                    <ul>
                      {block.list.map((item, index) => (
                        <li key={index}>{item.text}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
