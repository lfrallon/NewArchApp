/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LandingScreen from './views/LandingScreen';
import CheckOutScreen from './views/CheckOutScreen';
import {RootStackParamList} from './types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarColor: '#427FC1',
            statusBarTranslucent: true,
            navigationBarColor: '#427FC1',
            // navigationBarHidden: true,
          }}>
          <RootStack.Screen
            options={{
              animation: 'slide_from_right',
              navigationBarColor: 'transparent',
              orientation: 'portrait',
              statusBarColor: 'transparent',
              statusBarTranslucent: true,
            }}
            name="LandingScreen"
            component={LandingScreen}
          />
          <RootStack.Screen
            options={{
              navigationBarColor: 'transparent',
              orientation: 'portrait',
              statusBarColor: 'transparent',
            }}
            name="CheckOutScreen"
            component={CheckOutScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
