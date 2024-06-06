import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const CheckPositive = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.19 8.649A2.147 2.147 0 1 0 .74 11.206l6.394 8.62c.239.323.55.559.896.703.772.41 1.743.307 2.396-.324L23.7 7.384c.815-.787.826-2.096.027-2.924-.8-.828-2.11-.862-2.924-.075L9.281 15.515 4.19 8.648Z"
        fill={color}
      />
    </IconWrapper>
  );
};
