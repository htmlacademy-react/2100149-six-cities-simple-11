import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import RatingInput from '../rating-input/rating-input';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    id: String(offerId),
    comment: '',
    rating: 0
  });

  const dispatch = useAppDispatch();

  const changeReviewHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => setFormData({ ...formData, [evt.target.name]: evt.target.value });

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction(formData));
  };

  return (
    <form onSubmit={onSubmitHandler} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingInput onChangeHandler={changeReviewHandler} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        value={formData.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={changeReviewHandler}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
