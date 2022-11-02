import { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexBox } from '../../styles/mixin';
import { VehicleCategory } from '../../types';
import { vehicleCategory } from '../../utils/const';
import TagLarge from '../../components/TagLarge';

function Category() {
  const [activeTag, setActiveTag] = useState(vehicleCategory[0]);

  const handleClick = (tag: VehicleCategory) => () => {
    setActiveTag(tag);
  };

  return (
    <Container>
      {vehicleCategory.map((tag) => (
        <TagLarge
          key={tag.id}
          content={tag.content}
          isActive={activeTag.id === tag.id}
          onClick={handleClick(tag)}
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
