import React, {FC} from 'react';
import MainScreen from './source/screens/MainScreen';
import Statusbarcontroller from './source/functions/Statusbarcontroller';
import {GetAllSongs} from './source/functions/GetSongsList';

Statusbarcontroller();
GetAllSongs();
const App: FC = () => {
  return <MainScreen />;
};

export default App;
