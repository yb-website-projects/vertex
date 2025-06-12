'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './GeographicDiversification.module.scss';

export const GeographicDiversification = () => {
  const t = useTranslations('geographicDiversification');

  const data = [
    {
      title: t('item1.title', {
        fallback: 'Singapore & Southeast Asia',
      }),
      description: t('item1.description', {
        fallback:
          'Tech innovation, real estate growth corridors, and early-stage fintech opportunities.',
      }),
      location: 'Singapore',
    },
    {
      title: t('item2.title', {
        fallback: 'Israel',
      }),
      description: t('item2.description', {
        fallback: 'Cybersecurity, B2B SaaS platforms, and digital payment solutions.',
      }),
      location: 'Israel',
    },
    {
      title: t('item3.title', {
        fallback: 'Europe (incl. UK)',
      }),
      description: t('item3.description', {
        fallback: 'Proptech, stable private credit markets, and real estate development.',
      }),
      location: 'Europe',
    },
    {
      title: t('item4.title', {
        fallback: 'North America',
      }),
      description: t('item4.description', {
        fallback: 'Growth equity investments and pre-IPO venture capital participation.',
      }),
      location: 'North America',
    },
    {
      title: t('item5.title', {
        fallback: 'UAE/Dubai',
      }),
      description: t('item5.description', {
        fallback:
          'Hospitality and logistics-linked real estate, plus high-yield credit opportunities.',
      }),
      location: 'UAE',
    },
  ];

  return (
    <section className={styles.geographicDiversification}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          dangerouslySetInnerHTML={{
            __html: t('title', {
              fallback: 'Geographic Diversification',
            }),
          }}
        />

        <div className={styles.geographicDiversification__row}>
          {data.map((item, index) => (
            <div key={index} className={styles.geographicDiversification__col}>
              <div>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
              {item.location === 'Singapore' && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255278.11535313536!2d103.6592300280363!3d1.3440836619253285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1767b42b8ec9%3A0x400f7acaedaa420!2sSingapore!5e0!3m2!1sen!2sua!4v1749721491231!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
              {item.location === 'Israel' && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487844.078128611!2d32.44044890242836!3d31.383868601420126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500492432a7c98b%3A0x6a6b422013352cba!2sIsrael!5e0!3m2!1sen!2sua!4v1749721588661!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
              {item.location === 'Europe' && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283138.46067924!2d6.628572696101025!3d48.602539317964094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sua!4v1749721617528!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
              {item.location === 'North America' && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26655348.5134428!2d-125.56361818557603!3d46.70314525487429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b30b71698e729d%3A0x131328839761a382!2sNorth%20America!5e0!3m2!1sen!2sua!4v1749721641246!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
              {item.location === 'UAE' && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722544.305707933!2d51.30668040481522!3d24.336138810224497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sua!4v1749721658230!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.geographicDiversification__note}
        >
          <b>
            {t('note1', {
              fallback: 'Risk Mitigation',
            })}
          </b>
          <br />
          {t('note2', {
            fallback: 'All investments undergo',
          })}{' '}
          <b>
            {t('note3', {
              fallback: 'geo-risk evaluations',
            })}
          </b>{' '}
          {t('note4', {
            fallback: 'based on rule of law,',
          })}
          <br />
          {t('note5', {
            fallback: 'FX exposure, and capital controls, ensuring stability and governance.',
          })}
        </motion.div>
      </div>
    </section>
  );
};
