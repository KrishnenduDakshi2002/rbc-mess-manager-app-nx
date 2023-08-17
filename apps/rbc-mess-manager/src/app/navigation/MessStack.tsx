import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessScreen from '../screens/Mess';

const MessStack = createNativeStackNavigator();

export const MessStackScreen = () => {
  return (
    <MessStack.Navigator>
      <MessStack.Screen name="Mess" component={MessScreen} />
    </MessStack.Navigator>
  );
};
