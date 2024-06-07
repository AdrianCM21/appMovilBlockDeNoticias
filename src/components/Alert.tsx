import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../styles/constants';
import { Button } from './Button';
import { Check } from './Icon/Check';
import { Warning } from './Icon/Warning';
import { Error } from './Icon/Error';
import { Info } from './Icon/Info';
import { useAppSelector, useAppDispatch } from '../hooks/store';
import { dismissAlert } from '../store/alertSlice';

const types = {
  success: {
    icon: <Check color={constants.colors.success} size={96} />,
    color: constants.colors.success,
    title: 'Éxito',
  },
  danger: {
    icon: <Error color={constants.colors.danger} size={96} />,
    color: constants.colors.danger,
    title: 'Error',
  },
  warning: {
    icon: <Warning color={constants.colors.warning} size={96} />,
    color: constants.colors.warning,
    title: 'Advertencia',
  },
  info: {
    icon: <Info color={constants.colors.primary} size={96} />,
    color: constants.colors.primary,
    title: 'Información',
  },
};

export type AlertTypes = keyof typeof types;

export const Alert = () => {
  const { message, type } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const styles = makeStyles(types[type].color);
  return (
    <>
      {message && (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
          <View style={[StyleSheet.absoluteFill, styles.overlay]}></View>
          <View style={styles.alert}>
            {types[type].icon}
            <Text style={styles.title}>{types[type].title}</Text>
            <Text style={styles.message}>{message}</Text>
            <Button
              style={styles.button}
              onPress={() => dispatch(dismissAlert())}
            >
              Continuar
            </Button>
          </View>
        </View>
      )}
    </>
  );
};

const makeStyles = (typeColor: string) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: constants.colors.black,
      opacity: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    alert: {
      backgroundColor: constants.colors.white,
      width: 310,
      paddingVertical: 40,
      borderRadius: 36,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      color: typeColor,
      marginTop: 24,
    },
    message: {
      fontSize: 14,
      color: constants.colors.darkGrey,
      marginTop: 8,
      marginBottom: 24,
      textAlign: 'center',
      marginHorizontal: 36,
    },
    button: {
      backgroundColor: typeColor,
    },
  });
