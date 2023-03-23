import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateInterface } from 'shared/interfaces';

const initialState: StateInterface = {
  isLoading: false,
  error: {
    message: [],
    stackErrors: '',
  },
};

const getProject = createSlice({
  name: 'getProject',
  initialState,
  reducers: {
    start: {
      reducer(state) {
        state.isLoading = true;
        state.error = initialState.error;
      },
      prepare(payload: any) {
        return { payload };
      },
    },
    end(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    error(state, action: any) {
      state.isLoading = false;
      state.error.message = action.payload.message;
      state.error.stackErrors = action.payload.stackErrors;
    },
    clear() {
      return initialState;
    },
  },
});

export const getProjectActions = getProject.actions;
export default getProject.reducer;
