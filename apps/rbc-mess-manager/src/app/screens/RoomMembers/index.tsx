import { THEME } from '@global/themes';
import { RoomScreenScreenProps } from '@global/types/navigation.type';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRoomData } from 'src/app/data/roomData';

// import { useRoute } from '@react-navigation/native';

const RoomMembers = ({ route, navigation }: RoomScreenScreenProps) => {
  const { members } = getRoomData(route.params && route.params.roomId);
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
          backgroundColor: THEME.COLORS.Background,
        }}
      >
        <Text
          onPress={() => {
            navigation.goBack();
          }}
        >
          Room {route.params.roomId}
        </Text>
        {members.length > 0 &&
          members.map((member) => <Text id={member.id}>{member.name}</Text>)}
      </View>
    </SafeAreaView>
  );
};

export default RoomMembers;

const styles = StyleSheet.create({});
