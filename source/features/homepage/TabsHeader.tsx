import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Colors from '../../constants/Colors';
import {TOP_TAB_WIDTH} from '../../constants/Variables';

const TABS = ['Songs', 'Playlists', 'Albums', 'Artists'];

const Tab = ({text}) => {
  return <Text style={styles.tabtext}>{text}</Text>;
};

const TabsHeader = () => {
  const transX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.tabview}>
      <Animated.View style={animatedstyles(transX).seltab} />
      {TABS.map((tab, index) => {
        return <Tab text={tab} key={tab} />;
      })}
    </View>
  );
};

export default TabsHeader;

const styles = StyleSheet.create({
  tabview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  tabtext: {
    width: TOP_TAB_WIDTH,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'MavenPro-SemiBold',
  },
});

const animatedstyles = (transX?: Animated.Value) =>
  StyleSheet.create({
    seltab: {
      backgroundColor: Colors.primary,
      position: 'absolute',
      left: 10,
      height: 40,
      width: TOP_TAB_WIDTH,
      borderRadius: 10,
    },
  });
