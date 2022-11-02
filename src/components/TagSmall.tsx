import { css } from 'styled-components';
import TagRaw from './TagRaw';

type TagSmallProps = {
  content: string;
};

function TagSmall({ content }: TagSmallProps) {
  return <TagRaw content={content} customStyle={TagSmallStyle} />;
}

export default TagSmall;

const TagSmallStyle = css`
  color: blue;
  width: 52px;
  height: 22px;
  padding-top: 1px;
  background-color: ${({ theme }) => theme.blue};
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;
