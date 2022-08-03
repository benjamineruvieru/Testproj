import React, {FC} from 'react';
import MainScreen from './source/screens/MainScreen';
import Statusbarcontroller from './source/functions/Statusbarcontroller';
import {NavigationContainer} from '@react-navigation/native';

Statusbarcontroller();

const App: FC = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
