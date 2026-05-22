import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'

import Dashboard from './pages/Dashboard'

import EmergencyPage from './pages/EmergencyPage'

import VolunteersPage from './pages/VolunteersPage'

import MapPage from './pages/MapPage'

function App() {

  // AUTH CHECK
  const isLoggedIn =
    localStorage.getItem('token') === 'logged_in'

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path='/'
          element={
            isLoggedIn

              ? <Navigate to='/dashboard' />

              : <Login />
          }
        />

        {/* REGISTER */}
        <Route
          path='/register'
          element={<Register />}
        />

        {/* DASHBOARD */}
        <Route
          path='/dashboard'
          element={
            isLoggedIn

              ? <Dashboard />

              : <Navigate to='/' />
          }
        />

        {/* EMERGENCIES */}
        <Route
          path='/emergencies'
          element={
            isLoggedIn

              ? <EmergencyPage />

              : <Navigate to='/' />
          }
        />

        {/* VOLUNTEERS */}
        <Route
          path='/volunteers'
          element={
            isLoggedIn

              ? <VolunteersPage />

              : <Navigate to='/' />
          }
        />

        {/* MAP */}
        <Route
          path='/map'
          element={
            isLoggedIn

              ? <MapPage />

              : <Navigate to='/' />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App