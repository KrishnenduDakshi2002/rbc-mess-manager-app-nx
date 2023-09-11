import CustomScreen from '@components/CustomScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MessOutputScreen = ({ navigation, route }) => {
  return (
    <CustomScreen>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Room id - {route.params.roomId} output screen</Text>
      </View>
    </CustomScreen>
  );
};

export default MessOutputScreen;

const styles = StyleSheet.create({});
