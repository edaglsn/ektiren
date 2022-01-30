import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CustomText} from '../../components/Commons/CustomText';
import {customColors, flexHelper} from '../../utils/styleHelper';
import {Button} from '../../components/Button/Button';
import {validatePhoneCode} from '../../actions';
import {useDispatch} from 'react-redux';
import {CustomTextInput} from '../../components/Commons/CustomTextInput';
import {useForm} from 'react-hook-form';

const PhoneCodeValidationScreen = (props) => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors} = useForm();

  const _onContinuePressed = (data) => {
    const modifiedData =
      data.pin1 + data.pin2 + data.pin3 + data.pin4 + data.pin5 + data.pin6;
    dispatch(validatePhoneCode(modifiedData, props.navigation));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: customColors.black,
      }}>
      <FastImage
        source={require('../../assets/images/bg6.png')}
        style={{flex: 1, justifyContent: 'space-between'}}
        resizeMode={FastImage.resizeMode.cover}>
        <FastImage
          source={require('../../assets/images/cuber_logo_with_name.png')}
          style={{top: 25, width: 130, height: 130, marginLeft: 20, flex: 2}}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={{marginHorizontal: 30, flex: 1.2}}>
          <View style={{marginVertical: 15}}>
            <CustomText
              label={'Code Verification'}
              fontWeight={'light'}
              fontSize={45}
              style={flexHelper.whiteText}
            />
          </View>
          <CustomText
            label={'Enter verification code here'}
            fontWeight={'light'}
            fontSize={20}
            style={flexHelper.whiteText}
          />
        </View>

        <View style={{marginHorizontal: 30, flex: 1.3}}>
          <View style={{flexDirection: 'row', alignSelf: 'stretch'}}>
            <CustomTextInput
              control={control}
              controllerName={'pin1'}
              rules={{required: true}}
              placeholder={'_'}
              error={errors.pin1}
              errorMessage={'required'}
              fontSize={22}
              containerStyle={{marginRight: 10, flex: 1}}
              inputStyle={{
                borderRadius: 10,
                paddingVertical: 18,
                textAlign: 'center',
              }}
              maxLength={1}
            />

            <CustomTextInput
              control={control}
              controllerName={'pin2'}
              rules={{required: true}}
              defaultValue={''}
              placeholder={'_'}
              error={errors.pin2}
              errorMessage={'required'}
              fontSize={22}
              containerStyle={{marginRight: 10, flex: 1}}
              inputStyle={{
                borderRadius: 10,
                paddingVertical: 18,
                textAlign: 'center',
              }}
              maxLength={1}
            />

            <CustomTextInput
              control={control}
              controllerName={'pin3'}
              rules={{required: true}}
              defaultValue={''}
              placeholder={'_'}
              error={errors.pin3}
              errorMessage={'required'}
              fontSize={22}
              containerStyle={{marginRight: 10, flex: 1}}
              inputStyle={{
                borderRadius: 10,
                paddingVertical: 18,
                textAlign: 'center',
              }}
              maxLength={1}
            />

            <CustomTextInput
              control={control}
              controllerName={'pin4'}
              rules={{required: true}}
              defaultValue={''}
              placeholder={'_'}
              error={errors.pin4}
              errorMessage={'required'}
              fontSize={22}
              containerStyle={{marginRight: 10, flex: 1}}
              inputStyle={{
                borderRadius: 10,
                paddingVertical: 18,
                textAlign: 'center',
              }}
              maxLength={1}
            />

            <CustomTextInput
              control={control}
              controllerName={'pin5'}
              rules={{required: true}}
              defaultValue={''}
              placeholder={'_'}
              error={errors.pin5}
              errorMessage={'required'}
              fontSize={22}
              containerStyle={{marginRight: 10, flex: 1}}
              inputStyle={{
                borderRadius: 10,
                paddingVertical: 18,
                textAlign: 'center',
              }}
              maxLength={1}
            />

            <CustomTextInput
              control={control}
              controllerName={'pin6'}
              rules={{required: true}}
              defaultValue={''}
              placeholder={'_'}
              error={errors.pin6}
              errorMessage={'required'}
              fontSize={22}
              containerStyle={{flex: 1}}
              inputStyle={{
                borderRadius: 10,
                paddingVertical: 18,
                textAlign: 'center',
              }}
              maxLength={1}
            />
          </View>

          <Button onPress={handleSubmit(_onContinuePressed)}>
            <View
              style={{
                backgroundColor: customColors.white,
                flexDirection: 'row',
                paddingVertical: 20,
                borderRadius: 13,
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <CustomText
                label={'Continue >'}
                fontWeight={'semi-bold'}
                fontSize={17}
                style={{
                  color: customColors.redAccent,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginLeft: 15,
                }}
              />
            </View>
          </Button>
        </View>
      </FastImage>
    </View>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    color: '#E02020',
  },
  successTextStyle: {
    color: 'transparent',
  },
});

export {PhoneCodeValidationScreen};
