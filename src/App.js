import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Patients from './pages/Patients/Patients'
import CreatePatient from './pages/Patients/CreatePatient';
import CreateDoctor from './pages/Doctors/CreateDoctor';
import Doctors from './pages/Doctors/Doctors'
import ClinicInformationAdministration from './pages/Administration/ClinicInformationAdministration'
import PermissonsAdministration from './pages/Administration/PermissonsAdministration'
import UserInformationAdministration from './pages/Administration/UserInformationAdministration'
import UserListAdministration from './pages/Administration/UsersListAdministration'
import MyAccountIncoming from './pages/Incoming/MyAccountIncoming'
import ProfileIncoming from './pages/Incoming/ProfileIncoming'
import BalancePatientTreatment from './pages/Treatments/BalancePatientTreatment'
import DentalTreatments from './pages/Treatments/DentalTreatments'
import ReportsTreatments from './pages/Treatments/ReportsTreatments'

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
          <Route path='create' exact element={<CreateDoctor />} />
          <Route path='list' exact element={<Doctors />} />
        </Route>
        <Route path='treatments'>
          <Route path='balance-patient' exact element={<BalancePatientTreatment />} />
          <Route path='dental' exact element={<DentalTreatments />} />
          <Route path='reports' exact element={<ReportsTreatments />} />
        </Route>
        <Route path='incoming'>
          <Route path='my-account' exact element={<MyAccountIncoming />} />
          <Route path='profile' exact element={<ProfileIncoming />} />
        </Route>
        <Route path='administration'>
          <Route path='clinic-information' exact element={<ClinicInformationAdministration />} />
          <Route path='permissons' exact element={<PermissonsAdministration />} />
          <Route path='current-user-information' exact element={<UserInformationAdministration />} />
          <Route path='users-list' exact element={<UserListAdministration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
