import React, {Component} from 'react';
import {
    TextInput,
    Button,
    View,
    Text
} from 'react-native';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            searchArray : '',
            searchLocation : [],
        }
    }
    render(){
        return(
            <View
                flexDirection='row'
            >
                <TextInput
                    style={{
                        width:200,
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
                    placeholder={'请输入搜索内容'}
                    onChangeText={
                        (value)=>this.setState({
                            searchArray : value
                        })
                    }
                />
                <Button
                    onPress={
                        ()=>this.getSearchLocation()
                    }
                    title='搜索'
                />
                <Text>{this.state.data}</Text>
            </View>
        );
    }

    getSearchLocation(){
        return fetch('http://restapi.amap.com/v3/place/text?key=4814285eeea3dfc092c2d1bde493f6cc&keywords=' + this.state.searchArray)
            .then((response)=>response.json())
            .then((responseJson)=>{
                alert(responseJson.pois[0].location);
            })
            .catch((error)=>console.error(error));
    }
}