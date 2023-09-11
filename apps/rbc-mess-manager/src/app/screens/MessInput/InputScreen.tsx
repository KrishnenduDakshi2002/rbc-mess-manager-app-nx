import CustomScreen from '@components/CustomScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InputScreen = () => {
  return (
    <CustomScreen>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>InputScreen</Text>
      </View>
    </CustomScreen>
  );
};

export default InputScreen;

const styles = StyleSheet.create({});
