import { CardType } from '.';

type Props = Omit<CardType, 'description'>;

const SquareCard = ({ title, guide, imageSrc }: Props) => {
  return (
    <button className='relative w-[17rem] h-[17rem] overflow-hidden rounded-10 shrink-0'>
      <img
        src={imageSrc}
        alt='클래스 대표 사진'
        className='w-full h-full object-cover'
      />
      <div className='absolute right-12 bottom-12 flex flex-col gap-4 text-right w-[14.6rem]'>
        <span className='text-12 font-600 text-green'>{guide}</span>
        <span className='text-16 font-500 leading-[2.2rem] line-clamp-2'>
          {title}
        </span>
      </div>
    </button>
  );
};

export default SquareCard;
