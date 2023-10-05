import React, { useContext } from 'react';
import Navbar from '../Home/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // console.log(form);

    const email = form.get('email');
    const password = form.get('password');

    console.log(email, password);
    login(email, password)
      .then(result => {
        console.log('login successfully');
        navigate(location?.state ? location.state : '/');
      })
      .then(error => console.log('this user is not exist'));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/3 mx-auto">
        <h3 className="text-2xl font-bold my-6"> Please Login</h3>
        <form
          onSubmit={handleLogin}
          className="border border-black/40 rounded-lg  px-6 py-6"
        >
          <label className="label">
            <span> User Email</span>
          </label>
          <input
            className="input input-bordered block w-full"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <label className="label">
            <span> Password</span>
          </label>
          <input
            className="input input-bordered block w-full"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <label className="label">
            <a href="">Forget Password?</a>
          </label>
          <button className="btn btn-primary w-full">Login</button>
          {/* <input type="checkbox" name="checkbox" id="" required /> */}
        </form>
        <p>
          New for website? Please
          <Link className="text-blue-400" to="/registration">
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
