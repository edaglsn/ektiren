import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

export const Button = React.memo((props) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableWithoutFeedback {...props} onLongPress={() => {}}>
        {props.children}
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableNativeFeedback
        {...props}
        onLongPress={() => {}}
        background={TouchableNativeFeedback.Ripple('transparent')}>
        {props.children}
      </TouchableNativeFeedback>
    );
  }
});
