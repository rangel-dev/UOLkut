import React, { useState } from 'react';
import './index.module.css';

interface ForgotPasswordProps {
  setFormView: React.Dispatch<React.SetStateAction<'login' | 'register' | 'forgotPassword'| 'resetPassword'>>;
  hideAccessMessage: () => void; 
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setFormView, hideAccessMessage }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Um e-mail de recuperação foi enviado para ${email}`);
    hideAccessMessage();
    setFormView('resetPassword');
  };

  const goToLogin = () => {
    setFormView('login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <h2 style={{ color: '#ed6d25', marginBottom: '30px' }}>Recupere sua Senha</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email"></label>
            <input
            placeholder='E-mail cadastrado'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            />
          </div>
          <button type="submit" style={{ width:350, height: 50, backgroundColor: '#ed6d25', color: 'white', padding: '10px', borderRadius: '8px', fontSize:'18px' }}>Enviar código</button>
        </form>
        
        {message && <p>{message}</p>}
        
        <button onClick={goToLogin} style={{ marginTop: '30px',  color: '#ed6d25', fontSize: '18px' }}>Lembrou sua senha?</button><br></br>
        <button onClick={goToLogin} style={{ marginTop: '30px', color: '#ed6d25', fontSize: '18px', width:'350px', height:'50px', borderRadius:'8px' }}>Entrar com credenciais</button>

        
        {/* Frases adicionadas */}
        <div style={{ marginTop: '20px' }}>
          <p>Lembrou sua senha?</p>
          <p>Entrar com as credenciais</p>
        </div>
        {/* Fim das frases adicionadas */}
      </div>
    </div>
  );
};

export default ForgotPassword;
