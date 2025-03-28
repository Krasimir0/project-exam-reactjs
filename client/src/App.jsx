import Header from './components/header/Header'
import Home from './components/header/home/Home'
import { Routes, Route } from 'react-router'
function App() {

  return (
    <>
    <Header />
    <Routes>
       <Route path='/' element={<Home />}/> 
    </Routes>
        
    </>
  )
}

export default App
