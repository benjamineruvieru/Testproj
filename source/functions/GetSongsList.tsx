//@ts-ignore
import MusicFiles, {RNAndroidAudioStore} from 'react-native-get-music-files';

import React from 'react';
import {Alert, PermissionsAndroid} from 'react-native';

const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    //@ts-ignore
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return;
    } else {
      requestPermission();
    }
  } catch (err: any) {
    Alert.alert(err);
  }
};

export const GetAllSongs = async (artist = '', album = '') => {
  await requestPermission();
  RNAndroidAudioStore.getSongs({artist, album})
    .then((f: any) => {
      // console.log(f);
    })
    .catch((error: any) => Alert.alert(JSON.stringify(error)));
};
