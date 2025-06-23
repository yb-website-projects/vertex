'use client';

import { useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { submitFundRequestForm } from '../../api/submitFundRequestForm';
import { type FundAccessFormValues, fundAccessSchema } from '../../schema/fundAccessSchema';
import { useFundAccessStore } from '../../store/fundAccessStore';
import { CountrySelect } from '../FormFields/CountrySelect';
import { InvestorStatusSelect } from '../FormFields/InvestorStatusSelect';
import { PhoneInputField } from '../FormFields/PhoneInputField';
import { PurposeSelect } from '../FormFields/PurposeSelect';
import styles from './FundAccessForm.module.scss';

export const FundAccessForm = () => {
  const { setIsSuccess } = useFundAccessStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FundAccessFormValues>({
    resolver: zodResolver(fundAccessSchema),
  });

  const onSubmit = (data: FundAccessFormValues) => {
    try {
      setIsLoading(true);
      submitFundRequestForm(data);
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
        <label>Phone</label>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
        <PhoneInputField control={control} name="phone" />
      </div>
      <div className={styles.inputWrapper}>
        <label>Company</label>
        {errors.company && <p className={styles.error}>{errors.company.message}</p>}
        <input {...register('company')} placeholder="Your company name" />
      </div>
      <div className={styles.inputWrapper}>
        <label>Website</label>
        {errors.website && <p className={styles.error}>{errors.website.message}</p>}
        <input {...register('website')} placeholder="Your company website" />
      </div>
      <div className={styles.inputWrapper}>
        <label>Country</label>
        {errors.country && <p className={styles.error}>{errors.country.message}</p>}
        <CountrySelect control={control} />
      </div>
      <div className={styles.inputWrapper}>
        <label>Investor Status</label>
        {errors.investorStatus && <p className={styles.error}>{errors.investorStatus.message}</p>}
        <InvestorStatusSelect control={control} />
      </div>
      <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
        <label>Purpose</label>
        {errors.purpose && <p className={styles.error}>{errors.purpose.message}</p>}
        <PurposeSelect control={control} />
      </div>
      <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
        <label>Message</label>
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
        <textarea {...register('message')} placeholder="Type your message here..." />
      </div>
      <div className={`${styles.inputWrapper} ${styles.fullWidth} ${styles.checkbox}`}>
        <label>
          <input type="checkbox" {...register('consent')} />
          <span>
            I confirm that I am an accredited or professional investor and agree to be contacted in
            accordance with the <Link href="/legal/privacy-policy">Privacy Policy</Link>.
          </span>
        </label>
        {errors.consent && <p className={styles.error}>{errors.consent.message}</p>}
      </div>
      <button type="submit" className={styles.submitButton} disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
