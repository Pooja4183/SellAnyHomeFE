import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDVObfYPR4_Uf29i1CtiPz4R746eIpYtMA",
  authDomain: "sellanyhome-66c20.firebaseapp.com",
  projectId: "sellanyhome-66c20",
  storageBucket: "sellanyhome-66c20.appspot.com",
  messagingSenderId: "681192197284",
  appId: "1:681192197284:web:2c2f01c69ec016c2bbaa31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};
export default app;
