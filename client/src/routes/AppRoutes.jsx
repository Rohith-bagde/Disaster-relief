import { Routes, Route } from 'react-router-dom'
import EmergencyForm from '../pages/EmergencyForm'
import MapPage from '../pages/MapPage'
import VolunteerPanel from '../pages/VolunteersPage'
import ProtectedRoute from './ProtectedRoute'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/emergency' element={<EmergencyForm />} />
      <Route path='/map' element={<MapPage />} />
      <Route path='/volunteers' element={<VolunteerPanel />} />
     <Route
  path='/dashboard'
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } />
  <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  )
}

export default AppRoutes