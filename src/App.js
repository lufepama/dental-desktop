import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Patients from './pages/Patients/Patients'
import Appointments from './pages/Appointments/Appointments'
import CreatePatient from './pages/Patients/CreatePatient';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='patients'>
          <Route path='create' exact element={<CreatePatient />} />
          <Route path='list' exact element={<Patients />} />
          <Route />
        </Route>
        <Route path='doctors'>
          <Route path='create' exact element={<CreatePatient />} />

        </Route>
        <Route path='appointments' element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
