import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../constants/Variables';
import Colors from '../constants/Colors';

const Horizontalline = () => {
  return <View style={styles.line} />;
};

export default Horizontalline;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: SCREEN_WIDTH,
    backgroundColor: Colors.bagDark,
    left: -60,
    right: 0,
  },
});
