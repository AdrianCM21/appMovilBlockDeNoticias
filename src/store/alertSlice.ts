import { createSlice } from '@reduxjs/toolkit';
import { AlertTypes } from '../components/Alert';

interface AlertState {
  message: string | null;
  type: AlertTypes;
}

const initialState: AlertState = {
  message: null,
  type: 'info',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    createAlert(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    dismissAlert(state) {
      state.message = null;
    },
  },
});

export const { createAlert, dismissAlert } = alertSlice.actions;

export default alertSlice.reducer;
