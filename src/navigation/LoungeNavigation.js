import {createStackNavigator} from '@react-navigation/stack';
import {
  LOUNGE_SCREEN,
  MAIN_NAVIGATION,
  MAP_SCREEN,
  WEATHER_STATUS_SCREEN,
} from './NavigationScreens';
import LoungeScreen from '../screens/Lounge/LoungeScreen';
import MainNavigation from './MainNavigation';
import React from 'react';
import MapScreen from '../screens/Lounge/MapScreen';
import WeatherStatusScreen from '../screens/Home/WeatherStatusScreen';

const LoungeNavigationStack = createStackNavigator();

const LoungeNavigation = () => (
  <LoungeNavigationStack.Navigator
    initialRouteName={LOUNGE_SCREEN}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <LoungeNavigationStack.Screen
      name={LOUNGE_SCREEN}
      component={LoungeScreen}
    />
    <LoungeNavigationStack.Screen
      name={WEATHER_STATUS_SCREEN}
      component={WeatherStatusScreen}
    />
    <LoungeNavigationStack.Screen name={MAP_SCREEN} component={MapScreen} />
    <LoungeNavigationStack.Screen
      name={MAIN_NAVIGATION}
      component={MainNavigation}
    />
  </LoungeNavigationStack.Navigator>
);

export default LoungeNavigation;
