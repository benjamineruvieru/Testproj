import React from 'react';
import {
  Alert,
  PermissionsAndroid,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

const {GetMusicFiles} = NativeModules;

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
  DeviceEventEmitter.addListener('onBatchReceived', params => {
    console.log({songs: [...params.batch]});
  });
  GetMusicFiles.getAll(
    {
      blured: true, // works only when 'cover' is set to true
      artist: true,
      duration: true, //default : true
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
      batchNumber: 1,
      //  delay: 1000,
    },
    (f: any) => {
      console.log(typeof f);
    },
    (error: any) => Alert.alert(JSON.stringify(error)),
  );
};
