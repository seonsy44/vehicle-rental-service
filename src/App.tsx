import { Routes, Route, Navigate } from 'react-router-dom';
import VehicleDetail from './pages/VehicleDetail';
import VehicleList from './pages/VehicleList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vehicles" />} />
      <Route path="/vehicles" element={<VehicleList />} />
      <Route path="/vehicles/:id" element={<VehicleDetail />} />
    </Routes>
  );
}

export default App;
