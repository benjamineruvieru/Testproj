import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';
import Sectionheader from '../components/Sectionheader';
import {
  SongsTab,
  ArtistsTab,
  PlaylistsTab,
  AlbumsTab,
  TabsHeader,
} from '../features/homepage';
import {SCREEN_WIDTH, TOP_TAB_WIDTH} from '../constants/Variables';

const TABS = ['Songs', 'Playlists', 'Albums', 'Artists'];

type RenderHomeProps = {
  item: string;
};

const RenderHomeList: React.FC<RenderHomeProps> = ({item}) => {
  switch (item) {
    case 'Songs':
      return (
        <View style={styles.tab}>
          <SongsTab />
        </View>
      );
    case 'Playlists':
      return (
        <View style={styles.tab}>
          <PlaylistsTab />
        </View>
      );
    case 'Albums':
      return (
        <View style={styles.tab}>
          <AlbumsTab />
        </View>
      );
    case 'Artists':
      return (
        <View style={styles.tab}>
          <ArtistsTab />
        </View>
      );

    default:
      return null;
  }
};

const HomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const transX = useRef(
    scrollX.interpolate({
      inputRange: [0, SCREEN_WIDTH],
      outputRange: [0, TOP_TAB_WIDTH],
    }),
  ).current;

  const flatRef = useRef(null);

  const scrollToIndex = (index: number) => {
    //@ts-ignore
    flatRef.current.scrollToIndex({
      animated: true,
      index: index,
    });
  };
  return (
    <View style={{flex: 1}}>
      <TabsHeader transX={transX} scrollToIndex={scrollToIndex} />
      <Animated.FlatList
        ref={flatRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={TABS}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={5}
        renderItem={RenderHomeList}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tab: {width: SCREEN_WIDTH, padding: 10},
});
