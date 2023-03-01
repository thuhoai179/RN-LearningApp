import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Platform, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/Navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={styles.AndroidSafeArea}>
        <Navigation colorScheme={'light'} />
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
