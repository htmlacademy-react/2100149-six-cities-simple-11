import { Offer } from '../types/offer';

export const Offers: Offer[] = [
  {
    id: ':1',
    photos: ['img/apartment-01.jpg'],
    title: 'Some title',
    description: 'Some description',
    isPremium: true,
    type: 'Private Room',
    rating: 4,
    bedroomsCount: 1,
    guestsCount: 2,
    price: 80,
    features: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge','Washing machine'],
    owner: {
      name: 'Ivan',
      avatar: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    id: ':2',
    photos: ['img/apartment-02.jpg'],
    title: 'Some title',
    description: 'Some description',
    isPremium: false,
    type: 'Apartment',
    rating: 2,
    bedroomsCount: 2,
    guestsCount: 3,
    price: 100,
    features: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
    owner: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    id: ':3',
    photos: ['img/apartment-03.jpg'],
    title: 'Some title',
    description: 'Some description',
    isPremium: true,
    type: 'House',
    rating: 5,
    bedroomsCount: 4,
    guestsCount: 8,
    price: 200,
    features: ['Wi-Fi', 'Kitchen', 'Fridge'],
    owner: {
      name: 'Ignat',
      avatar: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    id: ':4',
    photos: ['img/apartment-02.jpg'],
    title: 'Some title',
    description: 'Some description',
    isPremium: true,
    type: 'Hotel',
    rating: 1,
    bedroomsCount: 1,
    guestsCount: 1,
    price: 20,
    features: ['Wi-Fi'],
    owner: {
      name: 'Brat s gor Egor',
      avatar: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    lat: 52.3809553943508,
    lng: 4.939309666406198
  },
];
