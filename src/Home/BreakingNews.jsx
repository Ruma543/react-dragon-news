import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  const { news } = useContext(AuthContext);
  // console.log(news);

  return (
    <div className="flex items-center">
      <button className="btn btn-error">latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map(topic => (
          <Link key={topic._id} className="mr-5 text-blue-600">
            {topic.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
