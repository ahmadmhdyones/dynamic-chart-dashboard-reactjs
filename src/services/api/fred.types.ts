import type { FredFrequencyShort } from '@/types/fred-freq.enum';

// ----------------------------------------------------------------------

export interface IFredSeries {
  id: string;
  realtime_start: string; // Format: YYYY-MM-DD
  realtime_end: string; // Format: YYYY-MM-DD
  title: string;
  observation_start: string; // Format: YYYY-MM-DD
  observation_end: string; // Format: YYYY-MM-DD
  frequency: string;
  frequency_short: FredFrequencyShort;
  units: string;
  units_short: string;
  seasonal_adjustment: string;
  seasonal_adjustment_short: string;
  last_updated: string;
  popularity: number;
  notes: string;
}

export interface IFredObservation {
  realtime_start: string; // Format: YYYY-MM-DD
  realtime_end: string; // Format: YYYY-MM-DD
  date: string; // Format: YYYY-MM-DD
  value: string;
}

// ----------------------------------------------------------------------

export interface FredObservationParams {
  series_id: string;
  realtime_start?: string; // Format: YYYY-MM-DD
  realtime_end?: string; // Format: YYYY-MM-DD
  limit?: number;
  offset?: number;
  sort_order?: SortOrder;
  observation_start?: string; // Format: YYYY-MM-DD
  observation_end?: string; // Format: YYYY-MM-DD
  units?: Units;
  frequency?: Frequency;
  aggregation_method?: AggregationMethod;
}

export interface FredObservationResponse {
  realtime_start: string; // Format: YYYY-MM-DD
  realtime_end: string; // Format: YYYY-MM-DD
  observation_start: string; // Format: YYYY-MM-DD
  observation_end: string; // Format: YYYY-MM-DD
  units: Units;
  order_by: OrderBy;
  sort_order: SortOrder;
  count: number;
  offset: number;
  limit: number;
  observations: IFredObservation[];
}

// ----------------------------------------------------------------------

export interface FredSearchParams {
  search_text: string;
  search_type?: SearchType;
  realtime_start?: string; // Format: YYYY-MM-DD
  realtime_end?: string; // Format: YYYY-MM-DD
  limit?: number;
  offset?: number;
  order_by?: OrderBy;
  sort_order?: SortOrder;
  filter_variable?: FilterVariable;
  filter_value?: string;
  tag_names?: string[];
  exclude_tag_names?: string[];
}

export interface FredSearchResponse {
  realtime_start: string; // Format: YYYY-MM-DD
  realtime_end: string; // Format: YYYY-MM-DD
  order_by: OrderBy;
  sort_order: SortOrder;
  count: number;
  offset: number;
  limit: number;
  seriess: IFredSeries[];
}

// ----------------------------------------------------------------------

type AggregationMethod = 'avg' | 'sum' | 'eop';
type SearchType = 'full_text' | 'series_id';
type OrderBy =
  | 'search_rank'
  | 'series_id'
  | 'title'
  | 'units'
  | 'frequency'
  | 'seasonal_adjustment'
  | 'realtime_start'
  | 'realtime_end'
  | 'last_updated'
  | 'observation_start'
  | 'observation_end'
  | 'popularity'
  | 'group_popularity';
type SortOrder = 'asc' | 'desc';
type FilterVariable = 'frequency' | 'units' | 'seasonal_adjustment';
type Units = 'lin' | 'chg' | 'ch1' | 'pch' | 'pc1' | 'pca' | 'cch' | 'cca' | 'log';
type Frequency =
  | 'd'
  | 'w'
  | 'bw'
  | 'm'
  | 'q'
  | 'sa'
  | 'a'
  | 'wef'
  | 'weth'
  | 'wew'
  | 'wetu'
  | 'wem'
  | 'wesu'
  | 'wesa'
  | 'bwew'
  | 'bwem';
