import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeActiveCard } from '../../store/action';
import { Offer } from '../../types/offer';

type RoomCardProps = {
  offer: Offer;
  className: string;
};

function RoomCard({ offer, className }: RoomCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const mouseOverHandler = () => dispatch(changeActiveCard(offer.id));
  const mouseLeavehandler = () => dispatch(changeActiveCard(''));
  const onClickHandler = () => window.scrollTo(0, 0);

  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeavehandler}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${useAppSelector((state) => state.activeCard)}`} onClick ={onClickHandler}>
          <img className="place-card__image" src={offer.photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
          <Link to={`/offer/${useAppSelector((state) => state.activeCard)}`} onClick={onClickHandler} >{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default RoomCard;
