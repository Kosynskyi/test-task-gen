import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';

const NotFoundPage = () => {
  return (
    <>
      <p>
        Opps...something went wrong 🤷‍♀️, back to{' '}
        <Link to="/">
          <FcHome />
        </Link>
      </p>
    </>
  );
};

export default NotFoundPage;
