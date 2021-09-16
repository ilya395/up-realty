import { TOKEN } from "../../constants";

export const setToken = data => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN, data.token);
  }
};

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN);
  }
  return null;
}

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN);
  }
}