import React, { useState } from 'react';
import Style from "../MainLogin/index.module.css";

interface ResetPasswordProps {
  setFormView: React.Dispatch<React.SetStateAction<'login' | 'register' | 'forgotPassword' | 'resetPassword'>>;
  hideAccessMessage: () => void; 
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({ setFormView }) => {
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    if (newPassword === confirmPassword) {
      console.log("As senhas coincidem!");

    } else {
      console.log("As senhas não coincidem!");
    }
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Nova Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={Style.inputField}
          type="text"
          placeholder="Informe o código"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          className={Style.inputField}
          type="password"
          placeholder="Nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className={Style.inputField}
          type="password"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" style={{ width:350, height: 50, backgroundColor: '#ed6d25', color: 'white', padding: '10px', borderRadius: '8px', fontSize:'18px' }}>Salvar</button>
        <button style={{ marginTop: '20px',  color: '#ed6d25', fontSize: '18px' }}>Lembrou sua senha?</button><br></br>
        <button style={{ marginTop: '20px', color: '#ed6d25', fontSize: '18px', width:'350px', height:'50px', borderRadius:'8px' }}>Entrar com credenciais</button>
      </form>
      <p className={Style.link} onClick={() => setFormView('login')}>Lembrou a senha? Entra com as credenciais</p>
    </div>
  );
};
