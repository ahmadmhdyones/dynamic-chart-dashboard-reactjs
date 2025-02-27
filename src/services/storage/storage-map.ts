import type { Chart } from '@/types/chart.types';

import type { StorageKeys } from './storage-keys.enum';

// ----------------------------------------------------------------------

export interface StoragePayloads extends Record<StorageKeys, unknown> {
  [StorageKeys.Charts]: Chart[];
}
