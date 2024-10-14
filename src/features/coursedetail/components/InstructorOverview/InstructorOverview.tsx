import { InstructorOverviewType } from '.';

const InstructorOverview = ({
  profileimg,
  name,
  introduction,
  experience,
}: InstructorOverviewType) => {
  return (
    <section className='mb-12 text-18 font-700 text-green'>
      강사 소개
      <div className='mb-24 mt-12 flex items-center space-x-16 text-white'>
        <img className='h-48 w-48 rounded-full' src={profileimg} />
        <div className='flex flex-col'>
          <p className='text-20 font-600 text-white'>{name}</p>
          <button className='focus:outline-none'>
            <p className='text-14 font-500 text-green'>강사 프로필 더보기</p>
          </button>
        </div>
      </div>
      <p className='mb-12 text-18 font-600 text-white '>소개글</p>
      <p className='mb-24 text-16 font-400 text-white'>{introduction}</p>
      <p className='mb-12 text-18 font-600 text-white'>이력 및 경력</p>
      <p className='mb-24 text-16 font-400 text-white'>{experience}</p>
    </section>
  );
};

export default InstructorOverview;
