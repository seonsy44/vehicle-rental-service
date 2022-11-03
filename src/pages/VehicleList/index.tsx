import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Category from './Category';
import Header from '../../components/Header';
import useGetVehicles from '../../hooks/useGetVehicles';
import VehicleItem from './VehicleItem';
import { flexBox } from '../../styles/mixin';
import { getSegment } from '../../utils/utils';
import Container from '../../components/Container';

function VehicleList() {
  const { isLoading, vehicles, getVehicles } = useGetVehicles();
  const [searchParams, setSearchParams] = useSearchParams();

  const segment = useMemo(() => getSegment(searchParams), [searchParams]);

  useEffect(() => {
    getVehicles({ segment });
  }, [segment]);

  return (
    <Container customStyle={ContainerStyle}>
      <Header title="전체차량" />
      <Category segment={segment} setSearchParams={setSearchParams} />

      {isLoading && <Notice>불러오는 중</Notice>}

      {!isLoading && vehicles?.map((vehicle) => <VehicleItem key={vehicle.id} vehicle={vehicle} />)}

      {!isLoading && !vehicles?.length && <Notice>차량이 없습니다.</Notice>}
    </Container>
  );
}

export default VehicleList;

const ContainerStyle = css`
  height: 100vh;
  padding-bottom: ${({ theme }) => theme.paddingVertical};
`;

const Notice = styled.div`
  ${flexBox()};
  width: 100%;
  height: calc(100% - 100px);
  font-size: 17px;
  font-weight: 700;
`;
