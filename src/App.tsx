import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import VehicleDetail from './pages/VehicleDetail';
import VehicleList from './pages/VehicleList';

function App() {
  return (
    <>
      <Helmet>
        <title>Vehicle Rental</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Navigate to="/vehicles" />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/:id" element={<VehicleDetail />} />
      </Routes>
    </>
  );
}

export default App;
