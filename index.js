/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
//import App from './js/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
