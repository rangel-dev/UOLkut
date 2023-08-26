import React, { useState } from 'react';

interface UserDataType {
  Relacionamento: string;
  Aniversário: string;
  Idade: string;
  Quem_sou_eu: string;
  Localização: string;
  País: string;
  Cidade_natal: string;
  Músicas: string;
  Filmes: string;
}

const defaultUser: UserDataType = {
  Relacionamento: 'Solteiro',
  Aniversário: '21 de julho',
  Idade: '22 anos',
  Quem_sou_eu: 'Programador',
  Localização: 'Guarantã',
  País: 'Brasil',
  Cidade_natal: 'São Paulo',
  Músicas: 'Trap  Rap  Indie  Rock',
  Filmes: 'A rede social  Meu amigo Totoro  O castelo animado  Princesa Mononoke',
};

export interface UserContextType {
  user: UserDataType;
  setUser: React.Dispatch<React.SetStateAction<UserDataType>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  relacionamentoOptions: string[];
}

export const UserContext = React.createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
  isEditing: false,
  setIsEditing: () => {},
  relacionamentoOptions: [],
});

export const formatKey = (key: string): string => {
  return key.replace(/_/g, ' ');
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDataType>(defaultUser);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const relacionamentoOptions = ['Selecione', 'Solteiro', 'Casado', 'Viúvo', 'Separado', 'Nada a declarar'];

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isEditing,
        setIsEditing,
        relacionamentoOptions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
