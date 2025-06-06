import Link from 'next/link';

import { ButtonArrow } from '@/shared/ui/icons';

import styles from './Button.module.scss';

export const Button = ({
  url,
  children,
  color = 'black',
  buttonType = 'button',
  arrow = false,
}: {
  url?: string;
  children: React.ReactNode;
  color?: 'black' | 'white';
  buttonType?: 'button' | 'link';
  arrow?: boolean;
}) => {
  if (buttonType === 'link') {
    return (
      <Link href={url || ''} className={`${styles.button} ${styles[`button--${color}`]}`}>
        {children}
        {arrow && <ButtonArrow />}
      </Link>
    );
  } else {
    return (
      <button type={buttonType} className={`${styles.button} ${styles[`button--${color}`]}`}>
        {children}
        {arrow && <ButtonArrow />}
      </button>
    );
  }
};
