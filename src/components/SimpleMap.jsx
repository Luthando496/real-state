import React, { useState,useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap=()=>{
  

  const [position,setPosition] = useState(null)

  useEffect(() => {
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          // setHasLocation(true);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(position)

  return(
    <div style={{ height: '100vh', width: '90%',marginBottom: '1rem' }} className='mx-auto'>
    {position && <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A marker in London!
        </Popup>
      </Marker>
    </MapContainer>}
  </div>
  )
}

export default SimpleMap