import {View, StyleSheet, Pressable, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import HomeSvg from '../assets/svg/home.svg';
import FavoritesSvg from '../assets/svg/favorites.svg';
import DiscoverSvg from '../assets/svg/discover.svg';
import LiveStreamSvg from '../assets/svg/livestream.svg';
import Colors from '../constants/Colors';
import {TAB_WIDTH} from '../constants/Variables';

const HALF_TAB = TAB_WIDTH / 2 + 15 / 2;
let ICON_SIZE: number = 23;

type TabIconsProps = {
  type: string;
  currentTab?: string;
  setcurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const typeToIndex = (type: string) => {
  switch (type) {
    case 'home':
      return 1;
    case 'favorites':
      return 2;
    case 'discover':
      return 3;
    case 'livestream':
      return 4;
    default:
      return 0;
  }
};

const animateBlob = (index: number, transX: Animated.Value) => {
  Animated.spring(transX, {
    toValue: index * TAB_WIDTH - HALF_TAB,
    useNativeDriver: true,
  }).start();
};

const changeTab = (
  type: string,
  setcurrentTab: React.Dispatch<React.SetStateAction<string>>,
) => {
  setcurrentTab(type);
};

const TabIcons: React.FC<TabIconsProps> = ({
  type,
  currentTab,
  setcurrentTab,
}) => {
  return (
    <Pressable
      style={styles().iconview}
      onPress={() => changeTab(type, setcurrentTab)}>
      {type === 'home' ? (
        <HomeSvg
          height={ICON_SIZE}
          width={ICON_SIZE}
          fill={type === currentTab ? Colors.primary : Colors.white}
        />
      ) : type === 'favorites' ? (
        <FavoritesSvg
          height={ICON_SIZE}
          width={ICON_SIZE}
          fill={type === currentTab ? Colors.primary : Colors.white}
        />
      ) : type === 'discover' ? (
        <DiscoverSvg
          height={ICON_SIZE}
          width={ICON_SIZE}
          fill={type === currentTab ? Colors.primary : Colors.white}
        />
      ) : (
        <LiveStreamSvg
          height={ICON_SIZE}
          width={ICON_SIZE}
          fill={type === currentTab ? Colors.primary : Colors.white}
        />
      )}
    </Pressable>
  );
};

type BottomNavProps = {
  currentTab: string;
  setcurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const BottomNav: React.FC<BottomNavProps> = ({currentTab, setcurrentTab}) => {
  const transX = useRef(new Animated.Value(TAB_WIDTH / 2 - 15 / 2)).current;
  useEffect(() => {
    const index = typeToIndex(currentTab);
    animateBlob(index, transX);
  }, [currentTab, transX]);
  return (
    <>
      <View style={styles().bottomnavmainview}>
        <TabIcons
          type={'home'}
          currentTab={currentTab}
          setcurrentTab={setcurrentTab}
        />
        <TabIcons
          type={'favorites'}
          currentTab={currentTab}
          setcurrentTab={setcurrentTab}
        />
        <TabIcons
          type={'discover'}
          currentTab={currentTab}
          setcurrentTab={setcurrentTab}
        />
        <TabIcons
          type={'livestream'}
          currentTab={currentTab}
          setcurrentTab={setcurrentTab}
        />
      </View>
      <Animated.View style={styles(transX).animatedview} />
    </>
  );
};

export default BottomNav;

const styles = (transX?: Animated.Value) =>
  StyleSheet.create({
    bottomnavmainview: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 65,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      elevation: 15,
      backgroundColor: Colors.musicTab,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    iconview: {
      alignContent: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    animatedview: {
      height: 5,
      width: 15,
      backgroundColor: Colors.primary,
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      //@ts-ignore
      transform: [{translateX: transX}],
    },
  });
