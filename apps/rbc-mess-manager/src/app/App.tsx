import { StyleSheet } from 'react-native';
import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackScreen } from './navigation/AuthStack';
import TabNavigator from './navigation/TabNavigator';

type AuthStackParamList = {
  Auth: undefined;
  Root: undefined;
};

const RootStack = createNativeStackNavigator<AuthStackParamList>();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          {/* <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              headerShown: false,
            }}
          /> */}
          <RootStack.Screen
            name="Root"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
