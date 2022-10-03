import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { APILogin, APILogout } from '../api/api';
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const login = async (inputs) => {
    console.log(inputs);
    const res = await APILogin(inputs);
    console.log(res);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await APILogout();
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};
