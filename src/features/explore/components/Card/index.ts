import PrimaryCard from './PrimaryCard';

export interface CardType {
  title: string;
  description: string;
  guide: string;
  imageSrc: string;
}

export const Card = Object.assign(PrimaryCard, {});
