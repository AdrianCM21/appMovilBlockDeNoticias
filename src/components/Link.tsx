import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { constants } from '../styles/constants';
import { StackParamList } from '../Router';

interface LinkProps {
  containerStyle?: any;
  style?: any;
  to?: keyof StackParamList;
  children: string;
  theme?: 'dark' | 'light';
  onPress?: () => void;
}

export const Link = ({ theme = 'light', ...props }: LinkProps) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();
  const { fontScale } = useWindowDimensions();
  const styles = makeStyle(fontScale, theme);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={props.containerStyle}
      onPress={(e) => {
        if (props.onPress) props.onPress();
        if (props.to) navigate(props.to, {});
      }}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const makeStyle = (fontScale: number, theme: string) =>
  StyleSheet.create({
    text: {

      fontSize: 14 / fontScale,
      color:
        theme === 'light'
          ? constants.colors.tertiary
          : constants.colors.primary,
    },
  });
