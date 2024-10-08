import { Carousel } from 'features/explore/components/Carousel';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  return (
    <div className='p-20 flex flex-col gap-20'>
      <Carousel.Rectangle title='오늘의 큐레이션' cards={MOCK_CARDS} />
      <Carousel title='HOT' cards={MOCK_CARDS} />
      <Carousel.Square title='곧 마감돼요!' cards={MOCK_CARDS} />
      <Carousel title='꿀조합 컬렉션' cards={MOCK_CARDS} />
    </div>
  );
};

export default ExplorePage;
