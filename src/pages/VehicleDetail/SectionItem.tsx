import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';

type SectionItemProps = {
  item: {
    item?: string;
    content: string;
  };
};

function SectionItem({ item: { item = '', content } }: SectionItemProps) {
  return (
    <Container>
      <span>{item}</span>
      <span>{content}</span>
    </Container>
  );
}

export default SectionItem;

const Container = styled.div`
  ${flexBox('row', 'space-between')}
  width: 100%;
  height: 48px;
  padding: 0 ${({ theme }) => theme.paddingHorizontal};
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  border: 2px solid red;

  > span:last-child {
    font-weight: 400;
  }
`;
