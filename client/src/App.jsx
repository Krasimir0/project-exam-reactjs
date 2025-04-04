import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateDevice from './components/create-device/CreateDevice'
import Catalog from './components/catalog-device/Catalog'
import Logout from './components/logout/Logout'
import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './components/guards/GuestGuard'
import UserProvider from './providers/UserProvider'
import DeviceDetails from './components/device-details/DeviceDetails'
import DeviceEdit from './components/device-edit/DeviceEdit'

function App() {

  return (
    <>
    <UserProvider>
    <Header />
    <Routes>
       <Route path='/' element={<Home />}/> 
       <Route path='/devices' element={<Catalog />} />
       <Route path='/details/:deviceId' element={<DeviceDetails />} />
       <Route element={<AuthGuard />}>
        <Route path='/devices/create' element={<CreateDevice />} />
        <Route path='/details/:deviceId/edit' element={<DeviceEdit />}/>
        <Route path='/logout' element={<Logout />} />
       </Route>
       <Route element={<GuestGuard />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
       </Route>       
    </Routes>
    </UserProvider> 
    </>
  )
}

export default App
