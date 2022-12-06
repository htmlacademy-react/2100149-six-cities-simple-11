import { ChangeEvent, Fragment } from 'react';
import { MAX_RATING } from '../../const';

type RatingInputProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingInput({ onChangeHandler }: RatingInputProps): JSX.Element {
  const ratingTitles = [
    'perfect',
    'good',
    'not bad',
    'badly',
    'terribly'
  ];

  return (
    <div className="reviews__rating-form form__rating">
      {ratingTitles.map((title, index) => (
        <Fragment key={title}>
          <input
            onChange={onChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            value={MAX_RATING - index}
            id={`${MAX_RATING - index}-stars`}
            type="radio"
          />
          <label htmlFor={`${MAX_RATING - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>);
}

export default RatingInput;
