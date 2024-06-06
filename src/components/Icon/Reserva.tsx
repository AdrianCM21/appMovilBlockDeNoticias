import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Reserva = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="M4.8 2.4h6V12l-3-1.8-3 1.8M19.2 0H4.8a2.4 2.4 0 0 0-2.4 2.4v19.2A2.4 2.4 0 0 0 4.8 24h14.4a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 19.2 0Z"
        fill={color}
      />
    </IconWrapper>
  );
};
