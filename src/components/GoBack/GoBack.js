import { useLocation } from 'react-router-dom';
import { GoBackLink, GoBackText, Wrapper, ArrowBack } from './GoBack.styled';

const GoBack = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Wrapper>
      <GoBackLink aria-label="go back" to={backLinkHref}>
        <ArrowBack size="24px" color="black" /> <GoBackText>go back</GoBackText>
      </GoBackLink>
    </Wrapper>
  );
};

export default GoBack;
