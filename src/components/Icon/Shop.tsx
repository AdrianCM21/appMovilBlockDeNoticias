import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Shop = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="M21.846 6h-4.057v-.48C17.789 2.472 15.33 0 12.3 0 9.27 0 6.811 2.472 6.811 5.52V6H2.755a.956.956 0 0 0-.955.96v16.08c0 .531.427.96.955.96h19.09a.956.956 0 0 0 .955-.96V6.96a.956.956 0 0 0-.954-.96ZM8.959 5.52A3.349 3.349 0 0 1 12.3 2.16a3.349 3.349 0 0 1 3.341 3.36V6H8.959v-.48Zm11.693 16.32H3.948V8.16H6.81v2.64c0 .132.108.24.239.24h1.67a.24.24 0 0 0 .24-.24V8.16h6.681v2.64c0 .132.107.24.239.24h1.67a.24.24 0 0 0 .239-.24V8.16h2.863v13.68Z"
        fill={color}
      />
    </IconWrapper>
  );
};
