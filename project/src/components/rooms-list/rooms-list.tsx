import RoomCard from '../room-card/room-card';
import { Offers } from '../../types/offer';

type RoomsListProps = {
  offers: Offers;
  activeCard: string;
  onSelectCard: (id: string) => void;
  className: string;
};

function RoomsList({offers, activeCard, onSelectCard, className}: RoomsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <RoomCard key={offer.id} offer={offer} activeCard={activeCard} onSelectCard={onSelectCard} className={className} />)}
    </>
  );
}

export default RoomsList;
