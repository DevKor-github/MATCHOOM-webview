import HeartIcon from 'assets/icons/heart.png';
import LocationIcon from 'assets/icons/location.svg';
import ShareIcon from 'assets/icons/share.svg';
import TimeIcon from 'assets/icons/time.svg';
import { DetailMainType } from '.';

const DetailMain = ({
  // video,
  title,
  introduction,
  location,
  duration,
  genres,
}: DetailMainType) => {
  return (
    <section>
      <div className='mb-36 h-380 w-full bg-[#3C4048]' />

      <div className='mb-40 ml-20 mr-20'>
        <p className='mb-12 break-normal text-24 font-700 leading-tight'>
          {title}
        </p>
        <div className='mb-20 flex flex-row items-center justify-start space-x-4'>
          {genres.map((genre, index) => (
            <div key={index} className='rounded-full border border-green'>
              <p className='px-12 py-4 text-12 font-600 text-green'>{genre}</p>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-between'>
          <div className=''>
            <img src='assets/icons/logo.svg' />
            <span className='text-16 font-500'>Middle Level</span>
          </div>
          <div className='flex items-center justify-between space-x-24'>
            <div className='flex flex-col items-center'>
              {/* <button className='focus:outline-none'>
                <HeartIcon />
              </button> */}
              <div>
                <button>
                  <img src='assets/icons/heart.png' />
                </button>
              </div>
              <span>123</span>
            </div>
            <div className='flex flex-col items-center'>
              <button className='focus:outline-none'>
                <ShareIcon />
              </button>
              <span>공유</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='mb-4 flex items-center space-x-8'>
            <LocationIcon />
            <span className='text-14 font-500'>{location}</span>
          </div>
          <div className='flex items-center space-x-8'>
            <TimeIcon />
            <span className='text-14 font-500'>{duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMain;
