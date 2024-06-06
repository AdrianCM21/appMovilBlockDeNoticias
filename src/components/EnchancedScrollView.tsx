import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

interface EnchancedScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
  onEndReached?: () => void;
  onEndExited?: () => void;
  ref?: React.Ref<ScrollView>;
}
export interface EnchancedScrollViewRef {
  scrollToEnd: () => void;
}
export const EnchancedScrollView = forwardRef(
  (props: EnchancedScrollViewProps, ref: Ref<EnchancedScrollViewRef>) => {
    const scrollView = useRef<ScrollView>(null);

    const isCloseToBottom = ({
      layoutMeasurement,
      contentOffset,
      contentSize,
    }: any) => {
      const paddingToBottom = 20;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    };

    const scrollToEnd = () => {
      if (scrollView.current) {
        scrollView.current.scrollToEnd({ animated: true });
      }
    };

    useImperativeHandle(ref, () => ({ scrollToEnd }));

    return (
      <ScrollView
        {...props}
        ref={scrollView}
        scrollEventThrottle={16}
        onScroll={(e) => {
          if (props.onScroll) props.onScroll(e);
          if (isCloseToBottom(e.nativeEvent)) {
            if (props.onEndReached) props.onEndReached();
          } else {
            if (props.onEndExited) props.onEndExited();
          }
        }}
      />
    );
  }
);
