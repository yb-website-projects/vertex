import { type Control, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import { excludedCountries } from '@/shared/lib/helpers/excludedCountries';

import { type FundAccessFormValues } from '../../schema/fundAccessSchema';
import styles from '../FundAccessForm/FundAccessForm.module.scss';

import 'react-phone-input-2/lib/style.css';

type PhoneInputFieldProps = {
  control: Control<FundAccessFormValues>;
  name: keyof FundAccessFormValues;
};

export const PhoneInputField = ({ control, name }: PhoneInputFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <PhoneInput
        {...field}
        value={field.value as string}
        country="us"
        placeholder="Enter your phone number"
        inputClass={styles.phoneInput}
        excludeCountries={excludedCountries}
      />
    )}
  />
);
