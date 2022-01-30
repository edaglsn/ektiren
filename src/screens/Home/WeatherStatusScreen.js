import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {customColors, flexHelper} from '../../utils/styleHelper';
import {connect} from 'react-redux';
import {getWeatherForecastData} from '../../actions/weatherActions';
import {CustomHeader} from '../../components/Commons/CustomHeader';

class WeatherStatusScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWeatherForecastData();
  }

  _handleBackButton = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={[flexHelper.flex, {backgroundColor: customColors.white}]}>
        <CustomHeader
          title={'Hava Durumu'}
          onLeftButtonPressed={this._handleBackButton}
        />
      </View>
    );
  }
}

function mapStateToProps({initial}) {
  const {} = initial;

  return {};
}

const styles = StyleSheet.create({
  mapText: {
    color: customColors.redAccent,
    alignSelf: 'flex-end',
    top: 70,
    right: 50,
  },
  logoutText: {
    color: customColors.grey,
    alignSelf: 'flex-end',
    bottom: 70,
    right: 50,
  },
});

export default connect(mapStateToProps, {
  getWeatherForecastData,
})(WeatherStatusScreen);
