'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');

  const year = new Date().getFullYear();

  const links = [
    {
      title: t('links.title1', { fallback: 'Fund' }),
      links: [
        {
          title: t('links.link1', { fallback: 'The Fund' }),
          url: '/the-fund',
        },
        {
          title: t('links.link2', { fallback: 'Service Providers' }),
          url: '/service-providers',
        },
      ],
    },
    {
      title: t('links.title2', { fallback: 'For Investor' }),
      links: [
        {
          title: t('links.link3', { fallback: 'Investment Strategy' }),
          url: '/investment-strategy',
        },
        {
          title: t('links.link4', { fallback: 'Investor Information' }),
          url: '/investor-information',
        },
      ],
    },
    {
      title: t('links.title3', { fallback: 'Company' }),
      links: [
        {
          title: t('links.link5', { fallback: 'News & Updates' }),
          url: '/news-and-updates',
        },
        {
          title: t('links.link6', { fallback: 'Contact Us' }),
          url: '/contact-us',
        },
      ],
    },
    {
      title: t('links.title3', { fallback: 'Legal' }),
      links: [
        {
          title: t('links.link7', { fallback: 'Privacy Policy' }),
          url: '/legal/privacy-policy',
        },
        {
          title: t('links.link8', { fallback: 'Cookie Policy' }),
          url: '/legal/cookie-policy',
        },
        {
          title: t('links.link9', { fallback: 'Terms of Use' }),
          url: '/legal/terms-of-use',
        },
        {
          title: t('links.link10', { fallback: 'Disclaimer' }),
          url: '/legal/disclaimer',
        },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={'_container'}>
        <div className={styles.footer__row}>
          <div className={styles.footer__col1}>
            <div className={styles.logo}>
              <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
              <h5
                dangerouslySetInnerHTML={{
                  __html: t('companyInfo', {
                    fallback: 'A Regulated Fund Investing in High-Impact Opportunities.',
                  }),
                }}
              />
            </div>

            <p>
              {t('registeredAddress', {
                fallback: 'Registered address:',
              })}
              <span></span>
            </p>
            <p>
              {t('registeredNumber', {
                fallback: 'Registered number:',
              })}
              <span></span>
            </p>
            <p>
              {t('officeAddress', {
                fallback: 'Office address:',
              })}
              <span></span>
            </p>

            <div className={styles.contacts}>
              {/**<Link href="tel:+6562218888">
                <Image src="/images/phone.svg" alt="phone" width={16} height={16} />
                <span>+65 6221 8888</span>
              </Link> */}
              <Link href="mailto:info@vertexfcapital.com">
                <Image src="/images/email.svg" alt="email" width={16} height={16} />
                <span>info@vertexfcapital.com</span>
              </Link>
            </div>
          </div>
          <div className={styles.footer__col2}>
            {links.map((link, index) => (
              <div key={index}>
                <h5>{link.title}</h5>
                <nav>
                  {link.links.map((link) => (
                    <Link key={link.title} href={link.url}>
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <p>
            © {year}{' '}
            {t('copyright', {
              fallback:
                'Vertex FinCapital. All rights reserved. A sub-fund of XEQ Global Alternatives VCC, Singapore. Managed by XEQ Capital, licensed by the Monetary Authority of Singapore.',
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
