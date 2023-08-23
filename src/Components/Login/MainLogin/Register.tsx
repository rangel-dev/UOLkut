import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Style from "../MainLogin/index.module.css";

interface User {
  email: string;
  password: string;
  birth: string;
  profession: string;
  country: string;
  city: string;
  relationship: string;
}

export const Register: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', user);
      navigate("/");
    } catch (error) {
      console.error('Ocorreu um erro ao criar o usuário:', error);
    }
  };

  return (
    <>
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
      <button onClick={registerUser} className={Style.buttonFirstChild}>Criar uma conta</button>
    </>
  );
};
