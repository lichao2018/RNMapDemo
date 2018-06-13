import React, {Component} from 'react';
import {MapView} from 'react-native-amap3d';

export default class GaodeMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            _markers : [],
        }
    }

    _onPressEvent = ({nativeEvent}) => this.setState({
        _markers: [
            ...this.state._markers,
            <MapView.Marker
                color='green'
                title='hello marker'
                coordinate={nativeEvent}
            />
        ]
    });

    render(){
        var markers =[];
        for(var i = 0; i < this.props.locations.length; i ++){
            var _coordinate = {
                latitude : 0,
                longitude : 0
            };
            var location = this.props.locations[i];
            var locationArr = location.split(',');
            _coordinate.latitude = parseFloat(locationArr[1]);
            _coordinate.longitude = parseFloat(locationArr[0]);
            markers.push(
                <MapView.Marker
                    color='green'
                    title='hello marker'
                    coordinate={_coordinate}
                />
            );
        }
        return(
            <MapView
                style={{
                    flex: 1
                }}
                coordinate={{
                    latitude: 39.91095,
                    longitude: 116.37296
                }}
                locationEnabled={true}
                showsCompass={true}
                showsScale={true}
                showsLocationButton={true}
                showsZoomControls={true}
                onPress={this._onPressEvent}
            >
                {markers}
            </MapView>
        );
    }
}