import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import BaiduMapDemo from './BaiduMapDemo'
import Dimensions from 'Dimensions';

class RNMapDemo extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom'>
                <TextInput
                    tabLabel={'停车场'}
                    style={{
                        height:40,
                        borderColor:'gray',
                        borderWidth:1,
                        fontSize:20,
                        padding:0,
                        textAlignVertical:'top',
                        margin:10
                    }}
                    underlineColorAndroid={'transparent'}
                    multiline={true}
                    placeholder={' 查找停车场'}
                />
                <BaiduMapDemo tabLabel={'导航'}/>
                <View
                    tabLabel={'个人中心'}
                    style={{
                        flexDirection: 'column',
                        backgroundColor: '#F0EFF5',
                        marginTop: 10,
                    }}
                >
                    <Text style={styles.personalCenter}>我的信息</Text>
                    <Text style={styles.personalCenter}>订单</Text>
                    <Text style={styles.personalCenter}>钱包</Text>
                    <Text style={styles.personalCenter}>停车场加盟</Text>
                    <Text style={styles.personalCenter}>投诉建议</Text>
                    <Text style={styles.personalCenter}>设置</Text>
                </View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    personalCenter:{
        fontSize: 20,
        width: Dimensions.get('window').width,
        height: 50,
        borderWidth: 0.5,
        padding: 10
    }
});

export default RNMapDemo;
AppRegistry.registerComponent('RNMapDemo', () => RNMapDemo);
