
import './App'


import {  Route, Routes } from "react-router-dom"

import { UserProvider } from '../Components/Profile/footerProfile/userContext';
import { MainLogin } from "../Components/Login/MainLogin/MainLogin"
import { Login } from '../Components/Login/MainLogin/Login';
import EditProfileLayout from '../Components/Profile/footerProfile/editProfileLayout'


import Layout from '../Components/Profile/footerProfile/layout'


export const App = () =>{
  
  
  return (
    <>
      <UserProvider>
        <Routes>
                <Route path="/" element={<MainLogin />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/App" element={<Layout />}/>
                <Route path="/edit" element={<EditProfileLayout />} />
        </Routes>
      </UserProvider>
      
    </>
    
  )
}
