import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

export type StateType = {
  isAppLoading: boolean;
};

const initialState: StateType = {
  isAppLoading: false,
};

// ----------------------------------------------------------------------

export const sliceApp = createSlice({
  extraReducers: builder => {
    //
  },
  initialState,
  name: 'app',
  reducers: {
    reset: state => {
      state.isAppLoading = initialState.isAppLoading;
    },
    setIsAppLoading: (state, action) => {
      state.isAppLoading = action.payload;
    },
  },
  selectors: {
    getIsAppLoading: state => state.isAppLoading,
  },
});

export const { reset, setIsAppLoading } = sliceApp.actions;

export const selectorsApp = sliceApp.selectors;

export default sliceApp.reducer;
