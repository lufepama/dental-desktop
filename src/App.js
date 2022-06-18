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
import { PatientsProvider } from './context/patients/PatientsContext'

function App() {

  return (
    <BrowserRouter>
      <PatientsProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='patients'>
            <Route path='create' element={<CreatePatient />} />
            <Route path='list' element={<Patients />} />
            <Route />
          </Route>
          <Route path='doctors'>
            <Route path='create' element={<CreateDoctor />} />
            <Route path='list' element={<Doctors />} />
          </Route>
          <Route path='treatments'>
            <Route path='balance-patient' element={<BalancePatientTreatment />} />
            <Route path='dental' element={<DentalTreatments />} />
            <Route path='reports' element={<ReportsTreatments />} />
          </Route>
          <Route path='incoming'>
            <Route path='my-account' element={<MyAccountIncoming />} />
            <Route path='profile' element={<ProfileIncoming />} />
          </Route>
          <Route path='administration'>
            <Route path='clinic-information' element={<ClinicInformationAdministration />} />
            <Route path='permissons' element={<PermissonsAdministration />} />
            <Route path='current-user-information' element={<UserInformationAdministration />} />
            <Route path='users-list' element={<UserListAdministration />} />
          </Route>
        </Routes>
      </PatientsProvider>
    </BrowserRouter>
  );
}

export default App;
