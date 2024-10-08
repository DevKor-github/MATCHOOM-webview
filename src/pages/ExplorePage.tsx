import ListCarousel from 'features/explore/components/ListCarousel';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  return (
    <div className='p-20'>
      <ListCarousel title='HOT' cards={MOCK_CARDS} />
    </div>
  );
};

export default ExplorePage;
