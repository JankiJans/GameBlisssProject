import MainLayout from "./components/layout/MainLayout/MainLayout";
// import Login from "./components/pages/login/loginPage";
import Register from "./components/pages/register/RegisterPage";
import HomePage from "./components/pages/home/HomePage";

import { Routes, Route } from "react-router-dom";

import { logIn } from "./redux/usersRedux";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from "react";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      dispatch(logIn({ login: loggedInUser }));
    }
  }, [dispatch]);

  return (
    <MainLayout>
      <Routes >
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
