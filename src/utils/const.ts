import { CategoryValues } from '../types';

export const vehicleSegment = {
  SUV: 'SUV',
  E: '대형',
  D: '중형',
  C: '소형',
};

export const vehicleSegmentCategory: CategoryValues[] = [
  { id: 1, segment: '', content: '전체' },
  { id: 2, segment: 'SUV', content: 'SUV' },
  { id: 3, segment: 'E', content: '대형' },
  { id: 4, segment: 'D', content: '중형' },
  { id: 5, segment: 'C', content: '소형' },
];
