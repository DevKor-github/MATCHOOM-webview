import { Card, CardType } from './Card';

interface Props {
  title: string;
  cards: CardType[];
  // redirectUrl: string;
}

const ListCarousel = ({ title, cards }: Props) => {
  const slicedCards = cards.slice(0, 3);
  return (
    <section className='flex flex-col gap-12 w-full'>
      <div className='flex justify-between items-center'>
        <span className='text-16 font-700'>{title}</span>
        <button className='text-grey-6 text-14 font-500'>더보기</button>
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

export default ListCarousel;
