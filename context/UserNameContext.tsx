import React, { createContext, useContext, useState } from 'react';

interface UserNameContextProviderProps {
  children: React.ReactNode;
}

const UserNameContext = createContext(null);

const UserNameContextProvider: React.FC<UserNameContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<String>('John Doe');
  return (
    <UserNameContext.Provider value={{ name, setName }}>
      {children}
    </UserNameContext.Provider>
  );
};

const useUserName = (): any => useContext(UserNameContext);

export { UserNameContextProvider, useUserName };
