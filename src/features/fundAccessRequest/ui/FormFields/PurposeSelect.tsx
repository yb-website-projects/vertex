import { type Control, Controller } from 'react-hook-form';
import Select, { type StylesConfig } from 'react-select';

import { type FundAccessFormValues } from '../../schema/fundAccessSchema';
import styles from '../FundAccessForm/FundAccessForm.module.scss';

const purposeOptions = [
  { value: 'Request Fund Overview', label: 'Request Fund Overview' },
  { value: 'Request Participation Requirements', label: 'Request Participation Requirements' },
  { value: 'Request Access Conditions', label: 'Request Access Conditions' },
  { value: 'Submit Investment Interest', label: 'Submit Investment Interest' },
  { value: 'Ask a Specific Question', label: 'Ask a Specific Question' },
];

type PurposeOption = { value: string; label: string };

type PurposeSelectProps = {
  control: Control<FundAccessFormValues>;
};

const customStyles: StylesConfig<PurposeOption> = {
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

export const PurposeSelect = ({ control }: PurposeSelectProps) => (
  <Controller
    name="purpose"
    control={control}
    render={({ field }) => (
      <Select
        {...field}
        value={purposeOptions.find((option) => option.value === field.value)}
        options={purposeOptions}
        onChange={(newValue) => field.onChange((newValue as PurposeOption)?.value)}
        className={styles.purposeSelect}
        placeholder="Select your request type"
        styles={customStyles}
      />
    )}
  />
);
