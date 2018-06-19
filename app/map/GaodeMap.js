import React, {
    Component,
} from 'react';
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

    _onLocation = ({nativeEvent}) => {
        fetch('http://restapi.amap.com/v3/place/around?key=4814285eeea3dfc092c2d1bde493f6cc&location=' + nativeEvent.longitude + ',' + nativeEvent.latitude + '&keywords=停车场&offset=100')
            .then((response)=>response.json())
            .then((responseJson)=>{
                var pois = responseJson.pois;
                for(var i = 0; i < pois.length; i ++){
                    var location = pois[i].location.split(',');
                    this.setState({
                        _markers: [
                            ...this.state._markers,
                            <MapView.Marker
                                color='green'
                                title='hello marker'
                                coordinate={{
                                    latitude: parseFloat(location[1]),
                                    longitude: parseFloat(location[0])
                                }}
                            />
                        ]
                    });
                }
            })
            .catch((error)=>console.error(error));
    }

    render(){
        var centerPosition;
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                centerPosition = JSON.stringify(position);
            },
            (error)=>{
                console.warn(error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            });
        var _coordinate = {
            latitude : 0,
            longitude : 0
        };
        var location = this.props.location;
        var marker;
        if(location){
            var locationArr = location.split(',');
            _coordinate.latitude = parseFloat(locationArr[1]);
            _coordinate.longitude = parseFloat(locationArr[0]);
            marker = <MapView.Marker
                color='green'
                title='hello marker'
                coordinate={_coordinate}
            />;
        }
        return(
            <MapView
                style={{
                    flex: 1
                }}
                coordinate={centerPosition}
                locationEnabled={true}
                showsCompass={true}
                showsScale={true}
                showsLocationButton={true}
                showsZoomControls={true}
                onPress={this._onPressEvent}
                onLocation={this._onLocation}
                zoomLevel={15}
            >
                {this.state._markers}
            </MapView>
        );
    }
}