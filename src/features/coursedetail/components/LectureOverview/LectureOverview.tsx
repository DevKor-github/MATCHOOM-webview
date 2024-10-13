import { LectureOverviewType } from '.';

const LectureOverview = ({
  title,
  introduction,
  // video,
  curriculum,
}: LectureOverviewType) => {
  return (
    <section className='mb-12 text-18 font-700 text-green'>
      클래스 소개
      <div>
        <p className='mb-12 text-18 font-600'>강의 상세</p>
        <p className='text-16 font-700'>{title}</p>
        <p className='mb-12 text-16 font-400'>{introduction}</p>
        {/* <video className='h-200 w-352 rounded-10' src={video} controls /> */}
        <iframe
          width='352'
          height='200'
          src='https://www.youtube.com/embed/ZSgAdvigtJk?si=NseyOlnbQxq_iIdj'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <div className='mb-24 mt-24 border-b border-[#3C4048]'></div>
      <div>
        <p className='mb-12 text-18 font-600'>커리큘럼</p>
        <p className='text-16 font-400'>{curriculum}</p>
      </div>
      <div className='mb-24 mt-24 border-b border-[#3C4048]'></div>
    </section>
  );
};

export default LectureOverview;
