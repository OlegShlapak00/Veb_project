import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";



class  GoogleMap extends React.Component {

	render() {
		return(
			<Map  google={this.props.google}
					  zoom={18}
					  initialCenter={{ lat: 50.448890, lng: 30.513338}}
			>
				<Marker onClick={this.onMarkerClick}
								name={'Current location'} />
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyBXt-gsu8He67-p7bRfQ4Bd45uuAdIoCyw')
})(GoogleMap)