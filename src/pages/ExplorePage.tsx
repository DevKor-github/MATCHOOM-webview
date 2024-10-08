import RectangleCard from 'features/explore/components/Card/RectangleCard';
import SquareCard from 'features/explore/components/Card/SquareCard';
import { Carousel } from 'features/explore/components/Carousel';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  const card = MOCK_CARDS[0];
  return (
    <div className='p-20 flex flex-col gap-20'>
      <SquareCard
        title={card.title}
        guide={card.guide}
        imageSrc={card.imageSrc}
      />
      <Carousel.Rectangle title='오늘의 큐레이션' cards={MOCK_CARDS} />
      <Carousel title='HOT' cards={MOCK_CARDS} />
    </div>
  );
};

export default ExplorePage;
