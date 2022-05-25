/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react"
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '80vh',
  margin: "2rem auto",
  border: "1px solid",
  borderRadius: "10px",
};

const center = {
  lat: 5.614818,
  lng: -0.205874
};

const Contact = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCX4ZamCKyhFjEKZz75xBotXKHI_svgKTg"
      })
    
      const [map, setMap] = useState(null)
    
      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
    


      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <>
              <Marker position={center} />
          </>
        </GoogleMap>
    ) : <></>
}

export default Contact