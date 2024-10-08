import { CardType } from '../Card';
import PrimaryCarousel from './PrimaryCarousel';
import RectangleCarousel from './RectangleCarousel';

export interface CarouselType {
  title: string;
  cards: CardType[];
  // redirectUrl: string;
}

export const Carousel = Object.assign(PrimaryCarousel, {
  Rectangle: RectangleCarousel,
});
