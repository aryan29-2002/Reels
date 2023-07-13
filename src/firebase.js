import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgi3CRieMOFcICosmo9Muk54UD1y3L110",
  authDomain: "video-upload-7991a.firebaseapp.com",
  projectId: "video-upload-7991a",
  storageBucket: "video-upload-7991a.appspot.com",
  messagingSenderId: "734396874303",
  appId: "1:734396874303:web:be5ba188f7a40b91af428a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()