import CustomScreen from '@components/CustomScreen';
import { THEME } from '@global/themes';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <CustomScreen>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: THEME.COLORS.Background,
        }}
      >
        <Text>Home</Text>
      </View>
    </CustomScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
