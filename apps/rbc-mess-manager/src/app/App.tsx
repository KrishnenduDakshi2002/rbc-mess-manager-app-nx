import RootStackNavigator from '@navigation/RootStackNavigator';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <RootStackNavigator />
    </PaperProvider>
  );
};

export default App;
