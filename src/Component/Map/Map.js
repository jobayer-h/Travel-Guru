import React from 'react';
import {GoogleMap , withScriptjs, withGoogleMap} from 'react-google-maps'
const Map = () => {
    return (
        <GoogleMap
        defaultZoom={12} defaultCenter={{lat: 21.433920, lng: 91.987030}}
        />
    );
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;