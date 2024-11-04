import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'features/home/styles/swiper.css';
import BlueLectureCard from '../Card/BlueLectureCard';
import GreenLectureCard from '../Card/GreenLectureCard';

const LectureCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      centeredSlides={true}
      slidesPerView={1.5}
      loop={true}
      draggable={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
        type: 'fraction',
      }}
      initialSlide={1}
      className='custom-swiper h-fit w-full'
    >
      <SwiperSlide>
        <BlueLectureCard
          name='선생님 이름'
          title='강의 제목'
          location='합정 초록 연습실'
          time='2024년 11월 1일 19:30'
        />
      </SwiperSlide>
      <SwiperSlide>
        <GreenLectureCard
          name='선생님 이름'
          title='강의 제목'
          location='합정 초록 연습실'
          time='2024년 11월 1일 19:30'
        />
      </SwiperSlide>
      <SwiperSlide>
        <GreenLectureCard
          name='선생님 이름'
          title='강의 제목'
          location='합정 초록 연습실'
          time='2024년 11월 1일 19:30'
        />
      </SwiperSlide>
      <SwiperSlide>
        <GreenLectureCard
          name='선생님 이름'
          title='강의 제목'
          location='합정 초록 연습실'
          time='2024년 11월 1일 19:30'
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default LectureCarousel;
