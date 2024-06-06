import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Check = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM8.764 9.708 6.607 12l4.314 4.315 6.742-6.337-2.427-2.697-4.315 4.584-2.157-2.157Z"
        fill={color}
      />
    </IconWrapper>
  );
};
