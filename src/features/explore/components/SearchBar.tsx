import { ChangeEvent, useState } from 'react';
import SearchIcon from 'assets/icons/search.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='relative h-44 w-full'>
      <input
        value={value}
        onChange={handleChange}
        placeholder='맞춤 클래스를 찾아보세요!'
        className='h-full w-full rounded-10 bg-grey-7 p-12 pl-40 text-16 font-500 outline-none placeholder:text-grey-6'
      />
      <div className='absolute left-12 top-1/2 -translate-y-1/2'>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
