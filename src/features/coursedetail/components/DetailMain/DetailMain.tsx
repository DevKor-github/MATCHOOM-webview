import HeartIcon from 'assets/icons/heart.svg';
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
      <div className='mb-20' style={{ aspectRatio: '352 / 200' }}>
        {/* <video className='mb-20 h-200 w-352 rounded-10' src={video} controls /> */}
        <iframe
          className='mb-20 h-full w-full rounded-8'
          src='https://www.youtube.com/embed/ZSgAdvigtJk?si=NseyOlnbQxq_iIdj'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
        <p className='mb-10 text-24 font-700 text-white'>{title}</p>
        <p className='mb-12 text-14 font-500 text-white '>{introduction}</p>

        <div className='flex flex-row items-center justify-start space-x-4'>
          {genres.map((genre, index) => (
            <div key={index} className='rounded-full border border-green'>
              <p className='px-12 py-4 text-12 font-600 text-green'>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between'>
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

        <div className='flex items-center justify-between space-x-24'>
          <div className='flex flex-col items-center'>
            <button className='focus:outline-none'>
              <HeartIcon />
            </button>
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

      <div className='mb-24 mt-24 border-b border-[#3C4048]'></div>
    </section>
  );
};

export default DetailMain;
