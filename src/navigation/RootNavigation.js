import {View, StatusBar} from 'react-native';
import LandingScreen from '../screens/Landing/LandingScreen';
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AUTH_NAVIGATION,
  LANDING_SCREEN,
  LOUNGE_NAVIGATION,
  MAIN_NAVIGATION,
} from './NavigationScreens';
import * as _ from 'lodash';
import MainNavigation from './MainNavigation';
import LoungeNavigation from './LoungeNavigation';
import {StackActions} from '@react-navigation/routers';
import AuthNavigation from './AuthNavigation';

import {Portal, PortalProvider} from '@gorhom/portal';
import MainLayout from '../screens/MainLayout/MainLayout';
import {initialFirebaseUserOperations} from '../actions';

const RootStack = createStackNavigator();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function navigationReplace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

const RootNavigation = ({user}) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    {/*{user ? (*/}
    <RootStack.Screen name={LOUNGE_NAVIGATION} component={LoungeNavigation} />
    {/*// ) : ( //{' '}*/}
    <RootStack.Screen name={AUTH_NAVIGATION} component={AuthNavigation} />
    {/*// )}*/}
  </RootStack.Navigator>
);

class AppContainer extends React.Component {
  static whyDidYouRender = true;

  componentDidMount() {
    // if (this.props.user) {
    //   console.log('rrott');
    // this.props.initialFirebaseUserOperations();
    // }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !_.isEqual(nextProps, this.props);
  }

  render() {
    const {navigation, user} = this.props;

    return (
      <Fragment>
        <PortalProvider>
          <MainLayout>
            <StatusBar barStyle="dark-content" translucent={false} />
            <RootNavigation navigation={navigation} user={user} />
          </MainLayout>
        </PortalProvider>
      </Fragment>
    );
  }
}

function mapStateToProps({initial}) {
  const {user} = initial;

  return {
    user,
  };
}

export default connect(mapStateToProps, {
  initialFirebaseUserOperations,
})(AppContainer);
