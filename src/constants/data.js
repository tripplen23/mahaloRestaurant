import images from './images';

const sashimi = [
  {
    title: 'Salmon Sashimi',
    price: '99k',
    tags: 'VND | 6pcs',
  },
  {
    title: 'Tuna Sashimi',
    price: '99k',
    tags: 'VND | 6pcs',
  },
  {
    title: 'Salmon Roe',
    price: '95k',
    tags: 'VND | 30 gram',
  },
  {
    title: 'Flying Fish Roe',
    price: '75k',
    tags: 'VND | 30 gram',
  },
  {
    title: 'Marinated Salmon',
    price: '99k',
    tags: 'VND | 150 gram',
  },
];

const specialDishes = [
  {
    title: 'Sushi',
    price: '15k',
    tags: 'VND | Salmon/Tuna/Unagi and Mahalo Sauce | 1pcs',
  },
  {
    title: "Maki",
    price: '59k',
    tags: 'VND | Roll of Salmon/Tuna/Unagi | 1 roll',
  },
  {
    title: 'Lilo and Stich',
    price: '99k',
    tags: 'VND | Special Combo | 1 bowl',
  },
  {
    title: 'Moana',
    price: '99k',
    tags: 'VND | Special Combo | 1 bowl',
  },
  {
    title: 'Tartare',
    price: '39k',
    tags: 'VND | 1pcs',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { sashimi, specialDishes, awards };
