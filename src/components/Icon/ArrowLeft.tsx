import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const ArrowRight = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.312c0 .215.09.422.251.574.16.153.379.238.606.238h20.215l-5.394 5.111a.793.793 0 0 0-.252.576c0 .215.09.422.252.575.16.152.38.238.607.238a.883.883 0 0 0 .607-.238l6.856-6.499a.813.813 0 0 0 .187-.264.776.776 0 0 0-.187-.886l-6.857-6.499a.9.9 0 0 0-1.214 0 .792.792 0 0 0-.25.575c0 .216.09.423.25.575l5.395 5.112H.857a.881.881 0 0 0-.606.238.791.791 0 0 0-.251.574Z"
        fill={color}
      />
    </IconWrapper>
  );
};
