import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/vehicles" element={<div>vehicles</div>} />
      <Route path="/vehicles/:id" element={<div>vehicles detail</div>} />
    </Routes>
  );
}

export default App;
