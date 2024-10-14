import { CarouselType } from '.';
import { Card } from '../Card';

const RectangleCarousel = ({ title, cards }: CarouselType) => {
  return (
    <section className='flex w-full flex-col gap-12'>
      <div className='h-[2.2rem] text-16 font-700'>{title}</div>
      <div className='flex w-full gap-12 overflow-x-auto'>
        {cards.map((card, index) => (
          <Card.Rectangle
            key={index} // TODO: id로 변경
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default RectangleCarousel;
