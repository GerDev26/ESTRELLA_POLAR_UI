import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router'
import { Product } from './pages/Product'
import { Category } from './pages/Category'
import { OrderSummary } from './pages/OrderSummary'
export default function App(){
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos/:id' element={<Product/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/order' element={<OrderSummary/>}/>
    </Routes>
    </>
  )
}
