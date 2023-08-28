import React from 'react';
import { useNavigate } from 'react-router-dom';
import userImage from '../../../assets/iuricode 1.svg';
import '../headerProfileCss/navbar.css';
import searchIcon from '../../../assets/MagnifyingGlass.svg';
import '../../../AppProfile.css';
import { signOut } from 'firebase/auth'; 
import { auth } from '../../../firebase';  

const Navbar: React.FC = () => {
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate('/');  
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className='navbar-content'>
          <div className="nav-group-left">
            <span className='img-nav logo-text' onClick={() => navigate('/')}>UOLkut</span>
            <span className="nav-link desktop-only">Início</span>
            <span className="nav-link desktop-only profile-link">Perfil</span>
            <span className="nav-link desktop-only">Comunidades</span>
            <span className="nav-link desktop-only">Jogos</span>
          </div>
          <div className="nav-group-right">
            <div className="search-bar-desktop-wrapper desktop-only">
              <img src={searchIcon} alt="Pesquisar" className="search-icon" />
              <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" />
            </div>
            <div className="user-profile">
              <img src={userImage} alt="Usuário" className="user-profile-img" />
              <span className="user-name desktop-only">Gabriel Barbosa</span>
              <i className="arrow-down desktop-only"></i>
            </div>
            <button onClick={handleLogout} className="logout-button desktop-only">Logout</button>
          </div>
        </div>
      </nav>
      <div className="search-bar-mobile-wrapper mobile-only">
        <img src={searchIcon} alt="Pesquisar" className="search-icon" />
        <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" />
      </div>
    </>
  );
};

export default Navbar;
