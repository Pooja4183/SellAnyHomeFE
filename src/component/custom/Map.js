import React, { useEffect, useRef } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';


const OLMap = () => {
    const mapRef = useRef(null);
  
    useEffect(() => {
      // Initialize the map when the component mounts
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([55.2708, 25.2048]), 
          zoom: 8
        })
      });
  
      // Clean up the map when the component unmounts
      return () => {
        map.setTarget(null);
      };
    }, []);
  
    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
  };
  
  export default OLMap;