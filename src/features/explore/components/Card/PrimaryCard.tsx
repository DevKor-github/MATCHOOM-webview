import { CardType } from '.';

const PrimaryCard = ({ title, description, guide, imageSrc }: CardType) => {
  return (
    <button className='w-full h-84 flex gap-12 shrink-0'>
      <div className='w-84 h-84 shrink-0'>
        <img
          src={imageSrc}
          alt='클래스 대표 사진'
          className='w-full h-full rounded-10 object-cover'
        />
      </div>
      <div className='flex flex-col gap-4 w-full h-full text-left justify-between'>
        <span className='text-green text-12 font-600 h-[1.4rem]'>{guide}</span>
        <span className='text-16 font-500 leading-[2.2rem] h-[2.2rem]'>
          {title}
        </span>
        <span className='text-grey-4 text-14 font-400 line-clamp-2 work leading-[2rem] h-40'>
          {description}
        </span>
      </div>
    </button>
  );
};

export default PrimaryCard;
