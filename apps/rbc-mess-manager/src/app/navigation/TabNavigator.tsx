import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { HomeStackScreen } from './HomeStack';
import { RoomStackScreen } from './RoomStack';
import { MessStackScreen } from './MessStack';
import { ProfileStackScreen } from './ProfileStack';

import { theme } from '../global/themes';

type TabParamsList = {
  HomeStack: undefined;
  RoomStack: undefined;
  MessStack: undefined;
  ProfileStack: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderWidth: 0,
          borderColor: 'transparent',
          borderRadius: 14,
          height: 65,
          position: 'absolute',
          margin: 10,
          backgroundColor: theme.colors.foreground,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="MessStack"
        component={MessStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="kitchen" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="RoomStack"
        component={RoomStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-max" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
