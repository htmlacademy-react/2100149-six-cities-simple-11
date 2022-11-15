import RoomCard from '../room-card/room-card';
import { Offers } from '../../types/offer';

type RoomsListProps = {
  offers: Offers;
  className: string;
};

function RoomsList({offers, className}: RoomsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <RoomCard key={offer.id} offer={offer} className={className} />)}
    </>
  );
}

export default RoomsList;
