import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../../global/themes';

import { roomData } from '../../data/roomData';

import { useNavigation } from '@react-navigation/native';

const RoomScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: theme.colors.background,
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
          paddingTop: 10,
          marginBottom: 80,
        }}
      >
        <FlatList
          style={{
            flex: 1,
            width: '90%',
            backgroundColor: theme.colors.background,
            // borderColor: 'red',
            // borderWidth: 1,
          }}
          data={roomData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flex: 1,
                height: 80,
                borderRadius: 10,
                width: '100%',
                backgroundColor: theme.colors.foreground,
                borderColor: theme.colors.textprimary,
                borderWidth: 1,
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                padding: 10,
                marginBottom: 10,
              }}
              onPress={() => {
                console.log('RoomScreen: ', item.name);
                navigation.navigate('RoomMembers');
              }}
            >
              <Text
                style={{
                  color: theme.colors.textprimary,
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
