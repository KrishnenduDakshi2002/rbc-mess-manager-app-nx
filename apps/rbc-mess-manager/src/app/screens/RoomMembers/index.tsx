import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../../global/themes';

// import { useRoute } from '@react-navigation/native';

const RoomMembers = () => {
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
        <Text>RoomMembers</Text>
      </View>
    </SafeAreaView>
  );
};

export default RoomMembers;

const styles = StyleSheet.create({});
