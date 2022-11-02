import { useState } from 'react';
import { VehicleBasic, VehicleFuelType, VehicleSegment } from '../types';
import axiosInstance from '../utils/axiosInstance';

type GetVehicleValues = {
  fuelType?: VehicleFuelType;
  segment?: VehicleSegment | '';
};

type ResponseValues = {
  data: { payload: VehicleBasic[] };
  status: number;
};

function useGetVehicles() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<VehicleBasic[]>([]);

  //   const vehicles = useContext(VehiclesContext);

  const getVehicles = async (params?: GetVehicleValues) => {
    setIsLoading(true);

    const {
      data: { payload },
      status,
    }: ResponseValues = await axiosInstance.get('/cars', { params });

    if (status >= 200 && status < 300) {
      setVehicles(payload);
      setIsLoading(false);
    } else {
      console.log(status);
      setIsLoading(false);
    }
  };

  return { isLoading, vehicles, getVehicles };
}

export default useGetVehicles;
