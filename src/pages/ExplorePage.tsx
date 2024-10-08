import { Card } from 'features/explore/components/Card';
import { MOCK_CARDS } from 'features/explore/mock/cards';

const ExplorePage = () => {
  const card = MOCK_CARDS[0];
  return (
    <div className='p-20'>
      <Card
        key={1} // TODO: id로 변경
        title={card.title}
        description={card.description}
        guide={card.guide}
        imageSrc={card.imageSrc}
      />
    </div>
  );
};

export default ExplorePage;
