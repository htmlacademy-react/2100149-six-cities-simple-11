import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortType } from '../../store/action-process/selectors';
import { changeSortType } from '../../store/action-process/action-process';
import { SortTypes } from '../../const';

function SortForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isOpened, setOpenedState] = useState(false);

  const sortType = useAppSelector(getSortType);

  const handleSortListClick = () => setOpenedState(!isOpened);

  const handleSortTypeChange = (type: SortTypes) => {
    dispatch(changeSortType(type));
    setOpenedState(false);
  };

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.values(SortTypes).map((type) => (
          <li
            key={type}
            className={`places__option ${type === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortTypeChange(type)}
          >
            {type}
          </li>))}
      </ul>
    </form>
  );
}

export default SortForm;
