import { THEME } from '@global/themes';
import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

const CustomHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: THEME.COLORS.Background,
        height: 50,
        justifyContent: 'flex-end',
        paddingVertical: 7,
      }}
    >
      <Text
        style={{
          color: THEME.COLORS.Primarylight,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        CustomHeader
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
