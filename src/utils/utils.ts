import { VehicleBasic } from '../types';
import { day, vehicleFuelType, vehicleSegment } from './const';

export const parseDate = (date: Date) => {
  const newDate = new Date(date);
  return `${newDate.getMonth() + 1}월 ${newDate.getDate()}일 (${day[newDate.getDay()]})`;
};

export const getVehicleDetailSections = (vehicle: VehicleBasic) => [
  {
    title: '차량정보',
    data: [
      {
        item: '차종',
        content: vehicleSegment[vehicle.attribute.segment],
      },
      {
        item: '연료',
        content: vehicleFuelType[vehicle.attribute.fuelType],
      },
      {
        item: '이용 가능일',
        content: `${parseDate(vehicle.startDate)} 부터`,
      },
    ],
  },
  {
    title: '보험',
    data: vehicle.insurance.map((i) => ({
      item: i.name,
      content: i.description,
    })),
  },
  {
    title: '추가상품',
    data: vehicle.additionalProducts.map((p) => ({
      item: p.name,
      content: `월 ${p.amount.toLocaleString()} 원`,
    })),
  },
];

export const getSegment = (searchParams: URLSearchParams) => {
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
};
