import React, { Component } from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Search from './search/search';
import GaodeMap from './map/GaodeMap';
import PersonalCenter from './center/center';

export default class RNMapDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            location: ''
        }
    }

    onSearch(item){
        // this.scrollableTabView.goToPage(1);
        this.setState({
            location : item
        });
    }

    render() {
        return (
            <ScrollableTabView
                ref={(ref)=>{this.scrollableTabView=ref;}}
                tabBarPosition='bottom'
                locked={true}
            >
                <Search
                    tabLabel={'停车场'}
                    onSearch={this.onSearch.bind(this)}
                />
                <GaodeMap
                    tabLabel={'导航'}
                    location={this.state.location}
                />
                <PersonalCenter
                    tabLabel={'个人中心'}
                />
            </ScrollableTabView>
        );
    }
}