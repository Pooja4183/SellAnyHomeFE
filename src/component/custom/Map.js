import React, { useEffect, useRef, useState } from 'react';
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
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const fetchCoordinates = async () => {
    if (location === '' || location === undefined) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            address
          )}&format=json`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const [lon, lat] = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
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
  };

  useEffect(() => {
    fetchCoordinates();
  }, [address, location]);

  useEffect(() => {
    if (!isMapInitialized && coordinates[0] !== 0 && coordinates[1] !== 0) {
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
          features: [new Feature({ geometry: new Point(fromLonLat(coordinates)) })],
        }),
        style: new Style({
          image: new Icon({
            height:42,
            imgSize: [43, 43],
            src: '/loc1.png',
          }),
        }),
      });

      newMap.addLayer(markerLayer);

      setMap(newMap);
      setIsMapInitialized(true);
    }
  }, [coordinates, isMapInitialized]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default OLMap;
