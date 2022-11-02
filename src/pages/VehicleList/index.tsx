import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Category from './Category';
import Header from '../../components/Header';
import useGetVehicles from '../../hooks/useGetVehicles';
import VehicleItem from './VehicleItem';
import { flexBox } from '../../styles/mixin';

function VehicleList() {
  const { isLoading, vehicles, getVehicles } = useGetVehicles();
  const [searchParams, setSearchParams] = useSearchParams();

  const segment = useMemo(() => {
    switch (searchParams.get('segment')) {
      case 'SUV':
        return 'SUV';
      case 'E':
        return 'E';
      case 'D':
        return 'D';
      case 'C':
        return 'C';
      default:
        return '';
    }
  }, [searchParams]);

  useEffect(() => {
    getVehicles({ segment });
  }, [segment]);

  return (
    <>
      <Header title="전체차량" />
      <Category segment={segment} setSearchParams={setSearchParams} />

      {isLoading && <Notice>불러오는 중</Notice>}

      {!isLoading && vehicles?.map((vehicle) => <VehicleItem key={vehicle.id} vehicle={vehicle} />)}

      {!isLoading && !vehicles?.length && <Notice>차량이 없습니다.</Notice>}
    </>
  );
}

export default VehicleList;

const Notice = styled.div`
  ${flexBox()};
  flex-grow: 1;
  width: 100%;
  font-size: 17px;
  font-weight: 700;
`;
