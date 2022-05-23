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
        <Route path='/' ></Route>
      </Routes>
    </div>
  );
}

export default App;
