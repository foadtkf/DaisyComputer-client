import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/Signup';
import Services from './Pages/Shared/Services/Services';
import Reviews from './Pages/Shared/Reviews';
import RequireAuth from './Pages/Login/RequireAuth';
import AddService from './Pages/Shared/AddService/AddService';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path="login" element={<Login />} />
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/inventory' element={<Services></Services>}/>
        <Route path='/reviews' element={<Reviews></Reviews>}/>
        <Route path='/addproducts' element={<RequireAuth><AddService></AddService></RequireAuth>}/>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
