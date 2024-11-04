import { LectureCardProps } from 'features/home/types/card';
import ClockIcon from 'assets/icons/clock.svg';
import LocationIcon from 'assets/icons/location.svg';
import VerifiedIcon from 'assets/icons/verified-check.svg';
import GreenCardImage from 'assets/images/card/green-card.svg';

const TEXT = {
  role: {
    student: 'Student',
    creator: 'Creator',
  },
};

const GreenLectureCard = ({
  name,
  title,
  location,
  time,
}: LectureCardProps) => {
  return (
    <div className='relative h-340 w-288'>
      <div className='absolute h-340 w-288'>
        <GreenCardImage />
      </div>
      <div className='absolute h-full w-full p-20'>
        <div className='absolute flex w-full flex-row items-center justify-between'>
          <div className='text-14 font-500 text-green'>{TEXT.role.student}</div>
          <div className='h-20 w-96'>timer</div>
        </div>
        <div className='absolute bottom-24 flex h-fit w-240 flex-col justify-start'>
          <div className='mb-8 flex flex-row items-center text-14 font-500 text-white'>
            {name}
            <div className='ml-4 h-16 w-16'>
              <VerifiedIcon />
            </div>
          </div>
          <div className='mb-8 text-20 font-500 text-white'>{title}</div>
          <div className='flex flex-row items-center text-14 font-500 text-white'>
            <div className='mr-8 w-12'>
              <LocationIcon />
            </div>
            {location}
          </div>
          <div className='flex flex-row items-center text-14 font-500 text-white'>
            <div className='mr-8 w-12'>
              <ClockIcon />
            </div>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenLectureCard;
