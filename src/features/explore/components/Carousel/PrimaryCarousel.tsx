import { CarouselType } from '.';
import { Card } from '../Card';

const PrimaryCarousel = ({ title, cards }: CarouselType) => {
  const slicedCards = cards.slice(0, 3);
  return (
    <section className='flex w-full flex-col gap-12'>
      <div className='flex h-[2.2rem] items-center justify-between'>
        <span className='text-16 font-700'>{title}</span>
        <button className='text-14 font-500 text-grey-6'>더보기</button>
      </div>
      <div className='flex flex-col gap-12'>
        {slicedCards.map((card, index) => (
          <Card
            key={index} // TODO: id로 변경
            title={card.title}
            description={card.description}
            guide={card.guide}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default PrimaryCarousel;
