import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';

type MapProps = {
  offers: Offers;
  activeCard: string | undefined;
};

const DEFAULT_CITY = {
  lat: 52.374,
  lng: 4.88969
};

function Map({offers, activeCard}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, DEFAULT_CITY);

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

  useEffect(setMarkers, [map, offers, activeCard]);

  return <div style={{ height: '100%' }} ref={mapRef} />;
}

export default Map;
