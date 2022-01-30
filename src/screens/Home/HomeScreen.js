import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {CustomHomeTabBar} from '../../components/Commons/CustomHomeTabBar';
import {EditProfileScreen} from '../Profile/EditProfileScreen';
import {customColors} from '../../utils/styleHelper';
import {MyProfileScreen} from '../Profile/MyProfileScreen';
import {CubersScreen} from './CubersScreen';
import {isIphoneX} from 'react-native-iphone-x-helper';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          ref={(ref) => {
            this.tabbar = ref;
          }}
          initialPage={1}
          renderTabBar={() => (
            <CustomHomeTabBar navigation={this.props.navigation} />
          )}
          prerenderingSiblingsNumber={1}>
          <MyProfileScreen navigation={this.props.navigation} />
          <CubersScreen navigation={this.props.navigation} />
          <Chat />
        </ScrollableTabView>
      </View>
    );
  }
}

const Main = () => {
  return <View style={{flex: 1, backgroundColor: '#e35914'}} />;
};
const Chat = () => {
  return <View style={{flex: 1, backgroundColor: 'lightgreen'}} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIphoneX() ? 50 : 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColors.white,
  },
});

function mapStateToProps({initial}) {
  const {} = initial;

  return {};
}

export default connect(mapStateToProps, {})(HomeScreen);
