import React, {Component} from 'react';
import {MapView} from 'react-native-amap3d';

export default class GaodeMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            _markers : []
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
                {this.state._markers}
            </MapView>
        );
    }
}