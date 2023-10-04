import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const LeftSide = () => {
  const { categories } = useContext(AuthContext);
  return (
    <div className="shadow-lg rounded-lg my-5 ">
      <h3 className="text-center font-semibold py-3 text-2xl">
        All Categories
      </h3>
      <div className="  space-y-4 py-7 px-7">
        {categories.map(category => (
          <li className="list-none text-left font-semibold" key={category.id}>
            {category.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
