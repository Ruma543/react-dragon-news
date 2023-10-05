import React from 'react';
import { useContext } from 'react';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const RightSide = () => {
  const navigate = useNavigate();
  const { googleLogin, user, githubLogin } = useContext(AuthContext);
  // console.log(googleLogin, user, githubLogin);
  const handleGoogle = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        alert('user update successfully');
        navigate('/');
      })
      .then(error => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    githubLogin()
      .then(result => {
        console.log(result.user);
      })
      .then(error => {
        console.log(error);
      });
  };
  return (
    <div className="px-7">
      <h2 className="text-xl font-semibold my-3 text-left">Login with</h2>
      <div className=" mx-auto space-y-3">
        <button
          onClick={handleGoogle}
          className=" btn flex gap-4 border w-full border-blue-500  "
        >
          <span>
            <FaGoogle></FaGoogle>
          </span>
          Login with Google
        </button>
        <button
          onClick={handleGithub}
          className=" btn flex gap-4 border w-full border-blue-500  "
        >
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>
      <h3 className="text-xl font-semibold my-3 text-left">Find us</h3>
      <div className="">
        <a
          href="#"
          className=" rounded-lg rounded-b-none px-4 py-2 border border-gray-700 flex items-center justify-left gap-4"
        >
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a
          href="#"
          className="  px-4 py-2 border-x border-gray-700 flex items-center justify-left gap-4"
        >
          <FaTwitter></FaTwitter> Twitter
        </a>
        <a
          href="#"
          className=" rounded-lg rounded-t-none px-4 py-2 border border-gray-700 flex items-center justify-left gap-4"
        >
          <FaInstagramSquare></FaInstagramSquare>Instagram
        </a>
      </div>
    </div>
  );
};

export default RightSide;
