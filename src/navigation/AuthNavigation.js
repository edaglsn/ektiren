import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  EDIT_PROFILE_SCREEN,
  LOGIN_SCREEN, LOUNGE_SCREEN,
  PHONE_CODE_VALIDATION_SCREEN,
  PHONE_NUMBER_SCREEN
} from './NavigationScreens';
import {LoginScreen} from "../screens/Auth/LoginScreen";
import {PhoneNumberScreen} from "../screens/Auth/PhoneNumberScreen";
import {PhoneCodeValidationScreen} from "../screens/Auth/PhoneCodeValidationScreen";
import {EditProfile, EditProfileScreen} from "../screens/Profile/EditProfileScreen";
import LoungeScreen from "../screens/Lounge/LoungeScreen";

const AuthNavigationStack = createStackNavigator();

const AuthNavigation = () => (
  <AuthNavigationStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
    <AuthNavigationStack.Screen
      name={LOGIN_SCREEN}
      component={LoginScreen}
    />
    <AuthNavigationStack.Screen
      name={PHONE_NUMBER_SCREEN}
      component={PhoneNumberScreen}
    />
    <AuthNavigationStack.Screen
      name={PHONE_CODE_VALIDATION_SCREEN}
      component={PhoneCodeValidationScreen}
    />
    <AuthNavigationStack.Screen
      name={EDIT_PROFILE_SCREEN}
      component={EditProfileScreen}
    />
  </AuthNavigationStack.Navigator>
);

export default AuthNavigation;