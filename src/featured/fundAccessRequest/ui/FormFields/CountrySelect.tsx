import { type Control, Controller } from 'react-hook-form';
import Select, { type StylesConfig } from 'react-select';

import { type FundAccessFormValues } from '../../schema/fundAccessSchema';
import styles from '../FundAccessForm/FundAccessForm.module.scss';

type CountryOption = { value: string; label: string };

const countryOptions: CountryOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

type CountrySelectProps = {
  control: Control<FundAccessFormValues>;
};

const customStyles: StylesConfig<CountryOption> = {
  control: (base) => ({
    ...base,
    background: 'transparent',
    border: '1px solid #e9e9e9',
    borderRadius: '0',
    padding: '24px',
    div: {
      padding: '0',
      margin: '0',
    },
    '&:hover': {
      borderColor: '#e9e9e9',
    },
    '&:focus': {
      borderColor: '#e9e9e9',
    },
    '&:active': {
      borderColor: '#e9e9e9',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const CountrySelect = ({ control }: CountrySelectProps) => (
  <Controller
    name="country"
    control={control}
    render={({ field }) => (
      <Select
        {...field}
        value={countryOptions.find((option) => option.value === field.value)}
        options={countryOptions}
        onChange={(newValue) => field.onChange((newValue as CountryOption)?.value)}
        className={styles.countrySelect}
        placeholder="Select your country"
        styles={customStyles}
      />
    )}
  />
);
