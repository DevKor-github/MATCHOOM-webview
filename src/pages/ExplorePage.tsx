import RectangleCard from 'features/explore/components/Card/RectangleCard';
import ListCarousel from 'features/explore/components/ListCarousel';
import RectangleCarousel from 'features/explore/components/RectangleCarousel';
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
      <RectangleCarousel title='오늘의 큐레이션' cards={MOCK_CARDS} />
      <ListCarousel title='HOT' cards={MOCK_CARDS} />
    </div>
  );
};

export default ExplorePage;
