type SectionsValues = {
  title: string;
  data: { [key: string]: unknown }[];
};

type SectionListProps = {
  sections: SectionsValues[];
  renderSectionHeader: (section: any) => JSX.Element;
  renderItem: (item: any) => JSX.Element;
};

function SectionList({ sections, renderSectionHeader, renderItem }: SectionListProps) {
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
