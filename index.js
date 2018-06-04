import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class RNMapDemo extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom'>
                <Text tabLabel={'tab1'}>Text1</Text>
                <Text tabLabel={'tab2'}>Text2</Text>
                <Text tabLabel={'tab3'}>Text3</Text>
            </ScrollableTabView>
        );
    }
}

export default RNMapDemo;
AppRegistry.registerComponent('RNMapDemo', () => RNMapDemo);
