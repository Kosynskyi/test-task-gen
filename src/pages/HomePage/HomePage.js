import Pagination from 'components/Pagination';
import { Wrapper, MainTitle, Subtitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <MainTitle>Our courses</MainTitle>
      <Subtitle>Choose one or more of them and improve your skills 😎</Subtitle>
      <Pagination />
    </Wrapper>
  );
};

export default HomePage;
