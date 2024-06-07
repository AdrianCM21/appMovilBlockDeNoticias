import { useState } from 'react';

import { useAppSelector, useAppDispatch } from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../services/Api';
import { AuthService } from '../services/Auth.service';
import { login, logout } from '../store/authSlice';


export const useSession = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.accessToken);

  const refreshSession = async () => {
    try {
      const sessionString = await AsyncStorage.getItem('session');
      if (sessionString) {
        const session = JSON.parse(sessionString);
        dispatch(login({ user: session.user_data }));
        Api.defaults.headers.common['session'] = JSON.stringify(session.user_data);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        dispatch(logout());
        await AsyncStorage.removeItem('session');
      }
    }
  };

  const loginMethod = async (usuario: string, password: string) => {
    try {

      const response = await AuthService.login(usuario, password);
      console.log(response)
      Api.defaults.headers.common['session'] = JSON.stringify(response.user_data);
      await AsyncStorage.setItem('session', JSON.stringify(response));
      dispatch(login({ user: response.user_data }));
    } catch (error) {
      throw error;
    }
  };
  const logoutMethod = async () => {
    await AsyncStorage.removeItem('session');
    dispatch(logout());
  };

  return {
    user,
    token,
    refreshSession,
    login: loginMethod,
    logout: logoutMethod,
  };
};
