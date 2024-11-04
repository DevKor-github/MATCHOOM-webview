import ArchiveSection from 'features/home/components/Archive/ArchiveWrapper';
import TodayClassCard from 'features/home/components/Card/TodayClassCard';
import LectureCarousel from 'features/home/components/Carousel/LectureCarousel';

const TEXT = {
  archive: {
    title: '강의 아카이빙',
    default: {
      took: '수강한 강의',
      open: '오픈한 강의',
    },
    edit: '편집',
  },
  today: {
    title: '지금 당장 수강하기 TODAY CLASS ...',
  },
};

const HomePage = () => {
  return (
    <div className='hide-scrollbar flex h-full w-full flex-col items-center overflow-y-auto'>
      <LectureCarousel />
      <div className='w-full px-20'>
        <ArchiveSection />
        <div className='mb-20 mt-40 w-full'>
          <div className='font-white text-20 font-700'>{TEXT.today.title}</div>
        </div>
        <div className='flex w-full flex-row justify-between'>
          <TodayClassCard />
          <TodayClassCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
