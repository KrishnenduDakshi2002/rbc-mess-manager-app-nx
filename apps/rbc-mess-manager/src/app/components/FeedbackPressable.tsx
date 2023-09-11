import { THEME } from '@global/themes';
import React, { useRef } from 'react';
import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface FeedbackPressableType extends PressableProps {
  children: JSX.Element;
}

const FeedbackPressable = ({ children, ...props }: FeedbackPressableType) => {
  const opcacityValue = useRef(new Animated.Value(1)).current;
  const fadeIn = () => {
    Animated.timing(opcacityValue, {
      toValue: 0.3,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opcacityValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
      <Animated.View
        style={{
          opacity: opcacityValue,
        }}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default FeedbackPressable;

const styles = StyleSheet.create({});
