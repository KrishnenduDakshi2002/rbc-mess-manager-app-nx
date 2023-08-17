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
      <RoomStack.Screen name="RoomMembers" component={RoomMembers} />
    </RoomStack.Navigator>
  );
};
