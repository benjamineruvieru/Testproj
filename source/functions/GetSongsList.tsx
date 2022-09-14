import React from 'react';
import {
  Alert,
  PermissionsAndroid,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

import * as MediaLibrary from 'expo-media-library';
const {GetAlbumModule} = NativeModules;
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
  MediaLibrary.getAssetsAsync({mediaType: 'audio'}).then(m => {
    console.log(m);
    GetAlbumModule.getMusicAlbumImage(
      m.assets,
      (success: any) => {
        console.log(success);
      },
      (error: any) => {
        console.error(`Error found! ${error}`);
      },
    );
  });
};
