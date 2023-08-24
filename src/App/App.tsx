import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../Components/Profile/footerProfile/userContext';
import { MainLogin } from "../Components/Login/MainLogin/MainLogin";
import { Login } from '../Components/Login/MainLogin/Login';
import { Register } from '../Components/Login/MainLogin/Register';
import EditProfileLayout from '../Components/Profile/footerProfile/editProfileLayout';
import Layout from '../Components/Profile/footerProfile/layout';

export const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<MainLogin />} />
          <Route path="/login" element={isRegistering ? <Register /> : <Login setIsRegistering={setIsRegistering} />} />
          <Route path="/App" element={<Layout />} />
          <Route path="/edit" element={<EditProfileLayout />} />
        </Routes>
      </UserProvider>
    </>
  )
}
