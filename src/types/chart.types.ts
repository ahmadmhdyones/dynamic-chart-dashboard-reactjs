import type { ChartType } from '@/types/chart-type.enum';

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
