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
        <p className='mb-12 mt-12 text-18 font-600 text-white'>강의 상세</p>
        <p className='text-16 font-700 text-white'>{title}</p>
        <p className='mb-12 text-16 font-400 text-white'>{introduction}</p>
        {/* <video className='h-200 w-352 rounded-10' src={video} controls /> */}
        <div style={{ aspectRatio: '352 / 200' }}>
          <iframe
            className='h-full w-full rounded-8'
            src='https://www.youtube.com/embed/ZSgAdvigtJk?si=NseyOlnbQxq_iIdj'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='mb-24 mt-24 border-b border-[#3C4048]'></div>
      <div>
        <p className='mb-12 text-18 font-600 text-white'>커리큘럼</p>
        <p className='text-16 font-400 text-white'>{curriculum}</p>
      </div>
      <div className='mb-24 mt-24 border-b border-[#3C4048]'></div>
    </section>
  );
};

export default LectureOverview;
