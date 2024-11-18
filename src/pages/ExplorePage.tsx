import { useState } from 'react';
import { ChangeEvent } from 'react';
import { useGetAllLectures } from 'services/search/api';
import { Card } from 'features/explore/components/Card';
import { Carousel } from 'features/explore/components/Carousel';
import SearchBar from 'features/explore/components/SearchBar';
import Tabs from 'features/explore/components/Tabs';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { data: lectures } = useGetAllLectures();
  const filteredLectures = lectures?.filter((lecture) =>
    lecture.name.includes(value),
  );

  return (
    <div className='p-20 pt-0'>
      <div className='sticky top-0 z-nav mb-12 flex flex-col gap-16 bg-background pb-12 '>
        <SearchBar value={value} handleChange={handleChange} />
        <Tabs />
      </div>
      <main className='flex flex-col gap-20 overflow-y-auto'>
        {value ? (
          <ul>
            {filteredLectures.map((lecture) => (
              <Card
                key={lecture.id}
                title={lecture.name}
                description={lecture.description}
                guide='수강생 만족도 1위'
                imageSrc={''}
              />
            ))}
          </ul>
        ) : (
          <MainContent />
        )}
      </main>
    </div>
  );
};

export default ExplorePage;

const MainContent = () => {
  return (
    <>
      <Carousel.Rectangle title='오늘의 큐레이션' cards={MOCK_CARDS} />
      <Carousel title='HOT' cards={MOCK_CARDS} />
      <Carousel.Square title='곧 마감돼요!' cards={MOCK_CARDS} />
      <Carousel title='꿀조합 컬렉션' cards={MOCK_CARDS} />
    </>
  );
};
