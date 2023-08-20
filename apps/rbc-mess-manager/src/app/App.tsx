import RootStackNavigator from '@navigation/RootStackNavigator';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootStackNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
