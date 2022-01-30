import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {initialAppLaunchOperations} from '../../actions';
import Transformations3D from '../../components/3DCube';
import * as _ from 'lodash';

class LandingScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialAppLaunchOperations(this.props.navigation);
  }

  render() {
    const {} = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Landing Screen</Text>
        {/*<FastImage*/}
        {/*    source={require('../../assets/images/contour_logo_splash.png')}*/}
        {/*    style={{width: normalizeSize(100), height: normalizeSize(100)}}*/}
        {/*    resizeMode={FastImage.resizeMode.contain}*/}
        {/*/>*/}
        {/*<Transformations3D/>*/}
      </View>
    );
  }
}

function mapStateToProps({initial}) {
  const {} = initial;

  return {};
}

export default connect(mapStateToProps, {
  initialAppLaunchOperations,
})(LandingScreen);
