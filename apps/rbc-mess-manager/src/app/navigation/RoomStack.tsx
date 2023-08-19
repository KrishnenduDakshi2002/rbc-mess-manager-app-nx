import { Pressable, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoomScreen from '../screens/Room';
import RoomMembers from '../screens/RoomMembers';

const RoomStack = createNativeStackNavigator();

export const RoomStackScreen = () => {
  return (
    <RoomStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RoomStack.Screen name="Room" component={RoomScreen} />
      <RoomStack.Screen
        name="RoomMembers"
        component={RoomMembers}
        options={{
          headerShown: false,
          header: ({ navigation, route }) => {
            // console.log(route, navigation)
            return (
              <View
                style={{
                  backgroundColor: '#1c1c27',
                  borderBottomWidth: 0,
                  paddingHorizontal: 20,
                  paddingTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Pressable onPress={() => navigation.goBack()}>
                  <Entypo name="chevron-left" size={24} color="#e5e1d8" />
                </Pressable>
              </View>
            );
          },
        }}
      />
    </RoomStack.Navigator>
  );
};
