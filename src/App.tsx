import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import VehicleDetail from './pages/VehicleDetail';
import VehicleList from './pages/VehicleList';
import Error from './pages/Error';

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
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
