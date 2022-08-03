import {StatusBar, Platform} from 'react-native';
import Colors from '../constants/Colors';

const Statusbarcontroller = () => {
  Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
  StatusBar.setBarStyle('light-content');
  Platform.OS === 'android' && StatusBar.setTranslucent(true);
};

export default Statusbarcontroller;
