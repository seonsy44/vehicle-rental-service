import { useState } from 'react';
import {} from 'react-router-dom';
import styled, { css } from 'styled-components';
import { flexBox } from '../../styles/mixin';
import { VehicleSegment } from '../../types';
import { vehicleSegmentCategory } from '../../utils/const';
import TagLarge from '../../components/TagLarge';

type CategoryProps = {
  setSearchParams: (nextInit?: Record<string, string | string[]>) => void;
  segment: VehicleSegment | '';
};

function Category({ setSearchParams, segment }: CategoryProps) {
  const [activeTag, setActiveTag] = useState(segment);

  const handleClick = (tag: VehicleSegment | '') => () => {
    setActiveTag(tag);
    if (!tag.length) {
      setSearchParams({});
      return;
    }
    setSearchParams({ segment: tag });
  };

  return (
    <Container>
      {vehicleSegmentCategory.map((tag) => (
        <TagLarge
          key={tag.id}
          content={tag.content}
          isActive={activeTag === tag.segment}
          onClick={handleClick(tag.segment)}
          customStyle={TagLargeStyle}
        />
      ))}
    </Container>
  );
}

export default Category;

const Container = styled.nav`
  ${flexBox('row', 'flex-start')};
  flex-wrap: nowrap;
  width: 100%;
  height: 40px;
  padding: 5px ${({ theme }) => theme.paddingHorizontal};
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagLargeStyle = css`
  flex: 0 0 auto;
  margin-right: 8px;
  cursor: pointer;
`;
