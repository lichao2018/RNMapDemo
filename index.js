import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import BaiduMapDemo from './BaiduMapDemo'

export default class RNMapDemo extends Component {
    render() {
        return (
            <BaiduMapDemo/>
        );
    }
}

AppRegistry.registerComponent('RNMapDemo', () => RNMapDemo);
