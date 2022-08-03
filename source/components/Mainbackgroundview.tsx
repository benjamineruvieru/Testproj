import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

type Props = {
  children: React.ReactNode;
};

const Mainbackgroundview: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Mainbackgroundview;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar?.currentHeight,
    flex: 1,
    backgroundColor: Colors.bagDark,
    paddingBottom: 55,
  },
});
