import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Error = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM9.978 7.82 7.82 9.978l2.158 2.157-2.158 2.157 2.158 2.023L12 14.292l2.023 2.023 2.426-2.158-2.157-2.022 2.023-2.157-2.293-2.023L12 9.978 9.978 7.82Z"
        fill={color}
      />
    </IconWrapper>
  );
};
