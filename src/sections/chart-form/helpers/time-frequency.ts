import { FredFrequencyShort } from '@/types/fred-freq.enum';

// ----------------------------------------------------------------------

export const getFrequencyLabel = (frequency: FredFrequencyShort): string => {
  const frequencyLabels: Record<FredFrequencyShort, string> = {
    [FredFrequencyShort.Annual]: 'Annual',
    [FredFrequencyShort.Biweekly]: 'Biweekly',
    [FredFrequencyShort.Daily]: 'Daily',
    [FredFrequencyShort.Monthly]: 'Monthly',
    [FredFrequencyShort.Quarterly]: 'Quarterly',
    [FredFrequencyShort.Semiannual]: 'Semiannual',
    [FredFrequencyShort.Weekly]: 'Weekly',
  };
  return frequencyLabels[frequency] || frequency;
};

export const hasFrequencyLimitations = (frequency: FredFrequencyShort): boolean => {
  return frequency === FredFrequencyShort.Daily || frequency === FredFrequencyShort.Weekly;
};
