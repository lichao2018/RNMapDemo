import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import Dimensions from 'Dimensions';

export default class PersonalCenter extends Component{
    render(){
        return(
            <View
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