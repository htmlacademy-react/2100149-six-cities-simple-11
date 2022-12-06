import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action-process/action-process';
import { getCity } from '../../store/action-process/selectors';
import { City } from '../../types/city';
import { AppRoute, Cities } from '../../const';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);
  const onCityChangeHandler = (city: City) => dispatch(changeCity(city));

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list" >
            {Cities.map((city) => (
              <li key={city.name} className="locations__item">
                <Link
                  className={currentCity === city
                    ? 'locations__item-link tabs__item tabs__item--active'
                    : 'locations__item-link tabs__item'}
                  to={AppRoute.Main}
                  onClick={() => onCityChangeHandler(city)}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
