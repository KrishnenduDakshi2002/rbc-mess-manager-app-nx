import CustomScreen from '@components/CustomScreen';
import { THEME } from '@global/themes';
import CustomHeader from '@navigation/CustomHeader';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const MessScreen = () => {
  return (
    <CustomScreen>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: THEME.COLORS.Background,
        }}
      >
        <CustomHeader />
        <Text>hello</Text>
      </ScrollView>
    </CustomScreen>
  );
};

export default MessScreen;

const styles = StyleSheet.create({});
