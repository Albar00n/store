import { Fragment } from 'react';
import {Outlet ,Link} from 'react-router-dom';
import { ReactComponent as Albaron } from "../../assets/8.svg"
import "./navbar.css"

const Navbar = () => {
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
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
              </div>
            <Outlet />
            </Fragment>
          )
};

export default Navbar;