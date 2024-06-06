import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const PencilCircle = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m3.1 5.07c.14 0 .28.05.4.16l1.27 1.27c.23.22.23.57 0 .78l-1 1-2.05-2.05 1-1c.1-.11.24-.16.38-.16m-1.97 1.74l2.06 2.06-6.06 6.06H7.07v-2.06l6.06-6.06z"
        fill={color}
      />
    </IconWrapper>
  );
};
