import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
  return (
    <div>
      <div className=" space-y-4">
        <img className="mx-auto" src={logo} alt="" />
        <p className="font-bold text-gray-700 text-xl">
          Journalism Without Fear or Favour
        </p>
        <p className="font-semibold text-gray-400">
          {moment().format('dddd, MMMM D, YYYY ')}
        </p>
      </div>
    </div>
  );
};

export default Header;
