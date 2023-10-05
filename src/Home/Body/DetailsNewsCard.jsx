import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye } from 'react-icons/fa';

const DetailsNewsCard = ({ detailsNews }) => {
  const { image_url, author, title, details, rating, total_view } =
    detailsNews || {};
  console.log(detailsNews);
  return (
    <div className=" px-5 py-5">
      <img src={image_url} alt="" />
      <h3>{details}</h3>
      <div className="flex justify-between items-center">
        <div className="flex justify-around gap-5 items-center ">
          <img className="w-20 h-20 rounded-full" src={author?.img} alt="" />
          <div>
            <h3>{JSON.stringify(author?.name)}</h3>
            <h3> {JSON.stringify(author?.published_date)}</h3>
          </div>
        </div>
        <div className="px-5">
          <p className="flex gap-4">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </p>
        </div>
      </div>
    </div>
    // <div className="flex flex-col border border-black/40 rounded-lg  py-5">
    //   <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
    //     <div className="flex w-1/2 justify-start gap-5 px-5">
    //       <img
    //         className="w-20 h-20 rounded-full"
    //         src={JSON.stringify(author?.img)}
    //         alt=""
    //       />
    //       <div>
    //         <h3>{JSON.stringify(author?.name)}</h3>
    //         <h3> {JSON.stringify(author?.published_date)}</h3>
    //       </div>
    //     </div>
    //     <div className="px-5">
    //       <p className="flex gap-4">
    //         {/* <FaRegBookmark></FaRegBookmark>
    //         <FaShareAlt></FaShareAlt> */}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="px-5 border-b-2 border-gray-400 py-5 space-y-4">
    //     <h3 className="text-xl font-semibold text-left">{title}</h3>
    //     <img className="cover w-full h-60" src={image_url} alt="" />
    //     <p>{details}</p>
    //   </div>
    //   <div className="flex justify-between px-4">
    //     <div className="py-5">
    //       <span>{rating}</span>
    //     </div>
    //     <div className="py-5">
    //       <p className="flex items-center gap-4">
    //         <span>
    //           <FaEye></FaEye>
    //         </span>
    //         <span>{total_view}</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DetailsNewsCard;
