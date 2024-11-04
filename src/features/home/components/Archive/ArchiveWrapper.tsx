import BlueArchive from './BlueArchive';
import GreenArchive from './GreenArchive';

const TEXT = {
  archive: {
    title: '강의 아카이빙',
    default: {
      took: '수강한 강의',
      open: '오픈한 강의',
    },
    edit: '편집',
  },
};

const ArchiveSection = () => {
  return (
    <div className='w-full'>
      <div className='mb-12 flex w-full flex-row justify-between'>
        <div className='font-white text-20 font-700'>{TEXT.archive.title}</div>
        <div className='font-grey-4 text-16 font-500'>{TEXT.archive.edit}</div>
      </div>
      <div className='scrollbar-hide flex w-full overflow-x-auto'>
        <div className='space-x-5 flex flex-nowrap'>
          <BlueArchive title={TEXT.archive.default.took} />
          <GreenArchive title={TEXT.archive.default.open} />
          <BlueArchive title={TEXT.archive.default.took} />
          <GreenArchive title={TEXT.archive.default.open} />
          <BlueArchive title={TEXT.archive.default.took} />
          <GreenArchive title={TEXT.archive.default.open} />
          <BlueArchive title={TEXT.archive.default.took} />
          <GreenArchive title={TEXT.archive.default.open} />
          <BlueArchive title={TEXT.archive.default.took} />
          <GreenArchive title={TEXT.archive.default.open} />
        </div>
      </div>
    </div>
  );
};

export default ArchiveSection;
