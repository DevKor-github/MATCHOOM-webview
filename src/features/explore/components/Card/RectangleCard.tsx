import { CardType } from '.';

type Props = Omit<CardType, 'guide'>;

const RectangleCard = ({ title, description, imageSrc }: Props) => {
  return (
    <button className='relative w-[28.2rem] h-140 overflow-hidden rounded-10 shrink-0'>
      <img
        src={imageSrc}
        alt='클래스 대표 사진'
        className='w-full h-full object-cover'
      />
      <div className='absolute right-12 bottom-12 flex flex-col gap-4 text-right w-[25.8rem]'>
        <span className='text-16 font-500 leading-[2.2rem]'>{title}</span>
        <span className='text-14 font-500 line-clamp-2 text-grey-4 leading-[2rem]'>
          {description}
        </span>
      </div>
    </button>
  );
};

export default RectangleCard;
