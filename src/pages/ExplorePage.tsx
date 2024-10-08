import RectangleCard from 'features/explore/components/Card/RectangleCard';
import { Carousel } from 'features/explore/components/Carousel';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  const card = MOCK_CARDS[0];
  return (
    <div className='p-20'>
      <RectangleCard
        title={card.title}
        description={card.description}
        imageSrc={card.imageSrc}
      />
      <Carousel.Rectangle title='오늘의 큐레이션' cards={MOCK_CARDS} />
      <Carousel title='HOT' cards={MOCK_CARDS} />
    </div>
  );
};

export default ExplorePage;
