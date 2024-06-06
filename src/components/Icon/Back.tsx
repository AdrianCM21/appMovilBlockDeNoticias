import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Back = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 12a10.5 10.5 0 1 0 21 0 10.5 10.5 0 0 0-21 0ZM24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Zm-6.75-.75a.75.75 0 1 1 0 1.5H8.56l3.221 3.219a.752.752 0 0 1-1.062 1.062l-4.5-4.5a.75.75 0 0 1 0-1.062l4.5-4.5a.75.75 0 1 1 1.062 1.062l-3.22 3.219h8.689Z"
        fill={color}
      />
    </IconWrapper>
  );
};
