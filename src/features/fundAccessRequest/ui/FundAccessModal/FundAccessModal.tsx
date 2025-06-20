'use client';

import { useTranslations } from 'next-intl';

import { Close } from '@/shared/ui/icons/close/Close';
import { Button } from '@/shared/ui/kit';

import { useFundAccessStore } from '../../store/fundAccessStore';
import { FundAccessForm } from '../FundAccessForm/FundAccessForm';
import styles from './FundAccessModal.module.scss';

export const FundAccessModal = () => {
  const { isOpen, close, isSuccess, setIsSuccess } = useFundAccessStore();
  const t = useTranslations('fundAccessRequest');

  const handleClose = () => {
    close();
    setTimeout(() => {
      setIsSuccess(false);
    }, 500);
  };

  if (isSuccess) {
    return (
      <div className={`${styles.modal} ${isOpen ? styles.visible : ''} ${styles.success}`}>
        <div className={styles.modal__content}>
          <div className={styles.modal__close} onClick={handleClose}>
            <Close />
          </div>
          <h2>Request Confirmed</h2>
          <p>
            Thank you for your submission. We will verify your investor status and respond with the
            relevant materials or schedule a consultation as requested.
          </p>
          <Button color="black" buttonType="button" onClick={handleClose}>
            Continue
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.modal} ${isOpen ? styles.visible : ''}`}>
      <div className={styles.modal__content}>
        <div className={styles.modal__close} onClick={handleClose}>
          <Close />
        </div>
        <h2>
          {t('title', {
            fallback: 'Fund Access Request',
          })}
        </h2>
        <FundAccessForm />
      </div>
    </div>
  );
};
