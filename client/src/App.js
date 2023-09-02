import MainLayout from "./components/layout/MainLayout/MainLayout";
// import Login from "./components/pages/login/loginPage";
import Register from "./components/pages/register/RegisterPage";
import HomePage from "./components/pages/home/HomePage";
import SeeMore from "./components/pages/singleGamePage/SingleGamePage";
import Login from "./components/pages/login/loginPage";
import Cart from "./components/pages/cart/Cart";
import Orders from "./components/pages/orders/Orders";
import LogoutPage from "./components/features/logout/Logout";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/notFound/NotFound";

import { logIn } from "./redux/usersRedux";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCart } from "./redux/cartRedux";

function App() {
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem('cart')) || 0,
  );

  const dispatch = useDispatch()

  useEffect(() => {
    if (cartData.length > 0) {
      cartData.map((i) => {
        dispatch(addCart(i));
      });
    }
  }, [cartData]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loggedInUserId = localStorage.getItem('loggedInUserId');
  
    if (loggedInUser && loggedInUserId) {
      dispatch(logIn({ email: loggedInUser, id: loggedInUserId }));
    }
  }, [dispatch]);

  return (
    <MainLayout>
      <Routes >
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<SeeMore/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/logout" element={<LogoutPage/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </MainLayout>
  );
}

export default App;
