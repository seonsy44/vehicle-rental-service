import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { flexBox } from '../styles/mixin';

type TagRawProps = {
  content: string;
  customStyle: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: () => void;
};

function TagRaw({ content, customStyle, onClick }: TagRawProps) {
  return (
    <Container customStyle={customStyle} onClick={onClick}>
      {content}
    </Container>
  );
}

export default TagRaw;

const Container = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> }>`
  ${flexBox()};
  border-radius: 50px;
  font-weight: 700;
  ${({ customStyle }) => customStyle};
`;
