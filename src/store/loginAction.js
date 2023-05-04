// import { loginActions } from './loginSlice';
// // import firebase from '../Firebase';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// export const getUserLogin = () => (dispatch) => {
//   const provider = new GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   provider.setCustomParameters({
//     login_hint: 'username@gmail.com',
//   });
//   // console.log('Login 1....', firebase.name);
//   const auth = getAuth();

//   let user;

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // const credential = GoogleAuthProvider.credentialFromResult(result);
//       // const token = credential.accessToken;
//       // The signed-in user info.
//       user = result.user;

//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       // The email of the user's account used.
//       // const email = error.email;
//       // The AuthCredential type that was used.
//       // const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//       console.error(error);
//     });

//   dispatch(loginActions.UserLogin({ userD: user }));
// };
