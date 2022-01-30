import React from 'react';
import {Text} from 'react-native';
import {customColors} from '../../utils/styleHelper';

const CustomText = (props) => {

  const {
    fontWeight,
    fontSize,
    onPress,
    style,
    label
  } = props;

  let fontFamily = 'Ubuntu-Regular';
  if (fontWeight === 'light') {
    fontFamily = 'Ubuntu-Light';
  } else if (fontWeight === 'regular') {
    fontFamily = 'Ubuntu-Regular';
  } else if (fontWeight === 'semi-bold') {
    fontFamily = 'Ubuntu-Medium';
  } else if (fontWeight === 'bold') {
    fontFamily = 'Ubuntu-Bold';
  } else if (fontWeight === 'extra-bold') {
    fontFamily = 'Ubuntu-Bold';
  }

  return (
    <Text
      allowFontScaling={false}
      onPress={onPress}
      {...props}
      style={[
        {
          color: customColors.black,
          fontSize: fontSize || 12,
          fontFamily: fontFamily,
        },
        {...style},
      ]}>
      {label}
    </Text>
  );
}

export {CustomText};
