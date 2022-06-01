import { initializeApp } from "firebase/app"
import {getAuth , signInWithRedirect,createUserWithEmailAndPassword , signInWithPopup , GoogleAuthProvider} from "firebase/auth"
import { getFirestore , doc , getDoc, setDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA6bZwBeb7I4YPwFdLnG3HIaM_gHSDAFeE",
    authDomain: "my-store-430d7.firebaseapp.com",
    projectId: "my-store-430d7",
    storageBucket: "my-store-430d7.appspot.com",
    messagingSenderId: "25782124325",
    appId: "1:25782124325:web:12b0661dab50c058b464cc"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect = () => signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);

console.log(userDocRef);

const userSnapshot = await getDoc(userDocRef);

if(!userSnapshot.exists()){
  const { displayName , email} = userAuth;
  const createAt = new Date();

  try{
    await setDoc(userDocRef, {
      displayName, email,createAt, ...additionalInformation,
    });
  } catch(error){
    console.log('error user',error.message);
  }
}
return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
  }