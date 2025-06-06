'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { Burger, ChevronDown } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit';

import styles from './Header.module.scss';

export const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations('header');

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <div className={'_container'}>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              {isScrolled ? (
                isMobileMenuOpen ? (
                  <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
                ) : (
                  <Image src="/images/logo-black.svg" alt="logo" width={100} height={40} />
                )
              ) : (
                <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
              )}
            </Link>
            <button
              className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''} ${isScrolled ? styles.black : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Burger />
            </button>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <Link className={`${isScrolled ? styles.black : ''}`} href="#">
                    {t('theFund', { fallback: 'The Fund' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link className={`${isScrolled ? styles.black : ''}`} href="#">
                    {t('investmentStrategy', { fallback: 'Investment Strategy' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link className={`${isScrolled ? styles.black : ''}`} href="#">
                    {t('investorInformation', { fallback: 'Investor Information' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link className={`${isScrolled ? styles.black : ''}`} href="#">
                    {t('serviceProviders', { fallback: 'Service Providers' })}
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link
                    href="#"
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                    className={`${isSubmenuOpen ? styles.open : ''} ${isScrolled ? styles.black : ''}`}
                  >
                    {t('menu', { fallback: 'Menu' })}
                    <ChevronDown />
                  </Link>
                  <ul className={`${styles.submenu} ${isSubmenuOpen ? styles.open : ''}`}>
                    <li>
                      <Link className={`${isScrolled ? styles.black : ''}`} href="#">
                        {t('newsAndUpdates', { fallback: 'News & Updates' })}
                      </Link>
                    </li>
                    <li>
                      <Link className={`${isScrolled ? styles.black : ''}`} href="#">
                        {t('legalAndCompliance', { fallback: 'Legal & Compliance' })}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <Button url="/contact" color={isScrolled ? 'black' : 'white'} buttonType="link">
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
