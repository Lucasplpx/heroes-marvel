import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

AppRegistry.registerComponent(appName, () => App);
