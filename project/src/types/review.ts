export type Reviews = Review[];

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type UserReview = {
  id: string;
  comment: string;
  rating: number;
}
