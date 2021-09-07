import { TOKEN } from "../../constants";

export const setToken = data => {
  localStorage.setItem(TOKEN, data.token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
}