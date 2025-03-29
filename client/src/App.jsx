import { Routes, Route } from 'react-router'

import Catalog from './components/catalog/Catalog'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateDevice from './components/create-device/CreateDevice'

function App() {

  return (
    <>
    <Header />
    <Routes>
       <Route path='/' element={<Home />}/> 
       <Route path='/devices' element={<Catalog />} />
       <Route path='/devices/create' element={<CreateDevice />} />
       <Route path='/login' element={<Login />} />
       <Route path='/register' element={<Register />} />       
    </Routes>
        
    </>
  )
}

export default App
