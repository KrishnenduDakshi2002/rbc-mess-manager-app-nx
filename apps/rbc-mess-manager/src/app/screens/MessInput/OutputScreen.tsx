import CustomScreen from '@components/CustomScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OutputScreen = () => {
  return (
    <CustomScreen>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>OutputScreen</Text>
      </View>
    </CustomScreen>
  );
};

export default OutputScreen;

const styles = StyleSheet.create({});
