import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { flexBox } from '../styles/mixin';

type HeaderProps = {
  hasBackButton?: boolean;
  title: string;
};

function Header({ hasBackButton = false, title }: HeaderProps) {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <Container>
      <Edge onClick={handleClick} hasPointer>
        <FiArrowLeft />
      </Edge>

      {title}

      <Edge />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flexBox('row', 'space-between')}
  width: 100%;
  height: 60px;
  padding: 0 ${({ theme }) => theme.paddingHorizontal}};
  border-bottom: 1px solid ${({ theme }) => theme.black};
  font-size: 17px;
  font-weight: 600;
`;

const Edge = styled.div<{ hasPointer?: boolean }>`
  ${flexBox()};
  width: 24px;
  height: 24px;
  font-size: 24px;
  cursor: ${({ hasPointer }) => (hasPointer ? 'pointer' : 'auto')};

  > svg {
    transform: translateX(-4px);
  }
`;
