import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { flexBox } from '../../styles/mixin';

function Error() {
  const { state }: { state: { status: number } } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(-2);

  return (
    <Container>
      <Header title="Error" />
      <Content>
        {state.status}
        <Button type="button" onClick={handleClick}>
          go back
        </Button>
      </Content>
    </Container>
  );
}

export default Error;

const Content = styled.div`
  ${flexBox('column')};
  width: 100%;
  height: calc(100% - 60px);
  font-size: 34px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5vh;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 5px;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.gray};
  }
`;
