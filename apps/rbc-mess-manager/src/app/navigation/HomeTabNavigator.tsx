import { THEME } from '@global/themes';
import { RootTabParamList } from '@global/types/navigation.type';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import MessScreen from '@screens/Mess';
import ProfileScreen from '@screens/Profile';
import RoomScreen from '@screens/Room';
import { SCREENS } from '@utils/screens';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator<RootTabParamList>();
export const HomeTabNavigator = () => {
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
          backgroundColor: THEME.COLORS.Foreground,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name={SCREENS.MESS_SCREEN}
        component={MessScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="kitchen" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.DASHBOARD_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={SCREENS.ROOMS_SCREEN}
        component={RoomScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-max" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
