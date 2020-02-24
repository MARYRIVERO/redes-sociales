import {
  signInUser, signInWithGoogle, signInWithFacebook, newUser,
} from '../model/user-authentication.js';

export const loginFunction = (email, pass, mensajeError) => {
  const msjError = mensajeError;
  // eslint-disable-next-line no-unused-vars
  const loginForm = document.querySelector('#form-autentication');
  signInUser(email, pass)
    .then(() => {
      window.location.hash = '#/home';
      // eslint-disable-next-line no-console
      // console.log('Me loguie');
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/user-not-found':
          msjError.innerHTML = '*Usuario no registrado';
          break;
        case 'auth/wrong-password':
          msjError.innerHTML = '*La contraseña es incorrecta';
          break;
        case 'auth/invalid-email':
          msjError.innerHTML = '*El correo ingresado es icorrecto, verifica e intenta de nuevo';
          break;
        default:
          msjError.innerHTML = 'Ha ocurrido un error';
      }
    });
};
export const loginWithGmail = () => {
  signInWithGoogle()
    .then((result) => {
      // eslint-disable-next-line no-unused-vars
      const user = result.user;
      // eslint-disable-next-line no-unused-vars
      const token = result.credential.accessToken;
      // eslint-disable-next-line no-console
      console.log(result);
      // eslint-disable-next-line no-console
      console.log('te has logueado con gmail', user, token);
      // console.log(result);
      newUser(result.user.uid, result.user.email, result.user.displayName, result.user.photoURL)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('se registro documento');
          window.location.hash = '#/home';
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e, 'se produjo un error');
        });
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(`Error detectado: ${errorMessage}, Tipo: ${errorCode} `);
    });
};
export const loginFacebook = () => {
  signInWithFacebook()
    .then((result) => {
      // eslint-disable-next-line no-console
      console.log('te has logueado con Facebook');
      // eslint-disable-next-line no-console
      console.log(result);
      newUser(result.user.uid, result.user.email, result.user.displayName, result.user.photoURL)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('se registró documento');
          window.location.hash = '#/home';
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('se produjo un error');
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // eslint-disable-next-line no-console
        console.log('es el mismo usuario');
      }
    });
};
