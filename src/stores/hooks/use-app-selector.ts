import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootStateType } from '../types';

// ----------------------------------------------------------------------

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
