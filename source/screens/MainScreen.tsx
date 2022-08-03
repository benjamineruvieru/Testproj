import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BottomNav from '../navigation/BottomNav';
import Mainbackgroundview from '../components/Mainbackgroundview';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import DiscoverScreen from './DiscoverScreen';
import LiveStreamScreen from './LiveStreamScreen';
import Mainheader from '../components/Mainheader';
import Colors from '../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Variables';
import SearchData from '../assets/svg/searching-data.svg';
import MicSvg from '../assets/svg/mic.svg';
import BackSvg from '../assets/svg/back.svg';

const MainScreen: React.FC = () => {
  const [currentTab, setcurrentTab] = useState('home');
  const scale = useRef(new Animated.Value(0)).current;
  const searchTransX = useRef(
    scale.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -SCREEN_WIDTH + 20 + 40 + 40 + 25 + 20],
    }),
  ).current;
  const searchRot = useRef(
    scale.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    }),
  ).current;
  const [searchopen, setSearchopen] = useState(0);
  const searchToggle = () => {
    Animated.timing(scale, {
      useNativeDriver: true,
      duration: 250,
      toValue: searchopen === 0 ? 1 : 0,
    }).start();
    if (searchopen === 0) {
      setSearchopen(1);
    } else {
      setSearchopen(0);
    }
  };
  return (
    <Mainbackgroundview>
      <Animated.View style={animatedstyles(scale).animated}>
        <View style={styles.animatedsearchtabview}>
          <TouchableOpacity onPress={searchToggle}>
            <BackSvg />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={Colors.bluegrey}
          />
          <TouchableOpacity>
            <MicSvg height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.animatedbodyview}>
          <SearchData
            height={SCREEN_WIDTH / 2}
            width={SCREEN_WIDTH / 2}
            style={{left: -20}}
          />
        </View>
      </Animated.View>

      <Mainheader
        searchToggle={searchToggle}
        searchTransX={searchTransX}
        searchopen={searchopen}
        searchRot={searchRot}
      />
      {currentTab === 'home' ? (
        <HomeScreen />
      ) : currentTab === 'favorites' ? (
        <FavoritesScreen />
      ) : currentTab === 'discover' ? (
        <DiscoverScreen />
      ) : (
        <LiveStreamScreen />
      )}
      <BottomNav currentTab={currentTab} setcurrentTab={setcurrentTab} />
    </Mainbackgroundview>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  searchInput: {
    fontFamily: 'MavenPro-Medium',
    fontSize: 15,
    backgroundColor: Colors.bagDarker,
    borderRadius: 360,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 15,
  },
  animatedsearchtabview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animatedbodyview: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const animatedstyles = (scale: Animated.Value) =>
  StyleSheet.create({
    animated: {
      //@ts-ignore
      paddingTop: StatusBar?.currentHeight + 15,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: Colors.bagDark,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      //@ts-ignore
      zIndex: 1,
      transform: [
        {
          //@ts-ignore
          translateX: scale.interpolate({
            inputRange: [0, 1],
            outputRange: [SCREEN_WIDTH, 0],
          }),
        },
        {
          //@ts-ignore
          translateY: scale.interpolate({
            inputRange: [0, 0.001, 1],
            outputRange: [-SCREEN_HEIGHT + 20, -SCREEN_HEIGHT + 20, 0],
          }),
        },
      ],
    },
  });
