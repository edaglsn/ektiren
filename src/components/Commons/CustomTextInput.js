import React from 'react';
import {TextInput, View} from 'react-native';

import {Controller} from 'react-hook-form';
import {CustomText} from './CustomText';
import {customColors} from '../../utils/styleHelper';

const CustomTextInput = (props) => {
  const {
    maxLength,
    textColor,
    editable,
    returnKeyType,
    autoFocus,
    titleLabel,
    inputStyle,
    control,
    controllerName,
    rules,
    defaultValue,
    placeholder,
    containerStyle,
    error,
    errorMessage,
    fontSize,
  } = props;

  return (
    <View style={[containerStyle]}>
      {titleLabel && (
        <View style={{marginBottom: 12}}>
          <CustomText
            label={titleLabel}
            fontWeight={'semi-bold'}
            fontSize={15}
          />
        </View>
      )}

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              editable={editable}
              maxLength={maxLength || 250}
              scrollEnabled={false}
              multiline={false}
              caretHidden={false}
              autoCompleteType={'off'}
              allowFontScaling={false}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              selectionColor="#0054A6"
              returnKeyType={returnKeyType || 'next'}
              autoFocus={autoFocus || false}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={placeholder || 'Enter'}
              style={[
                {
                  flex: 1,
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: fontSize || 12,
                  backgroundColor: customColors.white,
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  textAlignVertical: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  color: textColor || customColors.black,
                },
                inputStyle,
              ]}
            />
          )}
          name={controllerName}
          rules={rules || {required: true}}
          defaultValue={defaultValue || ''}
        />
      </View>
      {error && (
        <CustomText
          style={{alignSelf: 'flex-end', color: customColors.redAccent}}
          label={errorMessage || ''}
        />
      )}
    </View>
  );
};

export {CustomTextInput};
