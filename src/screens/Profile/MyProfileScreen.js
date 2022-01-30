import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  customColors,
  flexHelper,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../utils/styleHelper';
import FastImage from 'react-native-fast-image';
import {CustomText} from '../../components/Commons/CustomText';

import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components/Button/Button';
import {EDIT_PROFILE_SCREEN} from '../../navigation/NavigationScreens';

const MyProfileScreen = (props) => {
  const dispatch = useDispatch();

  const {userData} = useSelector((state) => state.initial);

  const _navigateToEditProfile = () => {
    props.navigation.navigate(EDIT_PROFILE_SCREEN);
  };

  return (
    <View style={[flexHelper.flex, {backgroundColor: customColors.white}]}>
      <ScrollView>
        <View style={{flex: 1}}>
          <FastImage
            source={
              userData?.profileImage && userData?.profileImage !== ''
                ? {uri: userData.profileImage}
                : require('../../assets/images/blank-profile-picture.png')
            }
            style={{
              width: SCREEN_WIDTH,
              height: (SCREEN_HEIGHT * 5) / 9,
              justifyContent: 'center',
              alignContent: 'center',
              borderBottomWidth: 1.5,
              borderColor: customColors.redAccent,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />

          <Button onPress={_navigateToEditProfile}>
            <View
              style={{
                position: 'absolute',
                right: 25,
                top: (SCREEN_HEIGHT * 5) / 9 - 30,
                backgroundColor: customColors.white,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: customColors.redAccent,
              }}>
              <CustomText
                label={'Edit Profile'}
                fontWeight={'regular'}
                fontSize={18}
                style={{color: customColors.redAccent}}
              />
            </View>
          </Button>

          <View style={{marginTop: 50, marginHorizontal: 25}}>
            <CustomText
              label={
                userData?.profileData
                  ? userData?.profileData?.userName
                  : 'User Name'
              }
              fontWeight={'regular'}
              fontSize={25}
              // style={mapText}
            />
            <CustomText
              label={
                userData?.profileData
                  ? userData?.profileData?.userStatus
                  : 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello '
              }
              fontWeight={'regular'}
              fontSize={15}
              style={{paddingTop: 30}}
              // style={mapText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export {MyProfileScreen};
