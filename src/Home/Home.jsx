import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import BreakingNews from './BreakingNews';
import LeftSide from './Body/LeftSide';
import RightSide from './Body/RightSide';
import NewsBody from './Body/NewsBody';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <BreakingNews></BreakingNews>
      <div className="grid grid-cols-4">
        <div className="">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-2">
          <NewsBody></NewsBody>
        </div>
        <div className="">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
