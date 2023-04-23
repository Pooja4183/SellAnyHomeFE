import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCxAYMIBuHSRqkLebqD0BNFPLwAA_5Zuj0',
  authDomain: 'serene-3e638.firebaseapp.com',
  databaseURL: 'https://serene-3e638-default-rtdb.firebaseio.com',
  projectId: 'serene-3e638',
  storageBucket: 'serene-3e638.appspot.com',
  messagingSenderId: '720798309186',
  appId: '1:720798309186:web:013e15deea08ea466c06db',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
