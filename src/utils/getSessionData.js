export const getSessionData = (key) => {
  const data = sessionStorage.getItem(key);
  if (data) {
    return data;
  } else {
    return undefined;
  }
};
