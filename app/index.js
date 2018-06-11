import React, { Component } from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Search from './search/search';
import GaodeMap from './map/GaodeMap';
import PersonalCenter from './center/center';
import FetchExample from "./fetchExample";

export default class RNMapDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    onSearch(item){
        this.setState({
            data : item
        });
    }

    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom'>
                <Search
                    tabLabel={'停车场'}
                    onSearch={this.onSearch.bind(this)}
                />
                <GaodeMap
                    tabLabel={'导航'}
                    locations={this.state.data}
                />
                <PersonalCenter
                    tabLabel={'个人中心'}
                />
            </ScrollableTabView>
        );
    }
}