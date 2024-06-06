import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const NextStep = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps} viewBox="0 0 26 26">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.625 13a11.375 11.375 0 1 0 22.75 0 11.375 11.375 0 0 0-22.75 0ZM26 13a13 13 0 1 1-26 0 13 13 0 0 1 26 0Zm-7.313-.813a.812.812 0 1 1 0 1.626H9.274l3.489 3.487a.815.815 0 0 1-.264 1.327.813.813 0 0 1-.887-.177l-4.875-4.875a.813.813 0 0 1 0-1.15l4.875-4.875a.814.814 0 0 1 1.15 1.15l-3.488 3.488h9.414Z"
        fill={color}
      />
    </IconWrapper>
  );
};
