import RectangleCard from 'features/explore/components/Card/RectangleCard';
import ListCarousel from 'features/explore/components/ListCarousel';
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
      <ListCarousel title='HOT' cards={MOCK_CARDS} />
    </div>
  );
};

export default ExplorePage;
