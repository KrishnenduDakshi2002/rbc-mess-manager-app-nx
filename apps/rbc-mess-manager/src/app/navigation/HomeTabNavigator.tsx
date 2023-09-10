import { THEME } from '@global/themes';
import { RootTabParamList } from '@global/types/navigation.type';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import MessScreen from '@screens/Mess';
import ProfileScreen from '@screens/Profile';
import RoomScreen from '@screens/Room';
import { SCREENS } from '@utils/screens';
import { Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator<RootTabParamList>();
export const HomeTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderRadius: 20,
          borderTopColor: 'transparent',
          height: 65,
          position: 'absolute',
          marginHorizontal: 40,
          bottom: Platform.OS === 'ios' ? insets.bottom : 20,
          backgroundColor: THEME.COLORS.Foreground,
          elevation: 20,
          alignItems: 'center',
          paddingBottom: 'auto', // for ios to make it vertically center
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME.COLORS.Primarydark,
      })}
    >
      <Tab.Screen
        name={SCREENS.MESS_SCREEN}
        component={MessScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused}>
              <FontAwesome name="book" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.DASHBOARD_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused}>
              <MaterialIcons name="kitchen" color={color} size={size} />
            </CustomTabIcon>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={SCREENS.ROOMS_SCREEN}
        component={RoomScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused}>
              <FontAwesome5 name="key" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused}>
              <Ionicons name="person" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function CustomTabIcon({ children, focused }) {
  return (
    <View
      style={{
        backgroundColor: focused
          ? THEME.COLORS.Primarylight
          : THEME.COLORS.Foreground,
        borderRadius: 50,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
}

export default HomeTabNavigator;
