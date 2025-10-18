import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './contexts/CartContext'
import PizzasProvider from './contexts/PizzasContext'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <PizzasProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/* A esta rutas sólo se puede ir si uno está logueado */}
              <Route path='/profile' element={token ? <Profile /> : <Login />} />

              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />

              {/* A estas rutas sólo se puede ir si uno NO está logeado */}
              <Route path='/login' element={!token ? <Login /> : <Home />} />
              <Route path='/register' element={!token ? <Register /> : <Home />} />

              <Route path='/pizza/:id' element={<Pizza />} />
              <Route path='404' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </PizzasProvider>
    </>
  )
}

export default App