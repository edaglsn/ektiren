import {flexHelper} from "../../utils/styleHelper";
import {CustomTextInput} from "./CustomTextInput";
import {View} from "react-native";
import React from "react";

const PhoneNumberInput = (props) => {

  const { control, errors, controllerCountryCodeName, controllerPhoneNumberName } = props;

  return(
    <View style={{flexDirection:'row', alignSelf: 'stretch'}}>
      <CustomTextInput
        control={control}
        controllerName={controllerCountryCodeName || 'countryCode'}
        rules={{required: true}}
        defaultValue={'+90'}
        error={errors.countryCode}
        errorMessage={"required"}
        fontSize={22}
        containerStyle={{marginRight:10, flex:2}}
        inputStyle={{borderRadius:10,paddingVertical:18, textAlign:'center'}}
      />

      <CustomTextInput
        control={control}
        controllerName={controllerPhoneNumberName || 'phoneNumber'}
        rules={{required: true}}
        defaultValue={''}
        placeholder={'___ ___ __ __'}
        error={errors.phoneNumber}
        errorMessage={"required"}
        fontSize={22}
        containerStyle={{flex:6}}
        inputStyle={{borderRadius:10, paddingVertical:18, textAlign:'center'}}
      />

    </View>
  )};

export {PhoneNumberInput}