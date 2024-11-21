import BlueArchiveIcon from 'assets/icons/archive/blue-archive.svg';

const BlueArchive = ({ title }: { title: string }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='flex w-80 items-center justify-center'>
        <BlueArchiveIcon />
      </div>
      <div className='font-white text-12 font-600'>{title}</div>
    </div>
  );
};

export default BlueArchive;
