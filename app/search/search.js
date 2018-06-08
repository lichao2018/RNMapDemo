import React, {Component} from 'react';
import {
    TextInput,
    Button,
    View
} from 'react-native';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            searchArray : '',
            searchLocation : []
        }
    }
    render(){
        return(
            <View
                flexDirection='row'
            >
                <TextInput
                    style={{
                        width:300,
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
                        ()=>alert(this.getSearchLocation())
                    }
                    title='搜索'
                />
            </View>
        );
    }

    getSearchLocation(){
        return fetch('http://restapi.amap.com/v3/place/text?key=4814285eeea3dfc092c2d1bde493f6cc&keywords={this.state.searchArray}')
            .then((response)=>response.json)
            .then((responseJson)=>{
                return responseJson.entr_location;
            })
            .catch((error)=>console.error(error));
    }
}