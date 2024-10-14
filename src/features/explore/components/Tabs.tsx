import { ReactNode, useState } from 'react';

const TABS = ['전체보기', '팔로잉 댄서만 보기'] as const;
type TabType = (typeof TABS)[number];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('전체보기');
  return (
    <div className='flex h-20 w-full gap-[1rem]'>
      {TABS.map((name) => (
        <Tab
          selected={selectedTab === name}
          handleClick={() => setSelectedTab(name)}
        >
          {name}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;

interface TabProps {
  children: ReactNode;
  selected: boolean;
  handleClick: () => void;
}

const Tab = ({ children, selected, handleClick }: TabProps) => {
  return (
    <button
      onClick={handleClick}
      className={`text-14 font-600 ${selected ? 'text-green' : 'text-grey-6'}`}
    >
      {children}
      <div
        className={`mt-[2px] h-[1.5px] w-full rounded-full bg-green ${selected ? 'bg-green' : 'bg-transparent'}`}
      />
    </button>
  );
};
