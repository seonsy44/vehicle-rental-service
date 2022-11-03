import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { positionCenter, responsive } from '../styles/mixin';

type ContainerProps = {
  children: React.ReactNode;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

function Container({ children, customStyle }: ContainerProps) {
  return <Wrapper customStyle={customStyle}>{children}</Wrapper>;
}

export default Container;

const Wrapper = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  ${({ customStyle }) => customStyle}

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  ${responsive('desktop')} {
    ${positionCenter()};
    width: 390px;
    height: 750px;
    box-shadow: 0 0 8px ${({ theme }) => theme.gray};
  }
`;
