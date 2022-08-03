import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Colors from '../../constants/Colors';
import {TOP_TAB_WIDTH} from '../../constants/Variables';
import LinearGradient from 'react-native-linear-gradient';

const TABS = ['Songs', 'Playlists', 'Albums', 'Artists'];

type TabProps = {
  text: string;
  index: number;
  scrollToIndex: (index: number) => void;
};

type TabHeaderProps = {
  transX: Animated.AnimatedInterpolation;
  scrollToIndex: (index: number) => void;
};

const Tab: React.FC<TabProps> = ({text, index, scrollToIndex}) => {
  return (
    <Pressable style={styles.pressable} onPress={() => scrollToIndex(index)}>
      <Text style={styles.tabtext}>{text}</Text>
    </Pressable>
  );
};

const TabsHeader: React.FC<TabHeaderProps> = ({transX, scrollToIndex}) => {
  return (
    <View style={styles.tabview}>
      <Animated.View style={animatedstyles(transX).seltab}>
        {/* <LinearGradient
          colors={[Colors.primary, Colors.primary, Colors.primaryLite]}
          style={styles.linearGradient}
          start={{x: 0, y: 0.5}}
        /> */}
      </Animated.View>
      {TABS.map((tab, index) => {
        return (
          <Tab
            text={tab}
            key={tab}
            index={index}
            scrollToIndex={scrollToIndex}
          />
        );
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
  pressable: {
    width: TOP_TAB_WIDTH,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const animatedstyles = (transX: Animated.AnimatedInterpolation) =>
  StyleSheet.create({
    seltab: {
      backgroundColor: Colors.primary,
      position: 'absolute',
      left: 10,
      height: 40,
      width: TOP_TAB_WIDTH,
      borderRadius: 10,
      transform: [
        {
          //@ts-ignore
          translateX: transX,
        },
      ],
    },
  });
