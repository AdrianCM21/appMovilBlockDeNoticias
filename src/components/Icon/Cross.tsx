import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Cross = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="M3.443.59A2.017 2.017 0 1 0 .591 3.444L9.148 12 .59 20.557a2.017 2.017 0 0 0 2.852 2.852L12 14.852l8.557 8.557a2.017 2.017 0 0 0 2.852-2.852L14.852 12l8.557-8.557A2.017 2.017 0 0 0 20.557.591L12 9.148 3.443.59Z"
        fill={color}
      />
    </IconWrapper>
  );
};
