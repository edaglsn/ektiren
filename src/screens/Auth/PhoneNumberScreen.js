import React from 'react';
import {View, StyleSheet} from "react-native";
import FastImage from 'react-native-fast-image';
import {CustomText} from "../../components/Commons/CustomText";
import {customColors, flexHelper} from "../../utils/styleHelper";
import {Button} from "../../components/Button/Button";
import {loginWithFacebook, loginWithPhoneNumber} from "../../actions";
import {useDispatch} from "react-redux";
import {CustomTextInput} from "../../components/Commons/CustomTextInput";
import {useForm} from "react-hook-form";
import {PhoneNumberInput} from "../../components/Commons/PhoneNumberInput";

const PhoneNumberScreen = (props) => {

  const dispatch = useDispatch();
  const { control, handleSubmit, errors} = useForm();

  const _onContinuePressed = (data) => {
    console.log(data)
    dispatch(loginWithPhoneNumber(data, props.navigation))
  }

  const handleClick = () => {
    dispatch(loginWithFacebook());
  }
  // const {fbLogin}= useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: customColors.black
      }}>

      <FastImage
        source={require('../../assets/images/bg6.png')}
        style={{flex:1, justifyContent:'space-between'}}
        resizeMode={FastImage.resizeMode.cover}>

        <FastImage
          source={require('../../assets/images/cuber_logo_with_name.png')}
          style={{top:25, width: 130, height: 130, marginLeft: 20, flex:2}}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={{marginHorizontal: 30, flex:1.2}}>
          <View style={{marginVertical:15}}>
            <CustomText
              label={'Phone Number'}
              fontWeight={'light'}
              fontSize={45}
              style={flexHelper.whiteText}
            />
          </View>
          <CustomText
            label={'Enter your phone number'}
            fontWeight={'light'}
            fontSize={20}
            style={flexHelper.whiteText}
          />
        </View>

        <View style={{marginHorizontal: 30, flex:1.3}}>
          <PhoneNumberInput
            control={control}
            errors={errors}/>

          <Button onPress={handleSubmit(_onContinuePressed)}>
            <View
              style={{
                backgroundColor: customColors.white,
                flexDirection:'row',
                paddingVertical: 20,
                borderRadius: 13,
                justifyContent:'center',
                marginTop:30
              }}>
              <CustomText
                label={'Continue >'}
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

export {PhoneNumberScreen};
