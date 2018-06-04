import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import BaiduMapDemo from './BaiduMapDemo'

class RNMapDemo extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom'>
                <Text tabLabel={'停车场'}>Text1</Text>
                <BaiduMapDemo tabLabel={'导航'}/>
                <Text tabLabel={'个人中心'}>Text3</Text>
            </ScrollableTabView>
        );
    }
}

export default RNMapDemo;
AppRegistry.registerComponent('RNMapDemo', () => RNMapDemo);
