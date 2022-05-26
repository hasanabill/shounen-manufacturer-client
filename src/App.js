import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequiredAuth from './Components/Login/RequiredAuth';
import SignUp from './Components/Login/SignUp';
import Blogs from './Components/Pages/Blogs/Blogs';
import Shop from './Components/Pages/Shop/Shop';
import ToolDetails from './Components/Pages/Shop/ToolDetails';
import Header from './Components/Shared/Header';
import DashBoard from './Components/DashBoard/DashBoard';
import MyCart from './Components/DashBoard/MyCart';
import MyProfie from './Components/DashBoard/MyProfie';
import AddReview from './Components/DashBoard/AddReview';
import AddTools from './Components/DashBoard/AddTools';
import ManageOrders from './Components/DashBoard/ManageOrders';
import ManageTools from './Components/DashBoard/ManageTools';
import MakeAdmin from './Components/DashBoard/MakeAdmin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAdmin from './Components/Login/RequireAdmin';
import Footer from './Components/Shared/Footer';
import Payment from './Components/DashBoard/Payment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/purchase/:id' element={<RequiredAuth><ToolDetails></ToolDetails></RequiredAuth>} ></Route>
        {/* Nested Dashboard Route */}
        <Route path='/dashboard' element={<RequiredAuth><DashBoard></DashBoard></RequiredAuth>} >
          <Route index element={<MyProfie></MyProfie>}></Route>
          <Route path='cart' element={<MyCart></MyCart>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>} ></Route>
          <Route path='addtool' element={<RequireAdmin><AddTools></AddTools></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} ></Route>
          <Route path='managetools' element={<RequireAdmin><ManageTools></ManageTools></RequireAdmin>} ></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>} ></Route>
        </Route>
        <Route path='/' ></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
