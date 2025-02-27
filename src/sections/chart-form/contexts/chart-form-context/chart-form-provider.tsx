import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

import type { Chart } from '@/types/chart.types';
import { ChartType } from '@/types/chart-type.enum';
import type { ChartConfig } from '@/types/chart-config.types';
import type { FredFrequencyShort } from '@/types/fred-freq.enum';
import type { SeriesConfig, BaseSeriesConfig } from '@/types/series-config.types';

import { paths } from '@/helpers/map-routes';
import { useSaveChart } from '@/sections/common/hooks/use-save-chart';
import { useUpdateChart } from '@/sections/common/hooks/use-update-chart';
import { createChart, createDefaultChartConfig, createDefaultSeriesConfig } from '@/helpers/chart-factory';

import { ChartFormContext } from './chart-form-context';
import type { ChartFormMode, ChartFormContextProps } from './chart-form-context';

// ----------------------------------------------------------------------

interface Props {
  children: React.ReactNode;
  initialFormData?: Chart;
  mode?: ChartFormMode;
}

export function ChartFormProvider({ children, initialFormData = createChart(ChartType.LINE), mode = 'create' }: Props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ChartFormContextProps['formData']>(initialFormData);

  const { isPending: isSavingNew, mutateAsync: saveChart } = useSaveChart();
  const { isPending: isUpdating, mutateAsync: updateChart } = useUpdateChart();

  const isSaving = isSavingNew || isUpdating;

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
      label: `S${formData.series.length + 1}`,
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
    setFormData(prev => ({
      ...prev,
      series: prev.series.map(s => (s.id === seriesId ? { ...s, ...config } : s)),
    }));
  };

  const setTimeFrequency = (timeFrequency: FredFrequencyShort) => {
    setFormData(prev => ({ ...prev, timeFrequency }));
  };

  // Form actions
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const submitForm = async () => {
    try {
      if (mode === 'create') {
        await saveChart(formData);
      } else {
        await updateChart({ data: formData, id: formData.id });
      }
      navigate(paths.dashboard.charts.root.to());
    } catch (error) {
      console.error('Error saving chart:', error);
      toast.error(`Error ${mode === 'create' ? 'creating' : 'updating'} chart`);
    }
  };

  const value: ChartFormContextProps = {
    addSeries,
    formData,
    isSaving,
    mode,
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
