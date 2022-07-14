import { AppRegistry } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import { name as appName } from './app.json';
import { App } from './src/App';

export const storage = new MMKV();

AppRegistry.registerComponent(appName, () => App);
