import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router'
import { Product } from './pages/Product'
export default function App(){
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos/:id' element={<Product/>}/>
    </Routes>
    </>
  )
}
