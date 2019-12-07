import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3VbXVyHlIu4UOA3ehRL3PPAHBJ-LKkeQ",
  authDomain: "projeto-eventos-63b40.firebaseapp.com",
  databaseURL: "https://projeto-eventos-63b40.firebaseio.com",
  projectId: "projeto-eventos-63b40",
  storageBucket: "projeto-eventos-63b40.appspot.com",
  messagingSenderId: "524464188032",
  appId: "1:524464188032:web:ae7cb57e4a84ee32281465"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);