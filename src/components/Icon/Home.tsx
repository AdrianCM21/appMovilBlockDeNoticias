import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Home = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="M23.689 12.389 12.89.38c-.455-.507-1.328-.507-1.783 0L.308 12.39a1.199 1.199 0 0 0-.204 1.292c.192.433.622.712 1.096.712h2.4v8.406A1.201 1.201 0 0 0 4.8 24h3.599a1.2 1.2 0 0 0 1.2-1.2v-4.804h4.8v4.803a1.202 1.202 0 0 0 1.2 1.201h3.599a1.2 1.2 0 0 0 1.2-1.2v-8.407h2.4a1.197 1.197 0 0 0 .89-2.004Z"
        fill={color}
      />
    </IconWrapper>
  );
};
