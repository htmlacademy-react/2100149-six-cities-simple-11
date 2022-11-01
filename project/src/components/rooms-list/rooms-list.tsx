import RoomCard from '../room-card/room-card';
import { Offers } from '../../types/offer';

type RoomsListProps = {
  offers: Offers;
  activeCard: string;
  onSelectCard: (id:string) => void;
};

function RoomsList({offers, activeCard, onSelectCard}: RoomsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <RoomCard key={item.id} offer={item} activeCard={activeCard} onSelectCard={onSelectCard}/>)}
    </div>
  );
}

export default RoomsList;
