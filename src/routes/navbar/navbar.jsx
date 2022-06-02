import { Fragment ,useContext} from 'react';
import {Outlet ,Link} from 'react-router-dom';
import { ReactComponent as Albaron } from "../../assets/8.svg"
import { UserContext } from "../../contexts/user.contexts"
import { CardContext } from "../../contexts/card"
import { signOutUser } from "../../utils/firebase.utils"
import CardIcon from "../../components/card-icon/card"
import CardDropdown  from '../../components/card-dropdown/card';
import "./navbar.css"

const Navbar = () => {
  const {currentUser}  = useContext(UserContext);
  const {isCardOpen} = useContext(CardContext);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null)
  // }

    return (
            <Fragment>
              <div className="navbar">
                  <Link className="logo-container" to="/">
                      <Albaron className="logo" />
                  </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                   {currentUser ? (
                     <span className="nav-link" onClick={signOutUser}>
                       SIGN OUT
                     </span>
                   ) : (
                     <Link className="nav-link" to="/auth">
                       SIGN IN
                     </Link>
                   )
                   }
                   <CardIcon />
                </div>
               {isCardOpen && <CardDropdown />}
              </div>
            <Outlet />
            </Fragment>
          )
};

export default Navbar;