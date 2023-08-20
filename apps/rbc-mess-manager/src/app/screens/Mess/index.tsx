import CustomScreen from '@components/CustomScreen';
import { THEME } from '@global/themes';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MessScreen = () => {
  return (
    <CustomScreen>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: THEME.COLORS.Background,
        }}
      >
        <Text>Mess Screen</Text>
      </View>
    </CustomScreen>
  );
};

export default MessScreen;

const styles = StyleSheet.create({});
