import { AnyAction, EnhancedStore } from '@reduxjs/toolkit';
import Axios from 'axios';
import Constants from 'expo-constants';
import { logout } from '../store/authSlice';
import authSlice from '../store/authSlice';
import App from '../../App';
import { RootState, AppDispatch } from '../store/index';

let store: EnhancedStore<RootState, AnyAction>;

export const injectStore = (s: EnhancedStore<RootState, AnyAction>) => {
  store = s;
};


export const Api = Axios.create({
  baseURL: Constants.expoConfig?.extra?.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 40000,
});

Api.interceptors.request.use(async (config) => {
  try {

    const state = store.getState().auth.user
    if (state) {
      Api.defaults.headers.common['session'] = JSON.stringify(state);
    }

    return config;
  } catch (error) {
    console.log(error)
    return config;
  }

});

Api.interceptors.response.use(

  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const appDispatch = store.dispatch as AppDispatch;
      appDispatch(logout());
    }
    return Promise.reject(error);
  }
);
