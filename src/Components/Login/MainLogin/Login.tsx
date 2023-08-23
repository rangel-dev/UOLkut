import React, { useState } from 'react';
import axios from 'axios';
import Style from "../MainLogin/index.module.css";
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  setIsRegistering: (value: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ setIsRegistering }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
  
      if (response.data.authenticated) {
        navigate("/App");
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Ocorreu um erro na autenticação:', error);
    }
  };

  return (
    <>
      <label htmlFor="email"></label>
      <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password"></label>
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className={Style.passwordCheck}>
          <input type="checkbox" name="remember-password" className={Style.inputCheckbox} />
          <label className={Style.spanCheck} htmlFor="remember-password">Lembrar minha senha</label>
      </div>
      <button onClick={authenticate} className={Style.buttonFirstChild}>Entrar na conta</button>
      <button onClick={() => setIsRegistering(true)} className={Style.buttonSecondChild}>Criar uma conta</button>
      <a className={Style.passwordForgot}>Esqueci a minha senha</a>
    </>
  );
};
