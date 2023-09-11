import CustomScreen from '@components/CustomScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MessInputScreen = ({ navigation, route }) => {
  return (
    <CustomScreen>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Room id - {route.params.roomId} input screen</Text>
      </View>
    </CustomScreen>
  );
};

export default MessInputScreen;

const styles = StyleSheet.create({});
