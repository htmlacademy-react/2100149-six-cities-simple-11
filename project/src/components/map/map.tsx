import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { getActiveCard, getCity } from '../../store/action-process/selectors';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { Offers } from '../../types/offer';

type MapProps = {
  offers: Offers;
}

function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = useAppSelector(getCity);
  const activeCard = useAppSelector(getActiveCard);
  const map = useMap(mapRef, city);

  const setMap = () => {
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
      map.setView({
        lat: city.lat,
        lng: city.lng
      });

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

      return () => markers.forEach((marker) => marker.remove());
    }
  };

  useEffect(setMap, [map, offers, city, activeCard]);

  return <div style={{ height: '100%' }} ref={mapRef}/>;
}

export default Map;
