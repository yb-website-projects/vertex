import { type Control, Controller } from 'react-hook-form';
import Select, { type StylesConfig } from 'react-select';

import { type FundAccessFormValues } from '../../schema/fundAccessSchema';
import styles from '../FundAccessForm/FundAccessForm.module.scss';

const investorOptions = [
  { value: 'accredited', label: 'Accredited' },
  { value: 'professional', label: 'Professional' },
];

type InvestorOption = { value: string; label: string };

type InvestorStatusSelectProps = {
  control: Control<FundAccessFormValues>;
};

const customStyles: StylesConfig<InvestorOption> = {
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
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const InvestorStatusSelect = ({ control }: InvestorStatusSelectProps) => (
  <Controller
    name="investorStatus"
    control={control}
    render={({ field }) => (
      <Select
        {...field}
        value={investorOptions.find((option) => option.value === field.value)}
        options={investorOptions}
        onChange={(newValue) => field.onChange((newValue as InvestorOption)?.value)}
        className={styles.investorStatusSelect}
        placeholder="Select your investor status"
        styles={customStyles}
      />
    )}
  />
);
