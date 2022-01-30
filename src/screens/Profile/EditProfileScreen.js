import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {customColors, flexHelper, SCREEN_WIDTH} from '../../utils/styleHelper';
import {CustomHeader} from '../../components/Commons/CustomHeader';
import FastImage from 'react-native-fast-image';
import {CustomText} from '../../components/Commons/CustomText';
import {Button} from '../../components/Button/Button';
import ImagePicker from 'react-native-image-crop-picker';

import {DstATopComposition} from 'react-native-image-filter-kit';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {saveUserInfo, validatePhoneCode} from '../../actions';
import {CustomTextInput} from '../../components/Commons/CustomTextInput';

const EditProfileScreen = (props) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors} = useForm();
  const [imageResponse, setImageResponse] = React.useState(null);

  const _onSavePressed = (userInfo) => {
    console.log('userInfo', userInfo);
    console.log('imageResponse', imageResponse);
    dispatch(saveUserInfo(userInfo, imageResponse, props.navigation));
  };

  const _handleBackButton = () => {
    props.navigation.pop();
  };

  const _selectPhotoOnClick = () => {
    const options = {
      width: 400,
      height: 400,
      cropping: true,
    };

    ImagePicker.openPicker(options).then((image) => {
      console.log(image.path);
      setImageResponse(image.path);
    });
  };

  return (
    <View style={[flexHelper.flex, {backgroundColor: customColors.white}]}>
      <CustomHeader
        title={'Edit Profile'}
        onLeftButtonPressed={_handleBackButton}
      />
      <ScrollView>
        <View style={{flex: 1}}>
          <FastImage
            source={require('../../assets/images/ic_profile_image_bg.png')}
            style={{
              flex: 1.2,
              top: -30,
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            resizeMode={FastImage.resizeMode.contain}>
            <Button onPress={_selectPhotoOnClick}>
              <View style={{alignSelf: 'center'}}>
                {imageResponse ? (
                  <DstATopComposition
                    dstImage={
                      <Image
                        style={{width: 290, height: 290}}
                        source={{uri: imageResponse}}
                      />
                    }
                    srcImage={
                      <Image
                        style={{width: 300, height: 300}}
                        source={require('../../assets/images/ic_profile_image_bg.png')}
                      />
                    }
                  />
                ) : (
                  <View>
                    <FastImage
                      source={require('../../assets/images/ic_plus_with_circle.png')}
                      style={{
                        width: 37,
                        height: 37,
                        alignSelf: 'center',
                        marginBottom: 18,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <CustomText
                      label={'Select a\nProfile Picture'}
                      fontWeight={'semi-bold'}
                      fontSize={16}
                      style={{
                        textAlign: 'center',
                        color: customColors.redAccent,
                      }}
                    />
                  </View>
                )}
              </View>
            </Button>
          </FastImage>

          <View style={{flex: 1, top: -30}}>
            <CustomTextInput
              titleLabel={'User Name'}
              control={control}
              controllerName={'userName'}
              rules={{required: true}}
              placeholder={'User Name'}
              error={errors.UserName}
              errorMessage={'required'}
              fontSize={17}
              containerStyle={{marginHorizontal: 40, marginBottom: 30}}
              inputStyle={{
                borderWidth: 1,
                borderColor: customColors.placeholder,
                borderRadius: 10,
                textAlign: 'center',
              }}
              maxLength={50}
            />

            <CustomTextInput
              titleLabel={'User Status'}
              control={control}
              controllerName={'userStatus'}
              rules={{required: true}}
              placeholder={'Hi I am a new Cuber!'}
              error={errors.UserStatus}
              errorMessage={'required'}
              fontSize={17}
              containerStyle={{marginHorizontal: 40}}
              inputStyle={{
                borderWidth: 1,
                borderColor: customColors.placeholder,
                borderRadius: 10,
                textAlign: 'center',
              }}
              maxLength={250}
            />

            <Button onPress={handleSubmit(_onSavePressed)}>
              <View
                style={{
                  marginTop: 80,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  backgroundColor: customColors.redAccent,
                  marginHorizontal: 40,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    alignContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <CustomText
                    label={'Save Information'}
                    fontSize={17}
                    fontWeight={'semi-bold'}
                    style={flexHelper.whiteText}
                  />
                </View>
              </View>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export {EditProfileScreen};
