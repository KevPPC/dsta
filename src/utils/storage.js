const storagePrefix = "DLS_";

export const storage = {
  getUser: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}user`));
  },
  setUser: (user) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`));
  },
  setToken: (token) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
    window.dispatchEvent(new Event("storage"));
  },
  getRefreshToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}refresh_token`)
    );
  },
  setRefreshToken: (refreshToken) => {
    window.localStorage.setItem(
      `${storagePrefix}refresh_token`,
      JSON.stringify(refreshToken)
    );

    window.dispatchEvent(new Event("storage"));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
    window.localStorage.removeItem(`${storagePrefix}user`);
  },
  setSessionStorage: (token, value) => {
    window.sessionStorage.setItem(`${storagePrefix}_${token}`, value);
    window.dispatchEvent(new Event("storage"));
  },
  clearSessionStore: (token) => {
    window.sessionStorage.removeItem(`${storagePrefix}_${token}`);
  },
  getSessionStorage: (token) => {
    return window.sessionStorage.getItem(`${storagePrefix}_${token}`);
  },
  removeKey: (key) => {
    window.localStorage.removeItem(key);
  },
  getKey: (key) => {
    window.localStorage.getItem(key);
  },
  setData: (key, data) => {
    window.localStorage.setItem(`${storagePrefix}_${key}`, data);
  },
  getData: (key) => window.localStorage.getItem(`${storagePrefix}_${key}`),
  removeData: (key) =>
    window.localStorage.removeItem(`${storagePrefix}_${key}`),
};
