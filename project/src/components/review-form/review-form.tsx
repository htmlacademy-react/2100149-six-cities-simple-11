import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getCurrentOfferData } from '../../store/data-process/selectors';
import RatingInput from '../rating-input/rating-input';
import { ReviewLength, ReviewSendingStatus } from '../../const';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    id: String(offerId),
    comment: '',
    rating: ''
  });

  const currentOffer = useAppSelector(getCurrentOfferData);
  const { reviews: { sendingStatus } } = currentOffer;

  const isFormValid = formData.rating && formData.comment.length > ReviewLength.Min && formData.comment.length < ReviewLength.Max;

  const dispatch = useAppDispatch();

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [target.name]: target.value });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction({ ...formData, rating: Number(formData.rating) }));
  };

  useEffect(() => {
    if (sendingStatus === ReviewSendingStatus.Sended) {
      setFormData({ ...formData, comment: '', rating: '' });
    }
  }, [sendingStatus]);

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingInput selectedRating={formData.rating} onChangeHandler={handleInputChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        value={formData.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={sendingStatus === ReviewSendingStatus.Pending || !isFormValid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
