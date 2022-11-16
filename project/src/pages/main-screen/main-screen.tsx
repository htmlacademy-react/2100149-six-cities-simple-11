import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOffers } from '../../store/action';
import { getCity, getSortType } from '../../selectors';
import Logo from '../../components/logo/logo';
import CitiesList from '../../components/cities-list/cities-list';
import SortForm from '../../components/sort-form/sort-form';
import RoomsList from '../../components/rooms-list/rooms-list';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import { SortTypes, AppRoute } from '../../const';

type MainScreenProps = {
  offers: Offers;
};

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  const currentCity = useAppSelector(getCity);

  const getSortedOffers = (items: Offers, sortType: string) => {
    switch (sortType) {
      case SortTypes.Popular:
        return items;
      case SortTypes.PriceToHigh:
        return items.sort((offerB, offerA) => offerB.price - offerA.price);
      case SortTypes.PriceToLow:
        return items.sort((offerB, offerA) => offerA.price - offerB.price);
      case SortTypes.TopRatedFirst:
        return items.sort((offerB, offerA) => offerA.rating - offerB.rating);
    }
  };

  const currentOffers = getSortedOffers(offers.filter((offer) => offer.city === currentCity.name), useAppSelector(getSortType));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentOffers) {
      dispatch(loadOffers(currentOffers));
    }
  }, [currentCity, offers]);

  if (!currentOffers || currentOffers.length === 0) {
    return <Navigate to={AppRoute.MainEmpty} />;
  }

  return (
    <div className="page page--gray page--main">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <CitiesList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <SortForm/>
              <div className="cities__places-list places__list tabs__content">
                <RoomsList offers={currentOffers} className={'cities'} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
