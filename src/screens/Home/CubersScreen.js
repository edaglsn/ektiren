import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {customColors, flexHelper, SCREEN_WIDTH} from '../../utils/styleHelper';
import FastImage from 'react-native-fast-image';
import {CustomText} from '../../components/Commons/CustomText';

import {useDispatch, useSelector} from 'react-redux';
import {EDIT_PROFILE_SCREEN} from '../../navigation/NavigationScreens';
import {CuberHexagon} from '../../components/Home/CuberHexagon';
// import firestore from '@react-native-firebase/firestore';
import {useFirebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {Button} from '../../components/Button/Button';

const CubersScreen = (props) => {
  const dispatch = useDispatch();
  const {peopleInCircle, insideCircle, user} = useSelector(
    (state) => state.initial,
  );

  const formatData = (data, numOfColumns) => {
    const numOfFullRows = Math.floor(data.length / numOfColumns);
    let numberOfElementsLastRow = data.length - numOfFullRows * numOfColumns;
    while (
      numberOfElementsLastRow !== numOfColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({empty: true});
      numberOfElementsLastRow++;
    }
    return data;
  };

  console.log('SET_THE_CIRCLE_USER_IN', insideCircle);
  console.log('cuberscreen peopleInCircle', peopleInCircle);
  return (
    <View style={[flexHelper.flex, {backgroundColor: customColors.white}]}>
      <FastImage
        source={require('../../assets/images/bg_home_cubers.png')}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        <FlatList
          style={{margin: 5}}
          data={formatData(peopleInCircle, 3)}
          numColumns={3}
          keyExtractor={(item, index) => item.id}
          renderItem={(item) => {
            if (item.item.empty) {
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: customColors.transparent,
                    width: SCREEN_WIDTH / 3,
                    height: SCREEN_WIDTH / 3,
                  }}
                />
              );
            } else {
              return (
                <CuberHexagon
                  item={item}
                  image={item?.item?.profileImage}
                  text={item?.item?.profileData?.userName}
                  navigation={props.navigation}
                />
              );
            }
          }}
        />
      </FastImage>
    </View>
  );
};

const styles = StyleSheet.create({});

export {CubersScreen};
