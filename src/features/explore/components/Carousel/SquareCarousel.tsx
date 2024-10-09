import { CarouselType } from '.';
import { Card } from '../Card';

const SquareCarousel = ({ title, cards }: CarouselType) => {
  return (
    <section className='flex flex-col gap-12 w-full'>
      <div className='text-16 font-700 h-[2.2rem]'>{title}</div>
      <div className='flex gap-12 w-full overflow-x-auto'>
        {cards.map((card, index) => (
          <Card.Square
            key={index} // TODO: id로 변경
            title={card.title}
            guide={card.guide}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default SquareCarousel;
