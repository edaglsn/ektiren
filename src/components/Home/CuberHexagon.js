import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {customColors, SCREEN_WIDTH} from '../../utils/styleHelper';
import FastImage from 'react-native-fast-image';
import {CustomText} from '../Commons/CustomText';
import {DstATopComposition} from 'react-native-image-filter-kit';
import Svg, {
  ClipPath,
  Defs,
  Polygon,
  Image,
  Rect,
  Circle,
  Stop,
  Path,
} from 'react-native-svg';
import {Button} from '../Button/Button';
import {USER_PROFILE_SCREEN} from '../../navigation/NavigationScreens';

// props.photoUri = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fhalt-c46ef35c-1897-441e-840e-28147c0de5a9/ImagePicker/d68a7ddd-807e-4d26-95c2-bd47ddca803e.jpg"

export class CuberHexagon extends PureComponent {
  constructor(props) {
    super(props);
  }

  octogonPoints =
    '80,0.3 23.6,23.6 0.3,80 23.6,136.4 80,159.7 136.4,136.4 159.7,80 136.4,2 3.6';

  render() {
    const {image, text, item} = this.props;
    console.log('image', image);
    console.log('text', text);

    const onProfilePress = () => {
      console.log('deneme');
      this.props.navigation.navigate(USER_PROFILE_SCREEN, {item: item});
    };

    return (
      <Button onPress={onProfilePress}>
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            width: SCREEN_WIDTH / 3,
            height: SCREEN_WIDTH / 3,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          {/*<Svg width={160} height={160} viewBox={'0 0 160 160'}>*/}
          {/*  <Defs>*/}
          {/*    <ClipPath id="clip">*/}
          {/*      <Polygon points={this.octogonPoints} />*/}
          {/*    </ClipPath>*/}
          {/*  </Defs>*/}
          {/*  /!* <Rect x="0" y="0" width="160" height="160" fill="red" clipPath="#clip" /> *!/*/}
          {/*  <Image*/}
          {/*    x="0"*/}
          {/*    y="0"*/}
          {/*    width="160"*/}
          {/*    height="160"*/}
          {/*    source={require('../../assets/images/blank-profile-picture.png')}*/}
          {/*    clipPath="#clip"*/}
          {/*  />*/}
          {/*</Svg>*/}

          <Svg height="100" width="100">
            <Defs>
              <ClipPath id="clip">
                {/*<Circle cx="50%" cy="50%" r="40%" />*/}
                {/*<Polygon points="20,60 10,0 90,30" />*/}
                {/*<Rect*/}
                {/*  x="10"*/}
                {/*  y="20"*/}
                {/*  width="3980"*/}
                {/*  height="1980"*/}
                {/*  fill="none"*/}
                {/*  stroke="blue"*/}
                {/*  strokeWidth="10"*/}
                {/*/>*/}
                {/*>*/}
                <Polygon
                  transform="rotate(30 60 48) scale(1.1 1.1)"
                  points={
                    '48.1426575,10.3564334 C49.7312649,10.3822059 51.3188813,10.8033949 52.9006362,11.640224 L52.9006362,11.640224 L77.798684,26.0154854 C79.5673239,26.8982643 80.930298,28.2336348 81.8820299,30.0273903 C82.7936972,31.7456349 83.2649437,33.7810651 83.2598982,36.1390001 L83.2598982,36.1390001 L83.2816667,61.5862115 C83.4412829,64.7171871 82.9203705,67.2045597 81.8159125,69.0777182 C80.6970893,70.97524 78.9897624,72.5001422 76.6623027,73.6195176 L76.6623027,73.6195176 L53.3246908,87.0673005 C51.46729,88.0514669 49.6494415,88.513274 47.8784586,88.4864385 C46.1042631,88.4595544 44.3315613,87.9428174 42.5777439,86.9125198 L42.5777439,86.9125198 L17.9868533,72.7145893 C16.2855181,71.7242223 15.0092088,70.4239417 14.1437668,68.8271773 C13.2986015,67.267824 12.851571,65.4289206 12.8360907,63.2942395 L12.8360907,63.2942395 L12.7579591,34.5590094 C12.7505603,33.1529662 13.1609223,31.6345441 14.0425663,30.0152831 C14.9088971,28.4241471 16.2251161,27.1020446 18.0159394,26.070121 L18.0159394,26.070121 L43.3645398,11.49973 C44.9480332,10.7055323 46.5420277,10.330466 48.1426575,10.3564334'
                    // '92.5 4.8923048454133a36 36 0 0 1 36 0l64.458946838995 37.215390309173a36 36 0 0 1 18 31.17691453624l0 74.430780618347a36 36 0 0 1 -18 31.17691453624l-64.458946838995 37.215390309173a36 36 0 0 1 -36 0l-64.458946838995 -37.215390309174a36 36 0 0 1 -18 -31.17691453624l1.1854291362696e-13 -74.430780618347a36 36 0 0 1 18 -31.17691453624'
                    // '92.5 4.8923048454133a36 36 0 0 1 36 0l64.458946838995 37.215390309173a36 36 0 0 1 18 31.17691453624l0 74.430780618347a36 36 0 0 1 -18 31.17691453624l-64.458946838995 37.215390309173a36 36 0 0 1 -36 0l-64.458946838995 -37.215390309174a36 36 0 0 1 -18 -31.17691453624l1.1854291362696e-13 -74.430780618347a36 36 0 0 1 18 -31.17691453624'
                    // '48.8791737,12.0542236 C50.23506,12.0762205 51.5874149,12.4419933 52.9362383,13.1515419 L77.8505284,27.536181 C79.3556684,28.2778302 80.5114379,29.4085762 81.3178369,30.9284188 C82.124236,32.4482615 82.5252059,34.2515455 82.5207467,36.3382708 L82.5425478,61.8236889 C82.6895437,64.6122186 82.2702423,66.8422702 81.2846436,68.5138435 C80.2990449,70.1854168 78.7787867,71.5105493 76.723869,72.489241 L53.3603185,85.9519705 C51.7582169,86.7969076 50.1921218,87.2077835 48.6620332,87.1845983 C47.1319447,87.161413 45.607469,86.7037061 44.0886061,85.8114776 L19.5023257,71.6162197 C18.053854,70.7730475 16.9608687,69.6711086 16.22337,68.310403 C15.4858713,66.9496975 15.1103923,65.3422792 15.0969331,63.4881483 L15.0187862,34.7491038 C15.012551,33.564189 15.3798892,32.2913384 16.1208007,30.9305521 C16.8617123,29.5697659 17.9962117,28.4491085 19.5242991,27.5685801 L44.834764,13.0201093 C46.1751508,12.3541886 47.5232874,12.0322267 48.8791737,12.0542236'
                  }
                />
              </ClipPath>
            </Defs>

            <Image
              width="100%"
              height="100%"
              opacity={1}
              preserveAspectRatio={'true'}
              href={
                image ||
                require('../../assets/images/blank-profile-picture.png')
              }
              clipPath="url(#clip)"
            />
          </Svg>

          <CustomText
            label={text || 'Username'}
            fontWeight={'regular'}
            fontSize={15}
            style={{alignSelf: 'center', paddingTop: 10}}
          />
        </View>
      </Button>
    );
  }
}

const styles = StyleSheet.create({});
