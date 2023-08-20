import CustomScreen from '@components/CustomScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <CustomScreen>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>LoginScreen</Text>
      </View>
    </CustomScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
