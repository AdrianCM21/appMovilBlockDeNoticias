import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Locker = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="M21.846 10.56h-2.029V3.84C19.817 1.719 18.107 0 16 0H8.6C6.492 0 4.783 1.719 4.783 3.84v6.72H2.755a.956.956 0 0 0-.955.96v11.52c0 .531.427.96.955.96h19.09a.956.956 0 0 0 .955-.96V11.52a.956.956 0 0 0-.954-.96Zm-8.71 7.11v1.59a.24.24 0 0 1-.24.24h-1.193a.24.24 0 0 1-.238-.24v-1.59a1.44 1.44 0 0 1-.528-1.611 1.44 1.44 0 0 1 .52-.723 1.426 1.426 0 0 1 2.206.723 1.448 1.448 0 0 1-.528 1.611Zm4.533-7.11H6.931V3.84c0-.927.748-1.68 1.67-1.68H16c.922 0 1.67.753 1.67 1.68v6.72Z"
        fill={color}
      />
    </IconWrapper>
  );
};
