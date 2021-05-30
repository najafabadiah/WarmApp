/**
 * Welcome to WarmApp an app for finding soccer matches in a local area.
 * Created by Pietro Bonazzi
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
