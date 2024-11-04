import GreenArchiveIcon from 'assets/icons/archive/green-archive.svg';

const GreenArchive = ({ title }: { title: string }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex w-80 items-center justify-center'>
        <GreenArchiveIcon />
      </div>
      <div className='font-white text-12 font-600'>{title}</div>
    </div>
  );
};

export default GreenArchive;
