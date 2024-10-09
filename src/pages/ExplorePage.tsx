import { Carousel } from 'features/explore/components/Carousel';
import SearchBar from 'features/explore/components/SearchBar';
import Tabs from 'features/explore/components/Tabs';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  return (
    <div className='p-20 pt-0'>
      <div className='flex flex-col gap-16 pb-12 sticky top-0 bg-background z-nav mb-12'>
        <SearchBar />
        <Tabs />
      </div>
      <main className='flex flex-col gap-20 overflow-y-auto'>
        <Carousel.Rectangle title='오늘의 큐레이션' cards={MOCK_CARDS} />
        <Carousel title='HOT' cards={MOCK_CARDS} />
        <Carousel.Square title='곧 마감돼요!' cards={MOCK_CARDS} />
        <Carousel title='꿀조합 컬렉션' cards={MOCK_CARDS} />
      </main>
    </div>
  );
};

export default ExplorePage;
