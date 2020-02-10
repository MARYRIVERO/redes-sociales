import { createUser, newUser, userCurrent } from '../model/user-authentication.js';


export const registerFunction = (email, pass, name, msjError) => {
  const mensajeError = msjError;
  createUser(email, pass)
    .then(() => {
      const user = userCurrent();
      newUser(user.uid, user.email, name, user.photoURL)
        .then(() => {
          window.location.hash = '#/';
        })
        .catch(() => {
        });
      // eslint-disable-next-line no-console
      console.log('Me registre');
      // eslint-disable-next-line no-alert
      alert('Te has registrado con exito. Puedes logearte');
    })
    .catch((error) => {
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.code;

      switch (errorCode) {
        case 'auth/email-already-in-use':
          mensajeError.innerHTML = '*La dirección de correo ya existe';
          break;
        case 'auth/weak-password':
          mensajeError.innerHTML = '* La constraseña debe tener al menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '* El formato del correo ingresado no es váido';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }
    });
};
