import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUp from "../../components/sign-up/sign-up";


 const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Popup</button>
      <SignUp />
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button> */}
    </div>
  );
};

export default SignIn;
