import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { theme } from '../../global/themes';

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
          backgroundColor: theme.colors.background,
        }}
      >
        <Text>Mess Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MessScreen;

const styles = StyleSheet.create({});
