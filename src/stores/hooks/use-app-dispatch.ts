import { useDispatch } from 'react-redux';

import type { AppDispatchType } from '../types';

// ----------------------------------------------------------------------

export function useAppDispatch() {
  return useDispatch<AppDispatchType>();
}
