import { RotatingLines } from 'react-loader-spinner';
import { Box } from 'utils/Box';

const Skeleton = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <RotatingLines strokeColor="#57b846" strokeWidth="4" />
    </Box>
  );
};

export default Skeleton;
