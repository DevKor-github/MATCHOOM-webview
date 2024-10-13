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
      <div className='mb-24 flex items-center space-x-16'>
        <img className='h-200 w-352' src={profileimg} />
        <div className='flex flex-col'>
          <p className='text-20 font-600'>{name}</p>
          <div>
            <p className='text-14 font-500 text-green'>강사 프로필 더보기</p>
          </div>
        </div>
      </div>
      <p className='mb-12 text-18 font-600'>소개글</p>
      <p className='mb-24 text-16 font-400'>{introduction}</p>
      <p className='mb-12 text-18 font-600'>이력 및 경력</p>
      <p className='mb-24 text-16 font-400'>{experience}</p>
    </section>
  );
};

export default InstructorOverview;
