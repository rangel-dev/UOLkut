import React, { useContext, useState } from 'react';
import { UserContext, formatKey } from '../footerProfile/userContext';
import '../footerProfileCss/editProfile.css';
import { useNavigate } from 'react-router-dom';

interface EditProfileFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  type?: string;
}

const EditProfileField: React.FC<EditProfileFieldProps> = ({ label, placeholder, value, onChange, options, type = 'text' }) => {
  return (
    <div>
      {label && <label>{label}:</label>}
      {options ? (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
};

const EditProfile: React.FC = () => {
  const { user, setUser, relacionamentoOptions } = useContext(UserContext);
  const [editedUser, setEditedUser] = useState(user);
  const navigate = useNavigate();

  const calculateAge = (birthday: string): string => {
    const dob = new Date(birthday);
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return String(Math.abs(age_dt.getUTCFullYear() - 1970));
  };

  const handleFieldChange = (key: string) => (value: string) => {
    if (key === 'Aniversário') {
      setEditedUser({
        ...editedUser,
        [key]: value,
        Idade: calculateAge(value),
      });
    } else {
      setEditedUser({
        ...editedUser,
        [key]: value,
      });
    }
  };

  const handleSaveClick = () => {
    setUser(editedUser);
    navigate('/App');
  };

  return (
    <div className="edit-profile-container">
      <h1>Editar Informações</h1>
      {Object.entries(editedUser).map(([key, value]) => {
        if (['Bebe', 'Fuma', 'Filhos', 'Sexo', 'Interesses_no_Orkut'].includes(key)) return null;
        switch (key) {
          case 'Relacionamento':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={relacionamentoOptions} />;
          case 'Aniversário':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} type="date" />;
          default:
            return <EditProfileField key={key} placeholder={formatKey(key)} value={value} onChange={handleFieldChange(key)} />;
        }
      })}
      <button onClick={handleSaveClick}>Salvar</button>
    </div>
  );
};

export default EditProfile;
