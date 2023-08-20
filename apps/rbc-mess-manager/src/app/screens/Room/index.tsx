import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { roomData } from '../../data/roomData';

import CustomScreen from '@components/CustomScreen';
import { THEME } from '@global/themes';
import { RoomScreenNavigationProp } from '@global/types/navigation.type';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@utils/screens';

const RoomScreen = () => {
  const navigation = useNavigation<RoomScreenNavigationProp>();
  return (
    <CustomScreen>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: THEME.COLORS.Background,
          paddingTop: 10,
          marginBottom: 80,
        }}
      >
        <FlatList
          style={{
            flex: 1,
            width: '90%',
            backgroundColor: THEME.COLORS.Background,
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
                backgroundColor: THEME.COLORS.Background,
                borderColor: THEME.COLORS.Textprimary,
                borderWidth: 1,
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                padding: 10,
                marginBottom: 10,
              }}
              onPress={() => {
                navigation.navigate(SCREENS.ROOM_SCREEN, {
                  roomId: item.roomId,
                });
              }}
            >
              <Text
                style={{
                  color: THEME.COLORS.Textprimary,
                  fontSize: 20,
                }}
              >
                {item.roomId}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </CustomScreen>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
