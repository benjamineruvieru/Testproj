import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

type BottomNavProps = {
  header: string;
};

const Sectionheader: React.FC<BottomNavProps> = ({header}) => {
  return (
    <View style={styles.mainview}>
      <Text style={styles.text}>{header}</Text>
    </View>
  );
};

export default Sectionheader;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontFamily: 'MavenPro-SemiBold',
    fontSize: 25,
  },
  mainview: {flexDirection: 'row', paddingHorizontal: 20},
});
