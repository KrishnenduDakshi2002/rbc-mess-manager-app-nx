import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoomScreen from '../screens/Room';

const RoomStack = createNativeStackNavigator();

export const RoomStackScreen = () => {
  return (
    <RoomStack.Navigator>
      <RoomStack.Screen name="Room" component={RoomScreen} />
    </RoomStack.Navigator>
  );
};
