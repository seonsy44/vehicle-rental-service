import React from 'react';

type ObjectProps = { [key: string]: unknown };

type SectionsValues = {
  title: unknown;
  data: ObjectProps[];
};

type SectionListProps = {
  sections: SectionsValues[];
  renderItem: (item: ObjectProps) => React.ReactNode;
  renderSectionHeader: (section: ObjectProps) => React.ReactNode;
};

function SectionList({ sections, renderItem, renderSectionHeader }: SectionListProps) {
  return (
    <>
      {sections.map((section) => (
        <>
          {renderSectionHeader(section)}
          {section.data.map((item) => renderItem(item))}
        </>
      ))}
    </>
  );
}

export default SectionList;
