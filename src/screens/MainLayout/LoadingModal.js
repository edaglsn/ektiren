import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

const LoadingModal = (props) => {
  const {animationSource} = props;

  return (
    <View
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(210, 210, 255, 0.25)',
      }}>
      <LottieView
        autoPlay
        loop
        speed={1}
        style={{width: 70, height: 70}}
        resizeMode={'cover'}
        source={animationSource}
      />
    </View>
  );
};

export default LoadingModal;
