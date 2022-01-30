import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  EDIT_PROFILE_SCREEN,
  HOME_SCREEN,
  MY_PROFILE_SCREEN,
  USER_PROFILE_SCREEN,
} from './NavigationScreens';
import AuthNavigation from './AuthNavigation';
import LoungeNavigation from './LoungeNavigation';
import HomeScreen from '../screens/Home/HomeScreen';
import {EditProfileScreen} from '../screens/Profile/EditProfileScreen';
import {MyProfileScreen} from '../screens/Profile/MyProfileScreen';
import {UserProfileScreen} from '../screens/Profile/UserProfileScreen';

const MainNavigationStack = createStackNavigator();

const MainNavigation = () => (
  <MainNavigationStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <MainNavigationStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <MainNavigationStack.Screen
      name={MY_PROFILE_SCREEN}
      component={MyProfileScreen}
    />
    <MainNavigationStack.Screen
      name={USER_PROFILE_SCREEN}
      component={UserProfileScreen}
    />
    <MainNavigationStack.Screen
      name={EDIT_PROFILE_SCREEN}
      component={EditProfileScreen}
    />
  </MainNavigationStack.Navigator>
);

export default MainNavigation;
