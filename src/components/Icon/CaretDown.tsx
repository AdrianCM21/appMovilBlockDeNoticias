import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const CaretDown = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path d="M11 18 .608 0h20.784L11 18Z" fill={color} />
    </IconWrapper>
  );
};
