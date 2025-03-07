import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    maxWidth: "calc(100% - 50px)", // Ensures no overflow
    height: "600px",
    margin: "0 auto", // Centers it with respect to the parent
    padding: "0 2px", // Adds space inside without affecting width
    overflow: "hidden", // Prevents any extra content from causing scroll
  };
  

const center = { lat: 37.7749, lng: -122.4194 };

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBWSgPhjfl3XpMircVksXOP3ywV8AWXjDc",
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap  mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
