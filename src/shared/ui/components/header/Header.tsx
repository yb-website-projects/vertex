'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { Burger, ChevronDown } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit';

import styles from './Header.module.scss';

export const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('header');

  return (
    <>
      <header className={styles.header}>
        <div className={'_container'}>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
            </div>
            <button
              className={styles.burger}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Burger />
            </button>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <Link href="#">{t('theFund', { fallback: 'The Fund' })}</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="#">
                    {t('investmentStrategy', { fallback: 'Investment Strategy' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="#">
                    {t('investorInformation', { fallback: 'Investor Information' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="#">{t('serviceProviders', { fallback: 'Service Providers' })}</Link>
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
                      <Link href="#">
                        {t('legalAndCompliance', { fallback: 'Legal & Compliance' })}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <Button url="/contact" color="white" buttonType="link">
              {t('contactUs', { fallback: 'Contact Us' })}
            </Button>
          </div>
        </div>
      </header>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href="#">{t('theFund', { fallback: 'The Fund' })}</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#">{t('investmentStrategy', { fallback: 'Investment Strategy' })}</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#">{t('investorInformation', { fallback: 'Investor Information' })}</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#">{t('serviceProviders', { fallback: 'Service Providers' })}</Link>
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
                  <Link href="#">
                    {t('legalAndCompliance', { fallback: 'Legal & Compliance' })}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Button url="/contact" color="white" buttonType="link">
          {t('contactUs', { fallback: 'Contact Us' })}
        </Button>
      </div>
    </>
  );
};
