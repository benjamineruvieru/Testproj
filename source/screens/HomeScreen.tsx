import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React from 'react';
import Sectionheader from '../components/Sectionheader';
import {
  SongsTab,
  ArtistsTab,
  PlaylistsTab,
  AlbumsTab,
  TabsHeader,
} from '../features/homepage';
import {SCREEN_WIDTH} from '../constants/Variables';
const TABS = ['Songs', 'Playlists', 'Albums', 'Artists'];

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <TabsHeader />
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={TABS}
        renderItem={text => {
          return (
            <View style={{width: SCREEN_WIDTH}}>
              <Text>{text.item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
