import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Warning = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM10.787 4.584h2.696v10.248h-2.697V4.584Zm1.348 14.023c1.042 0 1.888-.604 1.888-1.349 0-.744-.846-1.348-1.888-1.348-1.043 0-1.888.604-1.888 1.348 0 .745.845 1.349 1.888 1.349Z"
        fill={color}
      />
    </IconWrapper>
  );
};
