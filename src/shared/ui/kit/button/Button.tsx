import Link from 'next/link';

import { ButtonArrow } from '@/shared/ui/icons';

import styles from './Button.module.scss';

export const Button = ({
  url,
  children,
  color = 'black',
  buttonType = 'button',
  arrow = false,
  onClick,
}: {
  url?: string;
  children: React.ReactNode;
  color?: 'black' | 'white' | 'gray' | 'gray-white';
  buttonType?: 'button' | 'link';
  arrow?: boolean;
  onClick?: () => void;
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
      <button
        type={buttonType}
        className={`${styles.button} ${styles[`button--${color}`]}`}
        onClick={onClick}
      >
        {children}
        {arrow && <ButtonArrow />}
      </button>
    );
  }
};
