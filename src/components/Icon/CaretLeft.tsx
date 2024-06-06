import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const CaretLeft = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps} viewBox="0 0 40 40">
      <Path d="M0 20 36.75.947v38.106L0 20Z" fill={color} />
    </IconWrapper>
  );
};
