import { useContext } from 'react';

import { ChartFormContext } from './chart-form-context';

// ----------------------------------------------------------------------

export const useChartForm = () => {
  const context = useContext(ChartFormContext);

  if (context === undefined) {
    throw new Error('useChartForm must be used within a ChartFormProvider');
  }

  return context;
};
