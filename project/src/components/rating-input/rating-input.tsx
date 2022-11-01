import RatingStar from '../rating-star/rating-star';

type RatingInputProps = {
  titles: string[];
}

function RatingInput({titles}: RatingInputProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {titles.map((item, index) => <RatingStar key={item } title={item} index = {index} />)}
    </div>
  );
}

export default RatingInput;
