import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAl-jqVwlqkp4N7bSxBuCBcQt-Mo5wAOpA',
  authDomain: 'invoice-app-yt-55895.firebaseapp.com',
  projectId: 'invoice-app-yt-55895',
  storageBucket: 'invoice-app-yt-55895.appspot.com',
  messagingSenderId: '821424501149',
  appId: '1:821424501149:web:d02c2d97a88026f73eff74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
