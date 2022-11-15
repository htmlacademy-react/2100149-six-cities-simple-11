import { Link } from 'react-router-dom';
import { City } from '../../types/city';
import { AppRoute, Cities } from '../../const';

type CitiesListProps = {
  currentCity: string;
  onCityChange: (currentCity: City) => void;
}

function CitiesList({currentCity, onCityChange}: CitiesListProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list" >
            {Cities.map((city) => (
              <li key={city.name} className="locations__item">
                <Link
                  className={currentCity === city.name
                    ? 'locations__item-link tabs__item tabs__item--active'
                    : 'locations__item-link tabs__item'}
                  to={AppRoute.Main}
                  onClick={() => onCityChange(city)}
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
