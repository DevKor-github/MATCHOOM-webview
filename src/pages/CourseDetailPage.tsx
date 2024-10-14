import DetailMain from 'features/coursedetail/components/DetailMain';
import InstructorOverview from 'features/coursedetail/components/InstructorOverview';
import LectureOverview from 'features/coursedetail/components/LectureOverview';
import { MOCK_MAIN } from 'features/coursedetail/mock/details';
import { MOCK_COURSES } from 'features/coursedetail/mock/details';
import { MOCK_INSTRUCTORS } from 'features/coursedetail/mock/details';

const CourseDetailPage = () => {
  return (
    <div className='mx-auto max-w-500 flex-1 bg-background p-20 pt-0'>
      <DetailMain {...MOCK_MAIN} />
      <LectureOverview {...MOCK_COURSES} />
      <InstructorOverview {...MOCK_INSTRUCTORS} />
    </div>
  );
};

export default CourseDetailPage;
