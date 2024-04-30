import Header from './Components/Header'
import Home from './Pages/Home'
import Collection from './Pages/Collections'
import MenCollections from './Pages/MenCollections'
import WomenCollections from './Pages/WomenCollections'
import Sale from './Pages/Sale'
import About from './Pages/About'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Account from './Pages/Account'
import Login from './Pages/Login'
import Footer from './Components/Footer'
import Signup from './Pages/Signup'
import AdminPage from './Pages/adminPages/AdminPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/collections' element={<Collection/>}></Route>
        <Route path='/men-collections' element={<MenCollections/>}></Route>
        <Route path='/women-collections' element={<WomenCollections/>}></Route>
        <Route path='/sale' element={<Sale/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route exact path='/admin' element= {<AdminPage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
