import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Search = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="m23.608 21.723-4.522-4.522a10.546 10.546 0 0 0 2.244-6.534A10.669 10.669 0 0 0 8.585.205 10.665 10.665 0 0 0 .812 14.749a10.667 10.667 0 0 0 9.853 6.585 10.542 10.542 0 0 0 6.533-2.244l4.521 4.522a1.344 1.344 0 0 0 1.889 0 1.334 1.334 0 0 0 0-1.889ZM2.666 10.667a8.001 8.001 0 0 1 9.56-7.846 7.998 7.998 0 0 1 5.83 10.908 8 8 0 0 1-7.39 4.939 8.01 8.01 0 0 1-8-8Z"
        fill={color}
      />
    </IconWrapper>
  );
};
