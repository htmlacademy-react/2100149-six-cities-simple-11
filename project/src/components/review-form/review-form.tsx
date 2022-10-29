import { SetStateAction, useState } from 'react';
import RatingInput from '../rating-input/rating-input';

function ReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');

  const ratingTitles = [
    'perfect',
    'good',
    'not bad',
    'badly',
    'terribly'
  ];

  const changeReviewTextHandler = (evt: { target: { value: SetStateAction<string> } }) => setReviewText(evt.target.value);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingInput titles={ratingTitles}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={reviewText}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={changeReviewTextHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
