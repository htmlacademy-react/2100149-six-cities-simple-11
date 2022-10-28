import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type RoomCardProps = {
  offer: Offer;
};

function RoomCard(props: RoomCardProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => setActiveCard(props.offer.id)}
    >
      <div className="place-card__mark" style={props.offer.isPremium ? {} : { display: 'none' }}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${ activeCard}`}>
          <img className="place-card__image" src={props.offer.photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${activeCard}`}>{props.offer.title}</Link>
        </h2>
        <p className="place-card__type">{props.offer.type}</p>
      </div>
    </article>
  );
}

export default RoomCard;
