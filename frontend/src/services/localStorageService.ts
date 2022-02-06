import { User } from '../models/User'

export const saveTokenInLocalStorage = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token ? token : null;
};

export const saveUserInLocalStorage = (user: User): void => {
    localStorage.setItem('thisUser', JSON.stringify(user))
}

export const getUserFromLocalStorage = (): User | null=> {
    const user = localStorage.getItem('thisUser')
    return user ? JSON.parse(user) : null
}