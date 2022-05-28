import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/Signup';
import Services from './Pages/Shared/Services/Services';
import RequireAuth from './Pages/Login/RequireAuth';
import AddService from './Pages/Shared/AddService/AddService';
import 'react-toastify/dist/ReactToastify.css';
import AddReviews from './Pages/AddReviews/AddReviews';
import ManageTools from './ManageTools/ManageTools';
import Users from './Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Dashboard from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile';
import MyOrders from './Dashboard/MyOrders';
import NotFound from './Pages/Shared/Notfound/Notfound';
import Purchase from './Pages/Shared/Purchase';
import Blog from './Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import ManageOrders from './Dashboard/ManageOrders';
import { ToastContainer } from 'react-toastify';
import MyReview from './Dashboard/MyReview';
import Payment from './Pages/Shared/Payment';

function App() {
  return (
    <div className="App font-serif">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path="login" element={<Login />} />
        <Route path="blogs" element={<Blog />} />
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/inventory' element={<Services></Services>}/>
<Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='addreviews' element={<RequireAuth><AddReviews></AddReviews></RequireAuth>}/>
          <Route path='reviews' element={<RequireAuth><MyReview></MyReview></RequireAuth>}></Route>
          <Route path='myorders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addproducts" element={<RequireAdmin><AddService></AddService></RequireAdmin>}></Route>
          <Route path="managetools" element={<RequireAdmin><ManageTools></ManageTools></RequireAdmin>}></Route>
          <Route path="manageorders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    <Footer></Footer>
    <ToastContainer/>
    </div>
  );
}

export default App;
