export type Offers = Offer[];

export type Offer = {
  id: string;
  photos: string[];
  title: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  bedroomsCount: number;
  guestsCount: number;
  price: number;
  features: string[];
  owner: {
    name: string;
    avatar: string;
    isPro: boolean;
  };
};
