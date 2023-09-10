import { RootStackParamList } from '@global/types/navigation.type';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/index';
import RoomMembers from '@screens/RoomMembers';
import { SCREENS } from '@utils/screens';
import React from 'react';
import TabNavigator from './HomeTabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name={SCREENS.TAB_NAVIGATOR}
          component={TabNavigator}
        />
        <RootStack.Screen name={SCREENS.AUTH} component={LoginScreen} />
        <RootStack.Screen name={SCREENS.ROOM_SCREEN} component={RoomMembers} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
