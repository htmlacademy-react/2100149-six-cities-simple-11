import { Fragment } from 'react';

type RatingStarProps = {
  title: string;
  index: number;
}

function RatingStar({title, index}: RatingStarProps): JSX.Element {
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={5 - index} id={`${5 - index}-stars`} type="radio" />
      <label htmlFor={`${5 - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingStar;

