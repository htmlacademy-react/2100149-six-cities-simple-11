import { ChangeEvent, Fragment } from 'react';
import { RatingInputs } from '../../const';

type RatingInputProps = {
  selectedRating: string;
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingInput({ selectedRating, onChangeHandler }: RatingInputProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingInputs.map((item) => (
        <Fragment key={item.title} >
          <input
            onChange={onChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            value={item.value}
            id={`${item.value}-stars`}
            type="radio"
            checked={item.value === Number(selectedRating)}
          />
          <label htmlFor={`${item.value}-stars`} className="reviews__rating-label form__rating-label" title={item.title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>);
}

export default RatingInput;
