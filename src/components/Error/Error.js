import { Box } from 'utils/Box';
import { ErrorMessage } from './Error.styled';

const Error = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <ErrorMessage>
        Oooops...something went wrong 🙄, please try again
      </ErrorMessage>
    </Box>
  );
};

export default Error;
