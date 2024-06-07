import { AlertTypes } from '../components/Alert';
import { createAlert } from '../store/alertSlice';
import { useAppDispatch } from './store';

export const useAlert = () => {
  const dispatch = useAppDispatch();
  const alert = (type: AlertTypes, message: string) => {
    dispatch(createAlert({ type, message }));
  };
  return alert;
};
