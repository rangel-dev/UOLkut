import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Style from "../MainLogin/index.module.css";
import { collection, addDoc } from "firebase/firestore";

interface User {
  email: string;
  password: string;
  birth: string;
  profession: string;
  country: string;
  city: string;
  relationship: string;
}

interface RegisterProps {
  setFormView: React.Dispatch<React.SetStateAction<'login' | 'register' | 'forgotPassword'| 'resetPassword'>>;
}

export const Register: React.FC<RegisterProps> = ({ setFormView }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    birth: '',
    profession: '',
    country: '',
    city: '',
    relationship: ''
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      await addDoc(collection(db, 'users'), {
        uid: userCredential.user?.uid,
        birth: user.birth,
        profession: user.profession,
        country: user.country,
        city: user.city,
        relationship: user.relationship
      });
      setSuccessMessage("Conta criada com sucesso!");
      setErrorMessage(null);
      navigate("/");
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao criar a conta. Por favor, tente novamente.");
      setSuccessMessage(null);
    }
  };

  const goToLogin = () => {
    setFormView('login');
  };

  return (
    <>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className={Style.mail}>
        <input type="text" name="email" placeholder="E-mail" value={user.email} onChange={handleChange} className={Style.mail} />
        <input type="password" name="password" placeholder="Senha" value={user.password} onChange={handleChange} className={Style.senha} />
      </div>
      <div className={Style.row}>
        <input type="text" name="birth" placeholder="Nascimento" value={user.birth} onChange={handleChange} />
        <input type="text" name="profession" placeholder="Profissão" value={user.profession} onChange={handleChange} />
      </div>
      <div className={Style.row}>
        <input type="text" name="country" placeholder="País" value={user.country} onChange={handleChange} />
        <input type="text" name="city" placeholder="Cidade" value={user.city} onChange={handleChange} />
      </div>
      <input type="text" name="relationship" placeholder="Relacionamento" value={user.relationship} onChange={handleChange} />
      <button type="button" onClick={registerUser} className={Style.buttonFirstChild}>Criar uma conta</button>
      <button type="button" onClick={goToLogin} className={Style.someButtonClass}>Já tem uma conta? Acesse aqui</button>
    </>
  );
};
