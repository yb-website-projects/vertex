'use client';

import { useTranslations } from 'next-intl';

import { Close } from '@/shared/ui/icons/close/Close';
import { Button } from '@/shared/ui/kit';

import { useContactFormStore } from '../../store/ContactFormStore';
import styles from './MessageSent.module.scss';

export const MessageSent = () => {
  const { isSuccess, setIsSuccess } = useContactFormStore();
  const t = useTranslations('contactForm');

  const handleClose = () => {
    setIsSuccess(false);
  };

  return (
    <div className={`${styles.modal} ${isSuccess ? styles.visible : ''} ${styles.success}`}>
      <div className={styles.modal__content}>
        <div className={styles.modal__close} onClick={handleClose}>
          <Close />
        </div>
        <h2>
          {t('messageSentTitle', {
            fallback: 'Message Sent',
          })}
        </h2>
        <p>
          {t('messageSentDescription', {
            fallback:
              'Thank you for your message. A representative of Vertex FinCapital will contact you shortly.',
          })}
        </p>
        <Button color="black" buttonType="button" onClick={handleClose}>
          {t('messageSentButton', {
            fallback: 'Continue',
          })}
        </Button>
      </div>
    </div>
  );
};
