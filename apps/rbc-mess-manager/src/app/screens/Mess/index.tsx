import { THEME } from '@global/themes';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MessScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: THEME.COLORS.Background,
        }}
      >
        <Text>Mess Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MessScreen;

const styles = StyleSheet.create({});
