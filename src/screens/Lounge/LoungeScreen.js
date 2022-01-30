import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {onGeofenceEventUpdate, operateInCircleLogic} from '../../actions';
import {
  customColors,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../utils/styleHelper';
import LottieView from 'lottie-react-native';
import {CustomText} from '../../components/Commons/CustomText';
import {Button} from '../../components/Button/Button';
import {
  LOUNGE_NAVIGATION,
  LOUNGE_SCREEN,
  MAIN_NAVIGATION,
  MAP_SCREEN,
  WEATHER_STATUS_SCREEN,
} from '../../navigation/NavigationScreens';
import auth from '@react-native-firebase/auth';
import BackgroundGeolocation from 'react-native-background-geolocation';
import FastImage from 'react-native-fast-image';

class LoungeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ////
    // 1.  Wire up event-listeners
    //

    // This handler fires when movement states changes (stationary->moving; moving->stationary)
    BackgroundGeolocation.onMotionChange(this.onMotionChange);

    // This event fires when a change in motion activity is detected
    BackgroundGeolocation.onActivityChange(this.onActivityChange);

    // This event fires when the user toggles location-services authorization
    BackgroundGeolocation.onProviderChange(this.onProviderChange);

    // BackgroundGeolocation.onGeofence(this.onGeofence.bind(this));

    ////
    // 2.  Execute #ready method (required)
    //
    BackgroundGeolocation.ready(
      {
        // Geolocation Config
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        distanceFilter: 10,
        // Activity Recognition
        stopTimeout: 1,
        // Application config
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: true, // <-- Auto start tracking when device is powered-up.
      },
      (state) => {
        console.log(
          '- BackgroundGeolocation is configured and ready: ',
          state.enabled,
        );
        console.log('- BackgroundGeolocation is configured and ready: ', state);

        if (!state.enabled) {
          ////
          // 3. Start tracking!
          //
          BackgroundGeolocation.start(function () {
            console.log('- Start success');
          });
        }
      },
    );
  }

  // You must remove listeners when your component unmounts
  componentWillUnmount() {
    BackgroundGeolocation.removeListeners();
  }

  onLocation(location) {
    console.log('[location] -', location);
  }
  onError(error) {
    console.warn('[location] ERROR -', error);
  }
  onActivityChange(event) {
    console.log('[activitychange] -', event); // eg: 'on_foot', 'still', 'in_vehicle'
  }
  onProviderChange(provider) {
    console.log('[providerchange] -', provider.enabled, provider.status);
  }
  onMotionChange(event) {
    console.log('[motionchange] -', event.isMoving, event.location);
  }

  navigateToMap = () => {
    this.props.navigation.navigate(LOUNGE_NAVIGATION, {
      screen: MAP_SCREEN,
    });
  };

  navigateWeatherStatus = () => {
    this.props.navigation.navigate(LOUNGE_NAVIGATION, {
      screen: WEATHER_STATUS_SCREEN,
    });
  };

  render() {
    const {user, userData} = this.props;
    const {mapText, logoutText} = styles;

    console.log('batman user', user);
    console.log('batman userData', userData);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <FastImage
          style={{flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
          resizeMode={'cover'}
          source={require('../../assets/images/bg_home_trmepp.png')}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Button onPress={this.navigateToMap}>
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 110,
                    height: 110,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    borderRadius: 10,
                  }}>
                  <CustomText
                    label={'Ekim Lokasyonu'}
                    fontWeight={'regular'}
                    fontSize={20}
                    style={{textAlign: 'center'}}
                  />
                  <FastImage
                    style={{height: 30, width: 40}}
                    resizeMode={'contain'}
                    source={require('../../assets/images/ic_hava_durumu.png')}
                  />
                </View>
              </Button>
              <Button onPress={this.navigateWeatherStatus}>
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 110,
                    height: 110,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <CustomText
                    label={'Hava Durumu'}
                    fontWeight={'regular'}
                    fontSize={20}
                    style={{textAlign: 'center'}}
                  />
                  <FastImage
                    style={{height: 30, width: 40}}
                    resizeMode={'contain'}
                    source={require('../../assets/images/ic_hava_durumu.png')}
                  />
                </View>
              </Button>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Button onPress={this.navigateToMap}>
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 110,
                    height: 110,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    borderRadius: 10,
                  }}>
                  <CustomText
                    label={'Ekin Plani'}
                    fontWeight={'regular'}
                    fontSize={20}
                    style={{textAlign: 'center'}}
                  />
                  <FastImage
                    style={{height: 30, width: 40}}
                    resizeMode={'contain'}
                    source={require('../../assets/images/ic_hava_durumu.png')}
                  />
                </View>
              </Button>
              <Button onPress={this.navigateToMap}>
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 110,
                    height: 110,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <CustomText
                    label={'Ayarlar'}
                    fontWeight={'regular'}
                    fontSize={20}
                    style={{textAlign: 'center'}}
                  />
                </View>
              </Button>
            </View>
          </View>
        </FastImage>
      </View>
    );
  }
}

function mapStateToProps({initial}) {
  const {user, userData, circleList} = initial;

  return {user, userData, circleList};
}

const styles = StyleSheet.create({
  mapText: {
    color: customColors.redAccent,
    alignSelf: 'flex-end',
    top: 70,
    right: 50,
  },
  logoutText: {
    color: customColors.grey,
    alignSelf: 'flex-end',
    bottom: 70,
    right: 50,
  },
});

export default connect(mapStateToProps, {
  operateInCircleLogic,
  onGeofenceEventUpdate,
})(LoungeScreen);
