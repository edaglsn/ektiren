import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {customColors, flexHelper} from '../../utils/styleHelper';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker, Overlay} from 'react-native-maps';
import {Button} from '../../components/Button/Button';
import FastImage from 'react-native-fast-image';

import BackgroundGeolocation from 'react-native-background-geolocation';
import {
  initialFirebaseUserOperations,
  operateInCircleLogic,
} from '../../actions';

class MapScreen extends Component {
  constructor(props) {
    super(props);

    let currentLoc = {};
    BackgroundGeolocation.getCurrentPosition().then((location) => {
      currentLoc = location.coords;
    });

    this.state = {
      userLocationCoordinates: currentLoc,
    };
  }

  onBackPressed = () => {
    this.props.navigation.pop();
  };

  onRefreshPressed = () => {
    this.props.initialFirebaseUserOperations();
  };

  componentWillMount() {
    BackgroundGeolocation.onLocation(this.onLocation, this.onError);
  }

  onLocation = (location) => {
    this.setState((state, props) => {
      return {userLocationCoordinates: location.coords};
    });
    console.log('[location] -', location);
  };

  // Testing Purposes
  state = {
    coordinates: [
      {latitude: 37.80225, longitude: -122.4154},
      {latitude: 37.78825, longitude: -122.4114},
      {latitude: 37.77825, longitude: -122.42624},
      {latitude: 37.78225, longitude: -122.44524},
      {latitude: 37.79825, longitude: -122.44924},
      {latitude: 37.80825, longitude: -122.43524},
    ],
  };

  render() {
    const {circleList, userLocation} = this.props;
    const {userLocationCoordinates} = this.state;

    console.log('userLocationCoordinates', userLocationCoordinates);
    console.log('circleList', circleList);
    console.log('userLocation', userLocation);
    return (
      <View style={styles.container}>
        <MapView
          mapType={Platform.OS == 'android' ? 'none' : 'standard'}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: userLocationCoordinates.latitude,
            longitude: userLocationCoordinates.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {/*<Polygon*/}
          {/*  coordinates={state.coordinates}*/}
          {/*  // lineJoin={state.coordinates}*/}
          {/*  lineCap={'round'}*/}
          {/*  lineJoin={'round'}*/}
          {/*  fillColor={customColors.redAccentMapFilling}*/}
          {/*  strokeWidth={1}*/}
          {/*  strokeColor={customColors.redAccent}*/}
          {/*/>*/}

          {circleList.map((item, index) => {
            console.log('item', item);
            return (
              <Overlay
                image={require('../../assets/images/ic_map_polygon.png')}
                bounds={item.overlayBounds}
              />
            );
          })}

          {/*Test for drawn hexagon insides*/}
          {/*{circleList.map((item, index) => {*/}
          {/*  console.log('item', item);*/}
          {/*  return (*/}
          {/*    <Marker*/}
          {/*      coordinate={{*/}
          {/*        latitude: item.coordinates.latitude + 0.00109,*/}
          {/*        longitude: item.coordinates.longitude - 0.00155,*/}
          {/*      }}>*/}
          {/*      <CustomText*/}
          {/*        label={item.name}*/}
          {/*        fontSize={item.radius / (item.radius / 20)}*/}
          {/*        style={flexHelper.whiteText}*/}
          {/*      />*/}
          {/*    </Marker>*/}
          {/*  );*/}
          {/*})}*/}

          <Marker
            coordinate={{
              latitude: userLocationCoordinates.latitude,
              longitude: userLocationCoordinates.longitude,
            }}
          />
        </MapView>

        <Button onPress={this.onBackPressed}>
          <View style={styles.backButton}>
            <FastImage
              style={{height: 15, width: 40}}
              resizeMode={'contain'}
              tintColor={customColors.white}
              source={require('../../assets/images/ic_back_arrow.png')}
            />
          </View>
        </Button>

        <Button onPress={this.onRefreshPressed}>
          <View style={styles.refreshButton}>
            <FastImage
              style={{height: 15, width: 40}}
              resizeMode={'contain'}
              tintColor={customColors.white}
              source={require('../../assets/images/ic_back_arrow.png')}
            />
          </View>
        </Button>
      </View>
    );
  }
}

function mapStateToProps({initial}) {
  const {circleList, userLocation} = initial;

  return {circleList, userLocation};
}

export default connect(mapStateToProps, {
  initialFirebaseUserOperations,
})(MapScreen);

const styles = StyleSheet.create({
  container: {flex: 1},
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#00000057',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
  },
  refreshButton: {
    position: 'absolute',
    top: 50,
    right: 25,
    backgroundColor: '#00000057',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
  },
  map: {flex: 1},
});
