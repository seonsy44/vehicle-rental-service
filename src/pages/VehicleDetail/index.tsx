import { Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components';
import Container from '../../components/Container';
import Header from '../../components/Header';
import SectionList from '../../components/SectionList';
import { flexBox } from '../../styles/mixin';
import { VehicleBasic } from '../../types';
import { getVehicleDetailSections } from '../../utils/utils';
import SectionHeader from './SectionHeader';
import SectionItem from './SectionItem';

function VehicleDetail() {
  const { state }: { state: { vehicle: VehicleBasic } } = useLocation();
  const vehicle = state?.vehicle;

  if (!vehicle) return <Navigate to="/vehicles" />;

  const sections = getVehicleDetailSections(vehicle);
  const renderSectionHeader = (section: { title: string }) => <SectionHeader section={section} />;
  const renderSectionItem = (item: { item?: string; content: string }) => <SectionItem item={item} />;

  return (
    <>
      <Helmet>
        <title>
          {vehicle.attribute.brand} | {vehicle.attribute.name}
        </title>
        <meta property="og:title" content={`${vehicle.attribute.brand} | ${vehicle.attribute.name}`} />
        <meta property="og:description" content={`월 ${vehicle.amount.toLocaleString()} 원`} />
        <meta property="og:image" content={vehicle.attribute.imageUrl} />
      </Helmet>

      <Container customStyle={ContainerStyle}>
        <Header title="차량상세" hasBackButton />
        <Image alt={vehicle.attribute.name} src={vehicle.attribute.imageUrl} />
        <Title>
          <div>{vehicle.attribute.brand}</div>
          <div>{vehicle.attribute.name}</div>
        </Title>
        <SectionItem item={{ content: `월 ${vehicle.amount.toLocaleString()} 원` }} />
        <SectionList sections={sections} renderSectionHeader={renderSectionHeader} renderItem={renderSectionItem} />
      </Container>
    </>
  );
}

export default VehicleDetail;

const ContainerStyle = css`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 205px;
`;

const Title = styled.div`
  ${flexBox('column', 'center', 'flex-start')};
  width: 100%;
  height: 92px;
  padding: 0 ${({ theme }) => theme.paddingHorizontal};
  font-weight: 700;

  > div:first-child {
    font-size: 20px;
    line-height: 24px;
  }
  > div:last-child {
    font-size: 24px;
    line-height: 29px;
  }
`;
