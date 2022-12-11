import { generatePath, Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeActiveCard } from '../../store/action-process/action-process';
import { Offer } from '../../types/offer';
import { AppRoute, ONE_STAR_WIDTH } from '../../const';

type RoomCardProps = {
  offer: Offer;
  className: string;
};

function RoomCard({ offer, className }: RoomCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { id, previewImage, price, rating, title, type, isPremium } = offer;

  const linkPath = generatePath(AppRoute.Room, { id: String(id) });

  const handleCardMouseOver = () => dispatch(changeActiveCard(id));
  const handleCardMouseLeave = () => dispatch(changeActiveCard());

  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={className !== 'near-places' ? handleCardMouseOver : undefined}
      onMouseLeave={className !== 'near-places' ? handleCardMouseLeave : undefined}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={linkPath}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ONE_STAR_WIDTH * Math.round(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default RoomCard;
