import { FredFrequencyShort } from '@/types/fred-freq.enum';

// ----------------------------------------------------------------------

export * from './time-frequency';
export * from './chart-generators';

export const legendPositionOptions = [
  { label: 'Top', value: 'top' },
  { label: 'Right', value: 'right' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Left', value: 'left' },
  { label: 'None', value: 'none' },
];

export const lineStyleOptions = [
  { label: 'Solid', value: 'solid' },
  { label: 'Dashed', value: 'dashed' },
  { label: 'Dotted', value: 'dotted' },
];

export const timeFrequencyOptions = [
  { label: 'Daily', value: FredFrequencyShort.Daily },
  { label: 'Weekly', value: FredFrequencyShort.Weekly },
  { label: 'Biweekly', value: FredFrequencyShort.Biweekly },
  { label: 'Monthly', value: FredFrequencyShort.Monthly },
  { label: 'Quarterly', value: FredFrequencyShort.Quarterly },
  { label: 'Semiannual', value: FredFrequencyShort.Semiannual },
  { label: 'Annual', value: FredFrequencyShort.Annual },
];
