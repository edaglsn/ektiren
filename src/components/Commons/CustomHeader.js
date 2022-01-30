import React from 'react';
import {StyleSheet, View} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {customColors, isAndroid, SCREEN_WIDTH} from '../../utils/styleHelper';
import {Button} from '../Button/Button';
import {CustomText} from "./CustomText";
import FastImage from 'react-native-fast-image';

const CustomHeader = (props) => {

  const {
    title,
    leftComponent,
    centerComponent,
    rightComponent,
  } = props;

  const {
    container,
    innerContainer,
    leftContainer,
    centerContainer,
    rightContainer,
  } = styles;

  const _handleOnLeftButtonPress = () => {
    requestAnimationFrame(() => {
      props.onLeftButtonPressed();
    });
  };

  return (
    <View
      style={[
        container,
        {
          paddingTop: isIphoneX() ? 40 : 20,
        },
      ]}>
      <View style={innerContainer}>
        <View style={leftContainer}>
          {leftComponent && leftComponent !== 'none' ? (
            leftComponent()
          ) : leftComponent === 'none' ? (
            <View />
          ) : (
            <Button onPress={_handleOnLeftButtonPress}>
              <View
                style={{
                  paddingHorizontal: 16,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 32,
                }}>
                <FastImage
                  style={{height:15, width: 40}}
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_back_arrow.png')}
                />
              </View>
            </Button>
          )}
        </View>

        <View
          style={[
            centerContainer,
            {
              maxWidth: SCREEN_WIDTH / 1.5
            },
          ]}>
          {centerComponent ? (
            centerComponent()
          ) :(
            <View>
              {title !== '' && (
                  <CustomText
                    label={props && props.title ? props.title : ''}
                    numberOfLines={1}
                    fontWeight={'semi-bold'}
                    fontSize={17}
                    // style={customTextStyle}
                  />
              )}
            </View>
          )}
        </View>

        <View style={rightContainer}>
          {rightComponent ? rightComponent() : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: isAndroid
      ? 70
      : isIphoneX()
      ? 100
      : 80,
    width: SCREEN_WIDTH,
    backgroundColor: customColors.white,
    flexDirection: 'row',
    // alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: customColors.white,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: SCREEN_WIDTH / 6,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: SCREEN_WIDTH / 6,
  },
});

export {CustomHeader};
CustomHeader.whyDidYouRender = true;
