import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AUTH_NAVIGATION, LOUNGE_NAVIGATION} from './NavigationScreens';
import AuthNavigation from "./AuthNavigation";
import LoungeNavigation from "./LoungeNavigation";

// const TestMainNavigationStack = createStackNavigator();
//
// const TestMainNavigation = () => (
//   <TestMainNavigationStack.Navigator
//     screenOptions={{
//       headerShown: false,
//       gestureEnabled: false
//     }}>
//     <TestMainNavigationStack.Screen
//       name={LOUNGE_NAVIGATION}
//       component={LoungeNavigation}
//     />
//     <TestMainNavigationStack.Screen
//       name={AUTH_NAVIGATION}
//       component={AuthNavigation}
//     />
//   </MainNavigationStack.Navigator>
// );
//
// export default TestMainNavigation;
