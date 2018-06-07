import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class Search extends Component{
    render(){
        return(
            <TextInput
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
        );
    }
}