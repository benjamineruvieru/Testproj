import {
  Animated,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchSvg from '../assets/svg/search.svg';
import UserSvg from '../assets/svg/user.svg';

const logo = require('../assets/images/logo.png');

type MainheaderProps = {
  searchToggle: () => void;
  searchTransX: Animated.AnimatedInterpolation;
  searchopen: number;
  searchRot: Animated.AnimatedInterpolation;
};
const Mainheader: React.FC<MainheaderProps> = ({
  searchToggle,
  searchTransX,
  searchopen,
  searchRot,
}) => {
  return (
    <>
      <View style={styles.mainview}>
        <Image source={logo} style={styles.logoimg} />
        <View style={styles.innerview}>
          <Animated.View
            style={animatedstyles(searchTransX, searchRot).animated}>
            <TouchableOpacity
              onPress={searchToggle}
              style={styles.searchtouchable}>
              <SearchSvg height={25} width={25} />
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity>
            <UserSvg height={40} width={40} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Mainheader;

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  searchtouchable: {
    marginRight: 40,
  },
  usertouchable: {
    zIndex: 2,
  },
  logoimg: {
    height: 35,
    width: 35,
  },
  innerview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const animatedstyles = (
  searchTransX: Animated.AnimatedInterpolation,
  searchRot: Animated.AnimatedInterpolation,
) =>
  StyleSheet.create({
    animated: {
      height: 25,
      width: 25,
      marginRight: 40,
      transform: [
        {
          //@ts-ignore
          translateX: searchTransX,
        },
        {
          //@ts-ignore
          rotate: searchRot,
        },
      ],
    },
  });
