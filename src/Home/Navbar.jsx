import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => console.log('user create successfully'))
      .then(error => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? 'text-black/50 font-bold' : isPending ? 'pending' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Registration"
          className={({ isActive, isPending }) =>
            isActive ? 'text-black/50 font-bold' : isPending ? 'pending' : ''
          }
        >
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isActive ? 'text-black/50 font-bold' : isPending ? 'pending' : ''
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.display_image} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  {/* <button className="btn btn-error " onClick={handleSignOut}>
                    Sign Out
                  </button> */}
                  <button onClick={handleSignOut} className="btn   btn-error">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // <Link to="/login">
            //   <a className="btn btn-primary">Login</a>
            //   </Link>
            <Link to="/login">
              <button className="btn  btn-primary">Login</button>
            </Link>
          )}
          {/* {user ? (
            <button className="btn btn-error " onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <a className="btn btn-primary">Login</a>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
