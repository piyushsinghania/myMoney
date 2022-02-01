import firebase from 'firebase/app';
import 'firebase/firestore';

// config
const firebaseConfig = {
  apiKey: "AIzaSyDyfBGQMQtWCPGL7fAqc6yySxNPZ6ekDi4",
  authDomain: "mymoney-fbdb7.firebaseapp.com",
  projectId: "mymoney-fbdb7",
  storageBucket: "mymoney-fbdb7.appspot.com",
  messagingSenderId: "509885466689",
  appId: "1:509885466689:web:6ee8b80f8a06d5d2c4dec0"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };