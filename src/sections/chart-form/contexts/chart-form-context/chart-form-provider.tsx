import { useState } from 'react';

import type { Chart } from '@/types/chart.types';
import { ChartType } from '@/types/chart-type.enum';
import type { ChartConfig } from '@/types/chart-config.types';
import type { FredFrequencyShort } from '@/types/fred-freq.enum';
import type { SeriesConfig, BaseSeriesConfig } from '@/types/series-config.types';

import { createChart, createDefaultChartConfig, createDefaultSeriesConfig } from '@/helpers/chart-factory';

import { ChartFormContext } from './chart-form-context';
import type { ChartFormContextProps } from './chart-form-context';

// ----------------------------------------------------------------------

interface ChartFormProviderProps {
  children: React.ReactNode;
  initialFormData?: Chart;
}

export function ChartFormProvider({ children, initialFormData = createChart(ChartType.LINE) }: ChartFormProviderProps) {
  const [formData, setFormData] = useState<ChartFormContextProps['formData']>(initialFormData);

  // Chart type step
  const setChartType = (type: ChartType) => {
    setFormData(prev => ({
      ...prev,
      config: createDefaultChartConfig(type),
      type,
    }));
  };

  // Data source step
  const addSeries = (series: BaseSeriesConfig) => {
    const newSeries: SeriesConfig = {
      ...createDefaultSeriesConfig(formData.type),
      ...series,
    };

    setFormData(prev => ({
      ...prev,
      series: [...prev.series, newSeries],
    }));
  };

  const removeSeries = (seriesId: BaseSeriesConfig['id']) => {
    setFormData(prev => ({
      ...prev,
      series: prev.series.filter(s => s.id !== seriesId),
    }));
  };

  // Chart config step
  const updateSeries = (seriesId: string, config: Partial<SeriesConfig>) => {
    setFormData(prev => ({
      ...prev,
      series: prev.series.map(s => (s.id === seriesId ? { ...s, ...config } : s)),
    }));
  };

  const updateTypedConfig = <T extends ChartType>(config: Partial<ChartConfig<T>>) => {
    setFormData(prev => ({
      ...prev,
      config: {
        ...prev.config,
        ...config,
      },
    }));
  };

  const updateTypedSeries = <T extends ChartType>(seriesId: SeriesConfig['id'], config: Partial<SeriesConfig<T>>) => {
    updateSeries(seriesId, config);
  };

  const setTimeFrequency = (timeFrequency: FredFrequencyShort) => {
    setFormData(prev => ({ ...prev, timeFrequency }));
  };

  // Form actions
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const submitForm = () => {
    // Here you would typically submit the form data to an API
    console.log('Submitting form data:', formData);
  };

  const value: ChartFormContextProps = {
    addSeries,
    formData,
    removeSeries,
    resetForm,
    setChartType,
    setTimeFrequency,
    submitForm,
    updateChartConfig: updateTypedConfig,
    updateSeriesConfig: updateTypedSeries,
  };

  return <ChartFormContext.Provider value={value}>{children}</ChartFormContext.Provider>;
}
