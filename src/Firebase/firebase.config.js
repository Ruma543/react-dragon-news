import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALjsnDoThQnUz8r7iMd59i7v8uT4ROlhU',
  authDomain: 'react-dragon-news-ff038.firebaseapp.com',
  projectId: 'react-dragon-news-ff038',
  storageBucket: 'react-dragon-news-ff038.appspot.com',
  messagingSenderId: '53240185216',
  appId: '1:53240185216:web:557078dae0f5faa8a64165',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
