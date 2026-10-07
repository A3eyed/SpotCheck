import 'react-native-url-polyfill/auto';
import './src/__create/polyfills';
global.Buffer = require('buffer').Buffer;

import '@expo/metro-runtime';
import { LogBox } from 'react-native';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import App from './entrypoint';

if (__DEV__) {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'VirtualizedLists should never be nested',
  ]);
}

renderRootComponent(App);
