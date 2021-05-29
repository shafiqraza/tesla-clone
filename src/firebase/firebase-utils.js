import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDFYwIyX5vtumQk1--v-F58rwYlhxxnd4",
  authDomain: "tesla-clone-79869.firebaseapp.com",
  projectId: "tesla-clone-79869",
  storageBucket: "tesla-clone-79869.appspot.com",
  messagingSenderId: "288898447633",
  appId: "1:288898447633:web:c3180d0be467b0d3d634b0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
