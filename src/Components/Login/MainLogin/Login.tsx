import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import Style from "../MainLogin/index.module.css";

interface LoginProps {
  setIsRegistering: (value: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ setIsRegistering }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const authenticate = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/App");
    } catch (error) {
      setErrorMessage("E-mail ou senha inválidos. Por favor, tente novamente.");
      console.error('Ocorreu um erro na autenticação:', error);
    }
  };

  return (
    <>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
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
