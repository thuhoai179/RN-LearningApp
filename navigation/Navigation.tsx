/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  DefaultTheme, NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { MainLayout } from '../screens';
import Home from '../screens/Dashboard/Home';
import { SCREEN } from './screen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  // This is where the transition happens
};

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN.SplashScreen}
      screenOptions={TransitionScreenOptions}
    >
      <Stack.Screen
        name={SCREEN.Home}
        component={Home}
        options={{ headerShown: false }}
        key={SCREEN.Home}
      />
      <Stack.Screen
        name={SCREEN.Media}
        component={MainLayout}
        options={{ headerShown: false }}
        key={SCREEN.Media}
      />
      
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
