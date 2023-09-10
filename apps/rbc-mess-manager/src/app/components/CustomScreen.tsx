import { THEME } from '@global/themes';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from './FocusAwareStatusBar';

const CustomScreen = ({ children }: { children: JSX.Element }) => {
  const insets = useSafeAreaInsets();
  return (
    // this is mosly for ios devices where we are considering the safe area
    <View
      style={[
        {
          flex: 1,
          backgroundColor: THEME.COLORS.Background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={THEME.COLORS.Background}
      />
      {children}
    </View>
  );
};

export default CustomScreen;
