import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import VehicleList from './pages/VehicleList';
import { flexBox, positionCenter, responsive } from './styles/mixin';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/:id" element={<div>vehicles detail</div>} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  ${flexBox('column', 'flex-start')};
  ${responsive('desktop')} {
    ${positionCenter()};
    width: 390px;
    height: 750px;
    box-shadow: 0 0 8px ${({ theme }) => theme.gray};
  }
`;
