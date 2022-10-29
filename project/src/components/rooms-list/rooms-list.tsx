import RoomCard from '../room-card/room-card';
import { Offers } from '../../types/offer';

type RoomsListProps = {
  offers: Offers;
};

function RoomsList(props: RoomsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((item) => <RoomCard key={item.id} offer={item} />)}
    </div>
  );
}

export default RoomsList;
