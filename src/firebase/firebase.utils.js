import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAfzolXRKEfnZMrcg0uixtzluqX0Grs0ME",
  authDomain: "crwn-db-a2b59.firebaseapp.com",
  databaseURL: "https://crwn-db-a2b59.firebaseio.com",
  projectId: "crwn-db-a2b59",
  storageBucket: "crwn-db-a2b59.appspot.com",
  messagingSenderId: "722604804657",
  appId: "1:722604804657:web:188d4c5a8d80baef6b2310",
  measurementId: "G-8Z4RRPFFD3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set ({
              displayName,
              email,
              createdAt,
              ...additionalData

          })
      } catch (error) {
          console.log("error creating user", error.message);

      }
      
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
