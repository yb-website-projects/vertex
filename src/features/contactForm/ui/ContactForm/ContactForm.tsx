'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { submitContactForm } from '../../api/submitContactForm';
import { contactFormSchema, type ContactFormValues } from '../../schema/ContactFormSchema';
import { useContactFormStore } from '../../store/ContactFormStore';
import { MessageSent } from '../MessageSent/MessageSent';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const { setIsSuccess } = useContactFormStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    try {
      setIsLoading(true);
      submitContactForm(data);
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputWrapper}>
          <label>First Name</label>
          {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
          <input {...register('firstName')} placeholder="Enter your first name" />
        </div>
        <div className={styles.inputWrapper}>
          <label>Last Name</label>
          {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
          <input {...register('lastName')} placeholder="Enter your last name" />
        </div>
        <div className={styles.inputWrapper}>
          <label>Email Address</label>
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          <input {...register('email')} placeholder="Enter your email" />
        </div>
        <div className={styles.inputWrapper}>
          <label>Message</label>
          {errors.message && <p className={styles.error}>{errors.message.message}</p>}
          <textarea {...register('message')} placeholder="Type your message here..." />
        </div>
        <div className={`${styles.inputWrapper} ${styles.fullWidth} ${styles.checkbox}`}>
          <label>
            <input type="checkbox" {...register('consent')} />
            <span>
              I agree to be contacted in accordance with the{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </span>
          </label>
          {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
        </div>
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <MessageSent />
    </>
  );
};
