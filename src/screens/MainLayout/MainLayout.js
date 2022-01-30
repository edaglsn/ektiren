import {View} from 'react-native';
import React, {ReactElement, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Reducers} from '../../state/adapters';
import {Portal} from '@gorhom/portal';
import LoadingModal from './LoadingModal';

const MainLayout = (props) => {
  const {loading} = useSelector((state) => state.modal);

  // const [tempLoading, setLoading] = useState(false);
  // console.log('loading', loading);

  return (
    <View style={{flex: 1}}>
      {loading && (
        <Portal>
          <LoadingModal
            animationSource={require('../../assets/loading.json')}
          />
        </Portal>
      )}

      {/*{isMainInfoModalVisible && (*/}
      {/*  <Portal>*/}
      {/*    <MainInfoModal*/}
      {/*      isVisible={isMainInfoModalVisible}*/}
      {/*      onButtonPressed={() => {*/}
      {/*        // setLoading(!tempLoading);*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Portal>*/}
      {/*)}*/}

      {/*<MainLoading />*/}
      {/*<ErrorModal />*/}
      {/*<InternetConnectionAlert />*/}
      {/*<InfoModal />*/}

      {props.children}
    </View>
  );
};

export default MainLayout;
