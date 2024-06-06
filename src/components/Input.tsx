import React, { forwardRef, LegacyRef, Ref, useEffect, useState } from 'react';
import { RefObject } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Platform } from 'react-native';

import { constants } from '../styles/constants';
import { Eye } from './Icon/Eye';
import { EyeOff } from './Icon/EyeOff';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: any;
  inputStyle?: any;
  type?: 'text' | 'password' | 'number' | 'email' | 'phone';
  next?: RefObject<TextInput>;
}

const numberFilter = (text: string) => text.replace(/[^0-9]/g, '');
const phoneFilter = (text: string) =>
  text.replace(/^(?!09).*$/g, '09').replace(/[^0-9]/g, '');
const emailFilter = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9@.-_]/g, '');
const identityFilter = (x: any) => x;

const filters = {
  number: numberFilter,
  text: identityFilter,
  password: identityFilter,
  email: emailFilter,
  phone: phoneFilter,
};

enum KeyboardTypesIos {
  number = 'numeric',
  text = 'default',
  password = 'default',
  email = 'email-address',
  phone = 'numeric',
}
enum KeyboardTypesAndroid {
  number = 'numeric',
  text = 'default',
  password = 'default',
  email = 'visible-password',
  phone = 'numeric',
}

const secureTextEntryTypes = [
  Platform.OS === 'android' ? 'email' : null,
  'password',
];
const noAutoCapitalizeTypes = ['email', 'password'];

export const Input = forwardRef(
  ({ type = 'text', error, ...props }: InputProps, ref: Ref<TextInput>) => {
    const { fontScale } = useWindowDimensions();
    const styles = makeStyle(fontScale, !!error);
    const filter = filters[type];
    const [value, setValue] = useState(filter(props.value || ''));
    const [hidePassword, setHidePassword] = useState(true);

    const onChangeText = (text: string) => {
      setValue(filter(text));
      if (props.onChangeText) props.onChangeText(filter(text));
    };

    return (
      <View style={[props.containerStyle, styles.container]}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          {...props}
          ref={ref}
          style={[styles.input, props.inputStyle]}
          secureTextEntry={secureTextEntryTypes.includes(type) && hidePassword}
          onChangeText={onChangeText}
          returnKeyType={props.next ? 'next' : 'done'}
          value={value}
          blurOnSubmit={!props.next}
          keyboardType={
            Platform.OS === 'ios'
              ? KeyboardTypesIos[type]
              : KeyboardTypesAndroid[type]
          }
          autoCapitalize={
            noAutoCapitalizeTypes.includes(type)
              ? 'none'
              : props.autoCapitalize || 'sentences'
          }
          onSubmitEditing={(e) => {
            if (props.onSubmitEditing) props.onSubmitEditing(e);
            if (props.next) props.next.current?.focus();
          }}
        />

        {type === 'password' && (
          <TouchableOpacity
            style={[
              styles.passwordButton,
              { top: Platform.OS === 'ios' ? 32 : 40 },
            ]}
            onPress={() => setHidePassword(!hidePassword)}
          >
            {hidePassword && (
              <Eye color={constants.colors.primary} size={24} />
            )}
            {!hidePassword && (
              <EyeOff color={constants.colors.primary} size={24} />
            )}
          </TouchableOpacity>
        )}

        {!!error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
);

const makeStyle = (fontScale: number, error: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    label: {
      fontSize: 14 / fontScale,
      color: error ? constants.colors.danger : constants.colors.primary,
    },
    input: {
      backgroundColor: constants.colors.white,
      fontSize: 14,
      padding: 10,
      borderRadius: 10,
      marginTop: 8,
      borderColor: error ? constants.colors.danger : constants.colors.primary,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    error: {
      fontSize: 12 / fontScale,
      color: constants.colors.danger,
    },
    passwordButton: {
      position: 'absolute',
      right: 16,
    },
  });
