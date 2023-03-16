import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation';
import { ToastProvider } from 'react-native-toast-notifications'

function App() {
  return (
    <ToastProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ToastProvider>
  );
}

export default App;
