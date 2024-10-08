import { Card, CardType } from './Card';

interface Props {
  title: string;
  cards: CardType[];
  // redirectUrl: string;
}

const RectangleCarousel = ({ title, cards }: Props) => {
  return (
    <section className='flex flex-col gap-12 w-full'>
      <div className='text-16 font-700'>{title}</div>
      <div className='flex gap-12 w-full overflow-x-auto'>
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
