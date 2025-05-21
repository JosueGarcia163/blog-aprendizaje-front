export const validateUsername = (username) => {
  const regex = /^.{5,25}$/;
  
  return regex.test(username);
};

export const validateUsernameMessage = 'El username debe contener entre 5 y 25 caracteres (espacios permitidos)';
