import type { NextPage } from 'next';
import styled from 'styled-components';
import Post from '@components/Compound/Post';
import Example from '@components/Example/Example';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    color: #ec0047;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <div className="item">test</div>
    </Container>
  );
};

export default Home;
