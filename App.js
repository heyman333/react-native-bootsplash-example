/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Animated, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const SPLASH_IMAGE = require('./assets/tree.png');

const App = () => {
  const opacityValue = new Animated.Value(1);
  const translateYValue = new Animated.Value(0);

  React.useEffect(() => {
    RNBootSplash.hide({duration: 400});

    Animated.sequence([
      Animated.timing(translateYValue, {
        delay: 400,
        toValue: -90,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYValue, {
          toValue: 1500,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  const animatedStyle = {
    width: 100,
    height: 100,
    opacity: opacityValue,
    transform: [{translateY: translateYValue}],
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Animated.Image style={animatedStyle} source={SPLASH_IMAGE} />
    </View>
  );
};

export default App;
