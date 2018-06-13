import React, {Component} from 'react';
import {
    TextInput,
    Button,
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            searchArray : '',
            fetchData : {},
            parkingName : []
        }
    }
    render(){
        return(
            <View flexDirection='column'>
                <View flexDirection='row'>
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
                            ()=>this.getSearchLocation()
                        }
                        title='搜索'
                    />
                </View>
                <FlatList
                    data = {this.state.parkingName}
                    renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }

    getSearchLocation(){
        return fetch('http://restapi.amap.com/v3/place/text?key=4814285eeea3dfc092c2d1bde493f6cc&keywords=' + this.state.searchArray + '&types=150900')
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    fetchData: responseJson,
                    parkingName: []
                });
                for(var i = 0; i < responseJson.pois.length; i ++){
                    this.setState({
                        parkingName: [
                            ...this.state.parkingName,
                            {key: responseJson.pois[i].name}
                        ]
                    })
                }
                this.props.onSearch(this.state.fetchData);
            })
            .catch((error)=>console.error(error));
    }
}

const styles = StyleSheet.create({
    item:{
        padding: 10,
        fontSize: 18,
        height: 44,
        borderWidth: 0.5,
    }
})