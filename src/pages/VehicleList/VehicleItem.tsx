import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import TagSmall from '../../components/TagSmall';
import { flexBox } from '../../styles/mixin';
import { VehicleBasic } from '../../types';
import { vehicleSegment } from '../../utils/const';

type VehicleItemProps = {
  vehicle: VehicleBasic;
};

const MS_PER_DAY = 86400000;

function VehicleItem({ vehicle }: VehicleItemProps) {
  const navigate = useNavigate();

  const isWithinADay = (date: Date) => Date.now() - Date.parse(date.toString()) <= MS_PER_DAY;

  const handleClick = () => {
    navigate(`/vehicles/${vehicle.id}`, { state: { vehicle } });
  };

  return (
    <Container onClick={handleClick}>
      {isWithinADay(vehicle.createdAt) && <TagSmall content="신규" customStyle={TagSmallStyle} />}

      <Information>
        <TextBold>
          {vehicle.attribute.brand}
          <br />
          {vehicle.attribute.name}
        </TextBold>
        <TextRegular>
          {vehicleSegment[vehicle.attribute.segment]} / {vehicle.attribute.fuelType}
          <br />월 {vehicle.amount.toLocaleString()} 원 부터
        </TextRegular>
      </Information>
      <Image alt={vehicle.attribute.name} src={vehicle.attribute.imageUrl} />
    </Container>
  );
}

export default VehicleItem;

const Container = styled.div`
  position: relative;
  ${flexBox('row', 'space-between')};
  width: 100%;
  padding: 20px ${({ theme }) => theme.paddingHorizontal};
  border-bottom: 1px solid ${({ theme }) => theme.black};
  cursor: pointer;
`;

const TagSmallStyle = css`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Information = styled.div`
  ${flexBox('column', 'space-between', 'flex-start')};
  height: 72px;
`;

const TextBold = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

const TextRegular = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

const Image = styled.img`
  height: 80px;
`;
