import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap=()=>{
  const defaultProps = {
    center: {
      lat: -32.003907,
      lng: 19.7946256
    },
    zoom: 7
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '90%' }} className='mx-auto'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB7dOV6lPRK6pqXSIMOEztjQlzLD8fvrdo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={30.5595}
          lng={22.9375}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap