import { css } from 'styled-components';
import TagRaw from './TagRaw';

type TagLargeProps = {
  content: string;
  isActive?: boolean;
};

function TagLarge({ content, isActive = false }: TagLargeProps) {
  return <TagRaw content={content} customStyle={TagLargeStyle(isActive)} />;
}

export default TagLarge;

const TagLargeStyle = (isActive: boolean) => css`
  color: blue;
  width: 62px;
  height: 27px;
  padding-top: 1px;
  background-color: ${({ theme }) => (isActive ? theme.black : theme.gray)};
  font-size: 14px;
  color: ${({ theme }) => (isActive ? theme.white : theme.black)};
`;
