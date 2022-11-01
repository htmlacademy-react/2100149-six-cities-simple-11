import { useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';

type MapProps = {
  offers: Offers;
  activeCard: string | undefined;
};

const amsterdam = {
  lat: 52.374,
  lng: 4.88969
};

function Map({offers, activeCard}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, amsterdam, null);

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

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng
        });

        marker
          .setIcon(activeCard !== undefined && offer.id === activeCard
            ? currentCustomIcon
            : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  };

  useEffect(setMarkers, [map, offers, activeCard]);

  return (
    <section className="cities__map map">
      <div style={{ height: '100%' }} ref={mapRef} />
    </section>
  );
}

export default Map;
