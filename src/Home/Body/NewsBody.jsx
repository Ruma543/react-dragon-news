import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SingleNews from './SingleNews';

const NewsBody = () => {
  const { news } = useContext(AuthContext);
  // console.log(news);
  return (
    <div>
      <h3 className="font-semibold text-2xl ">Todays All News</h3>
      <div className="space-y-5">
        {news.map(singleNews => (
          <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>
        ))}
      </div>
    </div>
  );
};

export default NewsBody;
