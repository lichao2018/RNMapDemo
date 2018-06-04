import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import BaiduMapDemo from './BaiduMapDemo'

class RNMapDemo extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom'>
                <TextInput
                    tabLabel={'停车场'}
                    style={{height:40}}
                    value='helo'
                />
                <BaiduMapDemo tabLabel={'导航'}/>
                <View
                    abLabel={'个人中心'}
                    style={{flexDirection:'column'}}>
                    <Text>我的信息</Text>
                    <Text>订单</Text>
                    <Text>钱包</Text>
                    <Text>停车场加盟</Text>
                    <Text>投诉建议</Text>
                    <Text>设置</Text>
                </View>
            </ScrollableTabView>
        );
    }
}

export default RNMapDemo;
AppRegistry.registerComponent('RNMapDemo', () => RNMapDemo);
