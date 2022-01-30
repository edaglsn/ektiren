import {
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const isAndroid = Platform.OS === 'android';
export const isTablet = DeviceInfo.isTablet();
export const isIpad = Platform.isPad;

export const customShadowStyle = (input, color = 'transparent') => {
  let elevation = input || 2;

  return {
    elevation: elevation,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: elevation / 2},
    shadowOpacity: 0.034 * elevation,
    shadowRadius: 0.627 * elevation,
    backgroundColor: color,
  };
};

export const customColors = {
  mainRed: '#E02020',
  mainBlue: '#003082',
  black: 'black',
  red: 'red',
  white: 'white',
  grey: 'grey',
  transparent: 'transparent',
  placeholder: '#D8D8D8',
  mainBackground: '#F3F5F8',
  errorRed: '#E02020',
  lightMainRed: '#A31F35',
  firstRedGradient: '#A41F35',
  secondRedGradient: '#E84937',
  firstLightRedGradient: '#E84938',
  secondLightRedGradient: '#F67364',
  firstLightBlueGradient: '#5C88DA',
  secondLightBlueGradient: '#7EA7F2',
  firstDarkBlueGradient: '#001E62',
  secondDarkBlueGradient: '#5283D7',
  facebookBlue: '#4267B2',
  darkGreen: '#317638',
  bestPriceGreen: '#407D00',
  lightGreen: '#66B914',
  lightGrey: '#F2F3F4',
  darkGrey: '#4a4a4a',
  redAccent: '#DE0B3D',
  redAccentMapFilling: '#DE0B3D57'
};

///// STYLESHEET HELPERS /////////////

export const flexHelper = StyleSheet.create({
  flex: {flex: 1},
  flexRow: {flexDirection: 'row'},
  justifyCenter: {justifyContent: 'center'},
  justifyStart: {justifyContent: 'flex-start'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifySpaceAround: {justifyContent: 'space-around'},
  justifySpaceBetween: {justifyContent: 'space-between'},
  alignCenter: {alignItems: 'center'},
  alignStart: {alignItems: 'flex-start'},
  alignEnd: {alignItems: 'flex-end'},
  alignSelfCenter: {alignSelf: 'center'},
  alignSelfStart: {alignSelf: 'flex-start'},
  alignSelfEnd: {alignSelf: 'flex-end'},
  blackText: {color: customColors.black},
  blueText: {color: customColors.mainBlue},
  whiteText: {color: customColors.white},
  greyText: {color: customColors.grey},
  redText: {color: customColors.red},
  mainRedText: {color: customColors.mainRed},
  errorRedText: {color: customColors.errorRed},
  darkGreyText: {color: customColors.darkGrey},
  darkGreen: {color: customColors.darkGreen},
  lightGreen: {color: customColors.lightGreen},
  transparent: {color: customColors.transparent},
});