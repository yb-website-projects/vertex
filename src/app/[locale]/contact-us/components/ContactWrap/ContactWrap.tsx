'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/contactForm/ui/ContactForm/ContactForm';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ContactWrap.module.scss';

export const ContactWrap = () => {
  const t = useTranslations('contactWrap');

  return (
    <>
      <section className={styles.contactWrap}>
        <div className="_container">
          <div className={styles.contactWrap__body}>
            <div className={styles.contactWrap__col}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                <h2>
                  {t('title', {
                    fallback: 'Contact Us',
                  })}
                </h2>
                <p>
                  {t('description', {
                    fallback: 'Inquire. Get Assistance. Stay Connected.',
                  })}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h5>
                  {t('subtitle1', {
                    fallback: 'Where to Reach Us',
                  })}
                </h5>
                <p>
                  {t('subtitle1Description', {
                    fallback:
                      'Our team is available to respond to fund-related inquiries and direct requests. Please use the contact details below to connect with us.',
                  })}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span>
                  {t('officeAddress', {
                    fallback: 'Office Address:',
                  })}
                </span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283138.46067924!2d6.628572696101025!3d48.602539317964094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sua!4v1749721617528!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span>
                  {t('registrationAddress', {
                    fallback: 'Registration Address:',
                  })}
                </span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283138.46067924!2d6.628572696101025!3d48.602539317964094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sua!4v1749721617528!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.contacts}
              >
                {/**<Link href="tel:+6562218888">
                  <Image src="/images/phone.svg" alt="phone" width={16} height={16} />
                  <span>+65 6221 8888</span>
                </Link> */}

                <Link href="mailto:info@vertexfcapital.com">
                  <Image src="/images/email.svg" alt="email" width={16} height={16} />
                  <span>info@vertexfcapital.com</span>
                </Link>
              </motion.div>
            </div>
            <div className={styles.contactWrap__col}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h5>
                  {t('subtitle2', {
                    fallback: 'Send a Message',
                  })}
                </h5>
                <p>
                  {t('subtitle2Description', {
                    fallback:
                      'For direct inquiries or follow-up requests, please complete the form below and our team will respond promptly.',
                  })}
                </p>
              </motion.div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactText}>
        <div className="_container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: t('subtitle3', {
                fallback: 'Let your capital do what it <br/>was meant to — create value.',
              }),
            }}
          />
        </div>
      </section>
    </>
  );
};
