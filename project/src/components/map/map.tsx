import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { getActiveCard, getCity, getOffers } from '../../selectors';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';

function Map(): JSX.Element {
  const mapRef = useRef(null);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const activeCard = useAppSelector(getActiveCard);
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
          lat: offer.location.latitude,
          lng: offer.location.longitude
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

  const setMap = () => {
    if (map) {
      map.setView({
        lat: city.lat,
        lng: city.lng
      }, 12);

      setMarkers();
    }
  };

  useEffect(setMap, [map, offers, city, activeCard]);

  return <div style={{ height: '100%' }} ref={mapRef}/>;
}

export default Map;
