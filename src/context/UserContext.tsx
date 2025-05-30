import React, { createContext, useContext, useState } from 'react';
import { UserFormData } from '../types';

interface UserContextType {
  userData: UserFormData;
  updateUserData: (data: Partial<UserFormData>) => void;
  resetUserData: () => void;
}

const defaultUserData: UserFormData = {
  idType: 'National ID',
  phoneNumber: '',
  idNumber: '',
  passcode: '',
  password: '',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserFormData>(defaultUserData);

  const updateUserData = (data: Partial<UserFormData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const resetUserData = () => {
    setUserData(defaultUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, resetUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};