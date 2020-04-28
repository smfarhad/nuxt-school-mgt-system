import * as firebase from 'firebase/app'
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4bx1gOaiLDcSTQ9rSuVzX08mJZJ7tqT0",
  authDomain: "nuxtjs-schoolmgtsystem.firebaseapp.com",
  databaseURL: "https://nuxtjs-schoolmgtsystem.firebaseio.com",
  projectId: "nuxtjs-schoolmgtsystem",
  storageBucket: "nuxtjs-schoolmgtsystem.appspot.com",
  messagingSenderId: "673271190672",
  appId: "1:673271190672:web:9f751f7bf93ba4ca3c7415",
  measurementId: "G-0MQ2G32N68"
};

let app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}
export default firebase;
