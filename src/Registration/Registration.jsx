import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegistration = e => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const image = form.get('image');
    console.log(name, email, password, image);
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .then(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/3 mx-auto">
        <h3 className="text-2xl font-bold my-6"> Please Registration</h3>
        <form
          onSubmit={handleRegistration}
          className="border border-black/40 rounded-lg  px-6 py-6"
        >
          <label className="label">
            <span> User Name</span>
          </label>
          <input
            className="input input-bordered block w-full"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
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
            <span> User URL</span>
          </label>
          <input
            className="input input-bordered block w-full"
            type="text"
            name="image"
            placeholder="Image Url"
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
          <button className="btn btn-primary w-full">Register</button>
          {/* <input type="checkbox" name="checkbox" id="" required /> */}
        </form>
        <p>
          Already have account?
          <Link className="text-blue-400" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
