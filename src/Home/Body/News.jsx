import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import RightSide from './RightSide';
import { AuthContext } from '../../Provider/AuthProvider';
import DetailsNewsCard from './DetailsNewsCard';

const News = () => {
  const { news } = useContext(AuthContext);
  const [detailsNews, setDetailNews] = useState({});
  console.log(news);
  const { id } = useParams();
  useEffect(() => {
    const findNews = news && news?.find(item => item._id == id);
    setDetailNews(findNews);
    // console.log(findNews);
  }, [id, news]);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          {/* <h3>{detailsNews.length}</h3> */}
          <DetailsNewsCard detailsNews={detailsNews}></DetailsNewsCard>
        </div>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default News;
