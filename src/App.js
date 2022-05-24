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
          <Route path='addreview' element={<AddReview></AddReview>} ></Route>
          <Route path='addtool' element={<AddTools></AddTools>}></Route>
          <Route path='manageorder' element={<ManageOrders></ManageOrders>} ></Route>
          <Route path='managetools' element={<ManageTools></ManageTools>} ></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>} ></Route>
        </Route>
        <Route path='/' ></Route>
      </Routes>
    </div>
  );
}

export default App;
