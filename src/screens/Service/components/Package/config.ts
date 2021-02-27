import * as SVG from 'assets/svg';

export const availableServices = [
  {
    id: 1,
    Icon: SVG.CreditHistory,
    active: true,
    text: 'შეუზღუდავი წვდომა საკრედიტო ისტორიაზე',
  },
  {
    id: 2,
    Icon: SVG.CreditScore,
    active: true,
    text: 'საკრედიტო ქულაზე',
  },
  {
    id: 3,
    Icon: SVG.Star,
    active: true,
    text: 'ქულის 12 თვის ისტორია',
  },
  {
    id: 4,
    Icon: SVG.Simulator,
    active: true,
    text: 'საკრედიტო ქულის სიმულატორი',
  },
  {
    id: 5,
    Icon: SVG.Monitoring,
    active: false,
    text: 'საკრედიტო მონიტორინგი',
  },
];
