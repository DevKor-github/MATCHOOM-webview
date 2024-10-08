import { ChangeEvent, useState } from 'react';
import SearchIcon from 'assets/icons/search.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='w-full h-44 relative'>
      <input
        value={value}
        onChange={handleChange}
        placeholder='맞춤 클래스를 찾아보세요!'
        className='w-full h-full rounded-10 bg-grey-7 p-12 text-16 font-500 placeholder:text-grey-6 pl-40 outline-none'
      />
      <div className='absolute left-12 top-1/2 -translate-y-1/2'>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
