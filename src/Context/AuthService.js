export const setUserData = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'));
};