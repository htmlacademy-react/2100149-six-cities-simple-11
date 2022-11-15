import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { Offers } from '../../types/offer';
import { City } from '../../types/city';

type MapProps = {
  offers: Offers;
  city: City;
  activeCard: string;
};

function Map({ offers, city, activeCard }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const setMarkers = () => {
    const defaultCustomIcon = new Icon({
      iconUrl: '/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    const currentCustomIcon = new Icon({
      iconUrl: '/img/pin-active.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng
        });

        markers.push(marker);

        marker
          .setIcon(activeCard !== undefined && offer.id === activeCard
            ? currentCustomIcon
            : defaultCustomIcon
          )
          .addTo(map);
      });
    }

    return () => markers.forEach((marker) => marker.remove());
  };

  const setMapView = () => {
    if (map) {
      map.setView({
        lat: city.lat,
        lng: city.lng
      }, 12);
    }
  };

  useEffect(setMarkers, [map, offers, city, activeCard]);

  useEffect(setMapView, [map, city]);

  return <div style={{ height: '100%' }} ref={mapRef}/>;
}

export default Map;
