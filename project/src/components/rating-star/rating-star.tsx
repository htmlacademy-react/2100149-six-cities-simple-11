import { Fragment } from 'react';

type RatingStarProps = {
  title: string;
  index: number;
}

function RatingStar(props: RatingStarProps): JSX.Element {
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={5 - props.index} id={`${5 - props.index}-stars`} type="radio" />
      <label htmlFor={`${5 - props.index}-stars`} className="reviews__rating-label form__rating-label" title={props.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingStar;

