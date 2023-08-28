import { Route, Routes } from "react-router-dom";
import { UserProvider } from '../Components/Profile/footerProfile/userContext';
import { MainLogin } from "../Components/Login/MainLogin/MainLogin";
import EditProfileLayout from '../Components/Profile/footerProfile/editProfileLayout';
import Layout from '../Components/Profile/footerProfile/layout';

export const App = () => {
  return (
    <div style={{ fontFamily: 'Roboto Flex, sans-serif' }}> {/* Adicione o estilo aqui */}
      <UserProvider>
        <Routes>
          <Route path="/" element={<MainLogin />} />
          <Route path="/App/*" element={<Layout />} />
          <Route path="/edit" element={<EditProfileLayout />} />
        </Routes>
      </UserProvider>
    </div>
  );
}
