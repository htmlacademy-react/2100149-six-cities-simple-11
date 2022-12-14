import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCurrentOfferData } from '../../store/data-process/selectors';
import { fetchCurrentOfferDataAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../../components/logo/logo';
import HeaderNav from '../../components/header-nav/header-nav';
import RoomPhoto from '../../components/room-photo/room-photo';
import Features from '../../components/features/features';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import RoomsList from '../../components/rooms-list/rooms-list';
import { AppRoute, AuthorizationStatus, ONE_STAR_WIDTH, IMAGES_COUNT } from '../../const';

function RoomScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOfferDataAction(id));
    }
  }, [id, dispatch]);

  const { offer, reviews, nearbyOffers, isLoading } = useAppSelector(getCurrentOfferData);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const { title, description, isPremium, type, rating, bedrooms, maxAdults, price, goods, images, host } = offer;

  return (
    <div className="page">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <HeaderNav/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => index < IMAGES_COUNT && <RoomPhoto key={image} photo={image} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${ONE_STAR_WIDTH * Math.round(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Features features={goods} />
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  {description}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.data.length}</span></h2>
                <ReviewsList reviews={reviews.data} />
                {isLogged && <ReviewForm offerId={offer.id} />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[...nearbyOffers, offer] } />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <RoomsList offers={nearbyOffers} className={'near-places'} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
