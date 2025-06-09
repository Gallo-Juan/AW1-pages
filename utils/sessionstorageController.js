// sessionStorageController.js

export const setSessionItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionItem = (key) => {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeSessionItem = (key) => {
  sessionStorage.removeItem(key);
};

export const clearSession = () => {
  sessionStorage.clear();
};
