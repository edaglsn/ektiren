import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {MAP_SCREEN} from '../../navigation/NavigationScreens';
import {customColors} from '../../utils/styleHelper';
import {Button} from '../Button/Button';
import FastImage from 'react-native-fast-image';
import ProfileButtonImage from '../../assets/images/ic_profile_tab_bar.svg';

IconFontAwesome.loadFont();
IconIonicons.loadFont();

class profileButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FastImage
        style={{
          height: 45,
          width: 45,
        }}
        resizeMode={'contain'}
        source={require('../../assets/images/ic_profile_tab_bar.png')}
      />
    );
  }
}

class MainTabBarButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FastImage
        style={{
          height: 50,
          width: 50,
          // borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 9,
        }}
        resizeMode={'contain'}
        source={require('../../assets/images/ic_cuber_logo.png')}
      />
    );
  }
}

class ChatTabBarButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FastImage
        style={{height: 40, width: 35}}
        resizeMode={'contain'}
        source={require('../../assets/images/ic_chat_tab_bar.png')}
      />
    );
  }
}

const ProfileButtonAnimated = Animated.createAnimatedComponent(profileButton);
const MainButtonAnimated = Animated.createAnimatedComponent(MainTabBarButton);
const ChatButtonAnimated = Animated.createAnimatedComponent(ChatTabBarButton);

const Width = Dimensions.get('window').width;

export class CustomHomeTabBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.offset = new Animated.Value(0);
    this.props.scrollValue.addListener(this.updateView);
  }
  updateView = (offset) => {
    // offset.value | 0-1
    this.offset.setValue(-(offset.value - 1) * (Width / 2 - NAVI_BTN_SIZE));
  };

  goToPage = (index) => {
    this.tabbar.goToPage(index);
  };

  _navMaps = () => {
    this.props.navigation.navigate(MAP_SCREEN);
  };

  render() {
    const {goToPage} = this.props;

    // Animated btn scale
    const scaleBtnLeft = this.offset.interpolate({
      inputRange: [
        -1 * (Width / 2 - NAVI_BTN_SIZE),
        0,
        1 * (Width / 2 - NAVI_BTN_SIZE),
      ],
      outputRange: [1, 1, 1.5],
    });
    const scaleBtnCenter = this.offset.interpolate({
      inputRange: [
        -1 * (Width / 2 - NAVI_BTN_SIZE),
        0,
        1 * (Width / 2 - NAVI_BTN_SIZE),
      ],
      outputRange: [1, 1.5, 1],
    });
    const scaleBtnRight = this.offset.interpolate({
      inputRange: [
        -1 * (Width / 2 - NAVI_BTN_SIZE),
        0,
        1 * (Width / 2 - NAVI_BTN_SIZE),
      ],
      outputRange: [1.5, 1, 1],
    });

    // Animated btn colors
    const colorBtnLeft = scaleBtnLeft.interpolate({
      inputRange: [1, 1.5],
      outputRange: ['#e3e5e8', '#fcca35'],
    });
    const colorBtnCenter = scaleBtnCenter.interpolate({
      inputRange: [1, 1.5],
      outputRange: ['#e3e5e8', '#e35914'],
    });
    const colorBtnRight = scaleBtnRight.interpolate({
      inputRange: [1, 1.5],
      outputRange: ['#e3e5e8', 'lightgreen'],
    });

    return (
      <View style={[styles.header]}>
        <Animated.View
          style={[styles.headerAnimated, {marginLeft: this.offset}]}>
          <Animated.Text
            onPress={() => goToPage(0)}
            style={[styles.Btn, {transform: [{scale: scaleBtnLeft}]}]}>
            <ProfileButtonAnimated
              style={{color: colorBtnLeft, fontSize: 25}}
            />
          </Animated.Text>

          <Animated.Text
            onLongPress={this._navMaps}
            onPress={() => goToPage(1)}
            style={[styles.Btn, {transform: [{scale: scaleBtnCenter}]}]}>
            <MainButtonAnimated style={{color: colorBtnCenter}} />
          </Animated.Text>

          <Animated.Text
            onPress={() => goToPage(2)}
            style={[styles.Btn, {transform: [{scale: scaleBtnRight}]}]}>
            <ChatButtonAnimated style={{color: colorBtnRight, fontSize: 25}} />
          </Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

const NAVI_BTN_SIZE = 40;

const styles = StyleSheet.create({
  Btn: {
    // width: NAVI_BTN_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    backgroundColor: customColors.white,
    width: Width,
    height: 70,
  },
  headerAnimated: {
    width: Width,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
