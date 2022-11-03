import { Routes, Route } from 'react-router-dom';
import VehicleDetail from './pages/VehicleDetail';
import VehicleList from './pages/VehicleList';

function App() {
  return (
    <Routes>
      <Route path="/vehicles" element={<VehicleList />} />
      <Route path="/vehicles/:id" element={<VehicleDetail />} />
    </Routes>
  );
}

export default App;
