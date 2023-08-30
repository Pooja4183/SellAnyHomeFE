import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import { Point } from 'ol/geom';

const OLMap = ({ address, location }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null); // Store the map instance
  const [coordinates, setCoordinates] = useState([0, 0]);

  const fetchCoordinates = async () => {
    if (location === '' || location === undefined) {
      console.log("Location not defined", location, "address::", address);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            address
          )}&format=json`
        );
        const data = await response.json();
          console.log("Coordinates::", data);
        if (data && data.length > 0) {
          
          const [lon, lat] = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
          console.log("Lat, lon", lat, lon);
          setCoordinates([lon, lat]);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    } else {
      const [lon, lat] = [
        parseFloat(location.coordinates[0]),
        parseFloat(location.coordinates[1]),
      ];
      setCoordinates([lon, lat]);
    }
    console.log("Mapref", mapRef, mapRef.current, "Map", map);
    if (mapRef.current && !map) {
      console.log("inside");
      const newMap = new Map({
        target: mapRef.current,
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({
          center: fromLonLat(coordinates),
          zoom: 8,
        }),
      });

      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: [
            new Feature({
              geometry: new Point(fromLonLat(coordinates)),
            }),
          ],
        }),
         style: new Style({
        //   image: new Icon({
        //     imgSize: [24, 24], // Set the size of the icon
        //     // Use the style option to set SVG as background image
        //    // style: `background-image: url('./facebook.png'); background-size: contain; width: 24px; height: 24px;`,
        //   }),
         }),
      });

      newMap.addLayer(markerLayer);

      setMap(newMap);
    }
  }
  //;);

  // useEffect(() => {
  //   // Fetch coordinates and initialize the map
  //   fetchCoordinates();
  // }, [address,fetchCoordinates]);


  
  useEffect(() => {
    // Update the map's view when coordinates change
    if (map) {
      map.getView().setCenter(fromLonLat(coordinates));
    }
  }, [coordinates, map]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default OLMap;
