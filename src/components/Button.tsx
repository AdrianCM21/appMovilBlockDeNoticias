import React, { ReactComponentElement, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { constants } from '../styles/constants';

interface ButtonProps {
  onPress?: () => void;
  children: string | ReactComponentElement<any>;
  style?: any;
  loading?: boolean;
  color?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large';
}

export const Button = ({
  loading = false,
  color = constants.colors.primary,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyle(fontScale, loading, color, size);
  return (
    <View style={{ opacity: loading ? 0.8 : 1 }}>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={() => !loading && props.onPress && props.onPress()}
        activeOpacity={loading ? 1 : 0.8}
      >
        {!loading && <Text style={styles.text}>{props.children}</Text>}
        {loading && <ActivityIndicator color={constants.colors.white} />}
      </TouchableOpacity>
    </View>
  );
};

const makeStyle = (
  fontScale: number,
  loading: boolean,
  color: string,
  size: string
) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      padding: 16,
      backgroundColor: color,
      borderRadius: 10,
    },
    text: {
      textAlign: 'center',

      color: constants.colors.white,
      fontSize:
        (size === 'tiny'
          ? 9
          : size === 'small'
            ? 12
            : size === 'medium'
              ? 16
              : 18) / fontScale,
    },
  });
