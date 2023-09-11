import { RootStackParamList } from '@global/types/navigation.type';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/index';
import MessInputScreen from '@screens/MessDetails/InputScreen';
import MessOutputScreen from '@screens/MessDetails/OutputScreen';
import InputScreen from '@screens/MessInput/InputScreen';
import OutputScreen from '@screens/MessInput/OutputScreen';
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
        <RootStack.Screen
          name={SCREENS.MESS_INPUT_SCREEN}
          component={InputScreen}
        />
        <RootStack.Screen
          name={SCREENS.MESS_OUTPUT_SCREEN}
          component={OutputScreen}
        />
        <RootStack.Screen
          name={SCREENS.MESS_INPUT_DETAILS_SCREEN}
          component={MessInputScreen}
        />
        <RootStack.Screen
          name={SCREENS.MESS_OUTPUT_DETAILS_SCREEN}
          component={MessOutputScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
