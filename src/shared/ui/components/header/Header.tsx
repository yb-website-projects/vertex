'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { Burger, ChevronDown } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit';

import styles from './Header.module.scss';

import { useFundAccessStore } from '@/featured/fundAccessRequest/store/fundAccessStore';

export const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { open } = useFundAccessStore();

  const t = useTranslations('header');

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
  }, [pathname]);

  const handleContactUs = () => {
    setIsMobileMenuOpen(false);
    open();
  };

  return (
    <>
      <header className={`${styles.header} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={'_container'}>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
            </Link>
            <button
              className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Burger />
            </button>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <Link href="/the-fund">{t('theFund', { fallback: 'The Fund' })}</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/investment-strategy">
                    {t('investmentStrategy', { fallback: 'Investment Strategy' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/investor-information">
                    {t('investorInformation', { fallback: 'Investor Information' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/service-providers">
                    {t('serviceProviders', { fallback: 'Service Providers' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link
                    href="#"
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                    className={`${isSubmenuOpen ? styles.open : ''}`}
                  >
                    {t('menu', { fallback: 'Menu' })}
                    <ChevronDown />
                  </Link>
                  <ul className={`${styles.submenu} ${isSubmenuOpen ? styles.open : ''}`}>
                    <li>
                      <Link href="#">{t('newsAndUpdates', { fallback: 'News & Updates' })}</Link>
                    </li>
                    <li>
                      <Link href="/legal-and-compliance">
                        {t('legalAndCompliance', { fallback: 'Legal & Compliance' })}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <Button color="white" buttonType="link" url="/contact-us">
              {t('contactUs', { fallback: 'Contact Us' })}
            </Button>
          </div>
        </div>
      </header>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href="/the-fund">{t('theFund', { fallback: 'The Fund' })}</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/investment-strategy">
                {t('investmentStrategy', { fallback: 'Investment Strategy' })}
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/investor-information">
                {t('investorInformation', { fallback: 'Investor Information' })}
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/service-providers">
                {t('serviceProviders', { fallback: 'Service Providers' })}
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link
                href="#"
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className={isSubmenuOpen ? styles.open : ''}
              >
                {t('menu', { fallback: 'Menu' })}
                <ChevronDown />
              </Link>
              <ul className={`${styles.submenu} ${isSubmenuOpen ? styles.open : ''}`}>
                <li>
                  <Link href="#">{t('newsAndUpdates', { fallback: 'News & Updates' })}</Link>
                </li>
                <li>
                  <Link href="/legal-and-compliance">
                    {t('legalAndCompliance', { fallback: 'Legal & Compliance' })}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Button color="white" buttonType="button" onClick={() => handleContactUs()}>
          {t('contactUs', { fallback: 'Contact Us' })}
        </Button>
      </div>
    </>
  );
};
