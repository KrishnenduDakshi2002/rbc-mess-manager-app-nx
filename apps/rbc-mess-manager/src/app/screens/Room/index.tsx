import CustomScreen from '@components/CustomScreen';
import { THEME } from '@global/themes';
import { RoomScreenNavigationProp } from '@global/types/navigation.type';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@utils/screens';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { roomData } from '../../data/roomData';

const RoomScreen = () => {
  const navigation = useNavigation<RoomScreenNavigationProp>();
  const bottomTabHeight = useBottomTabBarHeight();
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
        <FlatList
          contentContainerStyle={{
            paddingBottom: bottomTabHeight + 20,
          }}
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: THEME.COLORS.Background,
            paddingHorizontal: 20,
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
                borderColor: THEME.COLORS.Textsecondary,
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
                  color: THEME.COLORS.Textsecondary,
                  fontSize: 15,
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
