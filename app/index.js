import React, { Component } from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Search from './search/search';
import GaodeMap from './map/GaodeMap';
import PersonalCenter from './center/center';

export default class RNMapDemo extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom'>
                <Search
                    tabLabel={'停车场'}
                />
                <GaodeMap
                    tabLabel={'导航'}
                />
                <PersonalCenter
                    tabLabel={'个人中心'}
                />
            </ScrollableTabView>
        );
    }
}