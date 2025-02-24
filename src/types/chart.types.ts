import type { ChartType } from '@/models';

// ----------------------------------------------------------------------

export interface IChart {
  id: string;
  title: string;
}

export interface ChartTypeOption {
  description: string;
  icon: React.ReactNode;
  label: string;
  supported: boolean;
  value: ChartType;
}
