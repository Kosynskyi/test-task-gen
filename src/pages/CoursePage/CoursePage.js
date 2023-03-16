import CourseDetails from 'components/CourseDetails';
import GoBack from 'components/GoBack';
import { Box } from 'utils/Box';

const CoursePage = () => {
  return (
    <Box px={7} py={10}>
      <GoBack />
      <CourseDetails />
    </Box>
  );
};

export default CoursePage;
