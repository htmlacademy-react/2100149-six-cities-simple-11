import ReviewItem from '../review/review';
import { Reviews } from '../../types/review';

type ReviewProps = {
  reviews: Reviews;
}

function ReviewsList({ reviews }: ReviewProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

export default ReviewsList;
