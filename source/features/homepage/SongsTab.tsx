import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Songtab from '../songslist/Songtab';

const DATA = [
  {
    id: 1,
    title: 'La danza del fuego',
    author: 'Mago de Oz',
    album: 'Finisterra',
    genre: 'Folk',
    duration: 100000, // miliseconds
    cover: 'file:///sdcard/0/123.png',
    blur: 'file:///sdcard/0/123-blur.png', //Will come null if createBLur is set to false
    url: '/sdcard/0/la-danza-del-fuego.mp3',
  },
  {
    id: 2,
    title: 'La danza del fuego',
    author: 'Mago de Oz',
    album: 'Finisterra',
    genre: 'Folk',
    duration: 160000, // miliseconds
    cover: 'file:///sdcard/0/123.png',
    blur: 'file:///sdcard/0/123-blur.png', //Will come null if createBLur is set to false
    url: '/sdcard/0/la-danza-del-fuego.mp3',
  },
];

const SongsTab = () => {
  return (
    <View>
      <FlatList data={DATA} renderItem={Songtab} />
    </View>
  );
};

export default SongsTab;

const styles = StyleSheet.create({});
