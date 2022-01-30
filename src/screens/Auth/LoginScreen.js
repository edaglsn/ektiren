import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import FastImage from 'react-native-fast-image';
import {CustomText} from "../../components/Commons/CustomText";
import {customColors, flexHelper, SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/styleHelper";
import {Button} from "../../components/Button/Button";
import {loginWithFacebook} from "../../actions";
import {useDispatch} from "react-redux";
import {PHONE_NUMBER_SCREEN} from "../../navigation/NavigationScreens";
import auth from "@react-native-firebase/auth";

const LoginScreen = (props) => {

  const dispatch = useDispatch();

  const _loginWithFacebook = () => {
    dispatch(loginWithFacebook());
  }

  const _navigateToPhoneNumber = () => {
    props.navigation.navigate(PHONE_NUMBER_SCREEN)
  }
  const logout = () => {
      auth()
          .signOut()
          .then(() => console.log('User signed out!'));
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: customColors.black
      }}>

      <FastImage
        source={require('../../assets/images/bg6.png')}
        style={{flex:1, justifyContent:'space-between'}}
        resizeMode={FastImage.resizeMode.cover}
      >
          <Button onPress={logout}>
            <FastImage
              source={require('../../assets/images/cuber_logo_with_name.png')}
              style={{top:25, width: 130, height: 130, marginLeft: 20, flex:2}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Button>

        <View style={{marginHorizontal: 30, flex:1.2}}>
          <View style={{marginVertical:15}}>
            <CustomText
              label={'Hello !'}
              fontWeight={'light'}
              fontSize={50}
              style={flexHelper.whiteText}
            />
          </View>
          <CustomText
            label={'Lorem ipsum dolor sit amet, \n' +
            'consectetur adipiscing elit!'}
            fontWeight={'light'}
            fontSize={20}
            style={flexHelper.whiteText}
          />
        </View>

        <View style={{marginHorizontal: 30, flex:1.3}}>
          <Button onPress={_loginWithFacebook}>
            <View
              style={{
                backgroundColor: customColors.white,
                flexDirection:'row',
                marginVertical: 15,
                paddingVertical: 15,
                borderRadius: 13,
                justifyContent:'center',

              }}>
              <FastImage
                source={require('../../assets/images/ic_facebook.png')}
                style={{width: 30, height: 30}}
                resizeMode={FastImage.resizeMode.contain}
              />
              <CustomText
                label={'Continue with Facebook'}
                fontWeight={'semi-bold'}
                fontSize={17}
                style={{color: customColors.facebookBlue, textAlign:'center', alignSelf:'center',marginLeft: 15}}
              />
            </View>
          </Button>

          <Button onPress={_navigateToPhoneNumber}>
            <View
              style={{
                backgroundColor: customColors.white,
                flexDirection:'row',
                paddingVertical: 20,
                borderRadius: 13,
                justifyContent:'center',
              }}>
              <CustomText
                label={'Continue with Phone Number'}
                fontWeight={'semi-bold'}
                fontSize={17}
                style={{color: customColors.redAccent, textAlign:'center', alignSelf:'center',marginLeft: 15}}
              />
            </View>
          </Button>
        </View>

      </FastImage>
    </View>
  );
}

const styles = StyleSheet.create({
  errorTextStyle: {
    color: '#E02020',
  },
  successTextStyle: {
    color: 'transparent',
  },
});

export {LoginScreen};
