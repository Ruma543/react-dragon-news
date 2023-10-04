import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleNews = ({ singleNews }) => {
  const { image_url, author, title, details, rating, total_view, _id } =
    singleNews;
  // console.log(singleNews);
  return (
    <div className="flex flex-col border border-black/40 rounded-lg  py-5">
      <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
        <div className="flex w-1/2 justify-start gap-5 px-5">
          <img className="w-20 h-20 rounded-full" src={author.img} alt="" />
          <div>
            <h3>{author.name}</h3>
            <h3> {author.published_date}</h3>
          </div>
        </div>
        <div className="px-5">
          <p className="flex gap-4">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </p>
        </div>
      </div>
      <div className="px-5 border-b-2 border-gray-400 py-5 space-y-4">
        <h3 className="text-xl font-semibold text-left">{title}</h3>
        <img className="cover w-full h-60" src={image_url} alt="" />

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link className="text-blue-400" to={`/news/${_id}`}>
              {' '}
              read more...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div className="flex justify-between px-4">
        <div className="py-5">
          <span>{rating.number}</span>
        </div>
        <div className="py-5">
          <p className="flex items-center gap-4">
            <span>
              <FaEye></FaEye>
            </span>
            <span>{total_view}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
