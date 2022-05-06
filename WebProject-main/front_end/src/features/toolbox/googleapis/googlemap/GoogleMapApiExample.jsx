import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MarkerComponent = ({ text }) => {
  return (
    <div>
      {text}
      <FaMapMarkerAlt />
    </div>
  );
};

const handleApiLoaded = (map, maps) => {
  map.setOptions({
    zoomControl: true
  });
};

class GoogleMapApiExample extends Component {
  static defaultProps = {
    center: {
      lat: 40.3781935742809,
      lng: 49.8754566907883
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBINgGZLwn3zdEAE0H69aErzr2IuiTABiU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <MarkerComponent lat={40.3781935742809} lng={49.8754566907883} text="TWC" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapApiExample;
