import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {msToTime} from '../../functions/Functions';

import MoreSvg from '../../assets/svg/more.svg';
import FavoritesSvg from '../../assets/svg/favorites.svg';

const logo = require('../../assets/images/logo.png');

type Songslistprops = {
  index: number;
  item: {
    album: string;
    author: string;
    blur: string;
    cover: string;
    duration: number;
    genre: string;
    id: number;
    title: string;
    url: string;
  };
};

const ICON_SIZE = 23;
const Songtab = (props: Songslistprops) => {
  return (
    <View style={styles.tab}>
      <Image source={logo} style={styles.img} />
      <View style={styles.innerview}>
        <Text style={styles.nametext}>{props.item.title}</Text>
        <View style={styles.author_durationview}>
          <Text style={styles.authortext}>{props.item.author}</Text>
          <Text style={styles.authortext}> - </Text>
          <Text style={styles.durationtext}>
            {msToTime(props.item.duration)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        //onPress={searchToggle}
        style={styles.favoritestouchable}>
        <FavoritesSvg
          fill={Colors.white}
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={searchToggle}
        style={styles.moretouchable}>
        <MoreSvg height={ICON_SIZE} width={ICON_SIZE} />
      </TouchableOpacity>
    </View>
  );
};

export default Songtab;

const styles = StyleSheet.create({
  tab: {
    backgroundColor: Colors.musicTab,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nametext: {
    color: Colors.white,
    fontFamily: 'MavenPro-SemiBold',
    marginBottom: 5,
  },
  authortext: {
    color: Colors.primaryLite,
    fontFamily: 'MavenPro-SemiBold',
  },
  durationtext: {
    color: Colors.primaryLite,
    fontFamily: 'MavenPro-SemiBold',
  },
  img: {
    width: '15%',
    borderRadius: 10,
    aspectRatio: 1 / 1,
  },
  innerview: {
    alignSelf: 'center',
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  author_durationview: {flexDirection: 'row'},
  favoritestouchable: {marginRight: 5},
  moretouchable: {},
});
