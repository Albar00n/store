
import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";
import "./authentication.scss";

 const authentication= () => {


  return (
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default authentication;
