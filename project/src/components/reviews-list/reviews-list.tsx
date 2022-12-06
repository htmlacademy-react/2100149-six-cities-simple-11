import { Fragment } from 'react';
import { humanizeDate } from '../../utils';
import { ONE_STAR_WIDTH, REVIEWS_COUNT } from '../../const';
import { Reviews } from '../../types/review';

type ReviewProps = {
  reviews: Reviews;
}

function ReviewsList({ reviews }: ReviewProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => index < REVIEWS_COUNT && (
        <Fragment key={review.id} >
          <li className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">
                {review.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${ONE_STAR_WIDTH * Math.round(review.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={review.date}>{humanizeDate(review.date)}</time>
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export default ReviewsList;
