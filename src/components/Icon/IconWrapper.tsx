import * as React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';

export interface IconProps extends SvgProps {
  color?: string;
  size?: number;
  style?: any;
}
export const IconWrapper = (props: IconProps) => {
  const { color = '#fff', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...otherProps}
      style={[props.style ?? null]}
    >
      {otherProps.children}
    </Svg>
  );
};
